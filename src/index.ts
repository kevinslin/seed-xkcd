import _ from 'lodash';
import path from "path";
// @ts-ignore
import xkcd from 'xkcd';
import fs from "fs-extra";
import { NotePropsV2, NoteUtilsV2 } from "@dendronhq/common-all";
import { cleanFileName, note2File } from "@dendronhq/common-server";
import { DateTime } from 'luxon';


/*
{
    month: '1',
    num: 1,
    link: '',
    year: '2006',
    news: '',
    safe_title: 'Barrel - Part 1',
    transcript: '[[A boy sits in a barrel which is floating in an ocean.]]\n' +
      "Boy: I wonder where I'll float next?\n" +
      '[[The barrel drifts into the distance. Nothing else can be seen.]]\n' +
      "{{Alt: Don't we all.}}",
    alt: "Don't we all.",
    img: 'https://imgs.xkcd.com/comics/barrel_cropped_(1).jpg',
    title: 'Barrel - Part 1',
    day: '1'
  }
*/
type XKCDResp = {
    month: string,
    num: number,
    link: string,
    year: string,
    news: string,
    safe_title: string,
    transcript: string
    alt: string
    img: string
    title: string
    day: string

}

function cleanLinkString(txt: string) {
    return txt.replace(/\[/, '\\[').replace(/\]/, '\\]');
}

function getXkcd(num: number): Promise<XKCDResp> {
    return new Promise((resolve) => {
        xkcd(num, function (data: XKCDResp) {
            resolve(data)
        });
    });
}

function toNote(opts: { meta: XKCDResp }): NotePropsV2 {
    const { meta } = opts;
    const { num, title, year, month, day, alt, img, transcript } = meta;
    var dt = DateTime.local(parseInt(year), parseInt(month), parseInt(day));
    const body = [
        `![${cleanLinkString(alt)}](${img})`,
        `> "[${title}](https://xkcd.com/${num}/)", by Randall Munroe, licensed under Creative Commons Attribution-NonCommercial 2.5 License`,
        "",
        // "## Transcript",
        // transcript
    ].join("\n");
    const fname = `xkcd.${num}-${_.kebabCase(title)}`;
    const sources = {
        name: 'xkcd',
        url: 'https://creativecommons.org/licenses/by-nc/2.5/',
        license: "Creative Commons 2.5",
    }
    return NoteUtilsV2.create({
        id: fname,
        title,
        created: dt.toMillis(),
        updated: dt.toMillis(),
        body: body,
        fname,
        vault: { fsPath: "vault" },
        custom: {
            sources
        }
    })
}

async function createNotes() {
    const vault = { fsPath: "vault" }
    fs.ensureDirSync(vault.fsPath);
    await fs.readdirSync("data").map(async fh => {
        const metadata: XKCDResp[] = await fs.readJSON(path.join("data", fh));
        return Promise.all(metadata.map(meta => {
            const note = toNote({ meta })
            return note2File({ note, vault, wsRoot: "." })
        }))
    })
}

async function getNotes() {
    const comics = _.range(2000, 2440);
    const out: XKCDResp[] = [];
    try {
        await _.reduce(
            comics,
            async (resp, id) => {
                try {
                    let acc = await resp;
                    const c = await getXkcd(id)
                    if (c.num % 100 === 0) {
                        console.log(`process ${c.num} files...`)
                    }
                    out.push(c);
                    return acc;
                } catch (err) {
                    console.log(id);
                    console.log(err);
                    throw err;
                }
            },
            Promise.resolve({
                changed: [],
            })
        );
        await Promise.all(_.chunk(out, 100).map(chunk => {
            const from = chunk[0].num
            const to = chunk.slice(-1)[0].num;
            return fs.writeJSON(path.join("data", `${from}-${to}.json`), chunk)
        }));
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function main() {
    console.log("start");
    //await getNotes();
    await createNotes();
}

main();