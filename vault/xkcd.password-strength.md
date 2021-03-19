---
id: xkcd.password-strength
title: Password Strength
desc: ''
updated: '1616125521702'
created: '1312959600000'
sources:
  name: xkcd
  url: 'https://creativecommons.org/licenses/by-nc/2.5/'
  license: Creative Commons 2.5
---
![To anyone who understands information theory and security and is in an infuriating argument with someone who does not (possibly involving mixed case), I sincerely apologize.](https://imgs.xkcd.com/comics/password_strength.png)

## Transcript
((The comic illustrates the relative strength of passwords assuming basic knowledge of the system used to generate them. A set of boxes is used to indicate how many bits of entropy a section of the password provides. The comic is laid out with 6 panels arranged in a 3x2 grid. On each row, the first panel explains the breakdown of a password, the second panel shows how long it would take for a computer to guess, and the third panel provides an example scene showing someone trying to remember the password.))

[[The password "Tr0ub4dor&3" is shown in the centre of the panel. A line from each annotation indicates the word section the comment applies to.]]
Uncommon (non-gibberish) base word [[Highlighting the base word - 16 bits of entropy.]]
Caps? [[Highlighting the first letter - 1 bit of entropy.]]
Common Substitutions [[Highlighting the letters 'a' (substituted by '4') and both 'o's (the first of which is substituted by '0') - 3 bits of entropy.]]
Punctuation [[Highlighting the symbol appended to the word - 4 bits of entropy.]]
Numeral [[Highlighting the number appended to the word - 3 bits of entropy.]]
Order unknown [[Highlighting the appended characters - 1 bit of entropy.]]
(You can add a few more bits to account for the fact that this is only one of a few common formats.)

~28 bits of entropy
2^28 = 3 days at 1000 guesses
sec
(Plausible attack on a weak remote web service. Yes, cracking a stolen hash is faster, but it's not what the average user should worry about.)
Difficulty to guess: Easy.

[[A person stands scratching their head trying to remember the password.]]
Person: Was it trombone? No, Troubador. And one of the Os was a zero?
Person: And there was some symbol...
Difficulty to remember: Hard.

[[The passphrase "correct horse battery staple" is shown in the centre of the panel.]]
Four random common words {{Each word has 11 bits of entropy.}}

~44 bits of entropy.
2^44 = 550 years at 1000 guesses
sec
Difficulty to guess: Hard.

[[A person is thinking, in their thought bubble a horse is standing to one side talking to an off-screen observer. An arrow points to a staple attached to the side of a battery.]]
Horse: That's a battery staple.
Observer: Correct!
Difficulty to remember: You've already memorized it

((The caption below the comic reads: Through 20 years of effort, we've successfully trained everyone to use passwords that are hard for humans to remember, but easy for computers to guess.))

{{Title text: To anyone who understands information theory and security and is in an infuriating argument with someone who does not (possibly involving mixed case), I sincerely apologize.}}
