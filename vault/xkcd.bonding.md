---
id: xkcd.bonding
title: Bonding
desc: ''
updated: '1616126764417'
created: '1363762800000'
sources:
  name: xkcd
  url: 'https://creativecommons.org/licenses/by-nc/2.5/'
  license: Creative Commons 2.5
---
![I'm trying to build character but Eclipse is really confusing.](https://imgs.xkcd.com/comics/bonding.png)
> "Bonding", by Randall Munroe, licensed under Creative Commons Attribution-NonCommercial 2.5 License

## Transcript
class Ball extends Throwable {} 
class P { 
    P target;
    P(P target) { 
        this.target = target;
    }
    void aim(Ball ball) { 
        try { 
            throw ball; 
        }
        catch (Ball b) { 
            target.aim(b);
        }
    }
    public static void main(String[] args) { 
        p parent = new P(null);
        p child = new P(parent);
        parent.target = child; 
        parent.aim(new Ball());
    }
}
{{Title text: I'm trying to build character but Eclipse is really confusing.}}
