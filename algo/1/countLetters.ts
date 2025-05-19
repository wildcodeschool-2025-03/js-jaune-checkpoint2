/*
Créé une fonction countLetters qui compte, dans une string donnée, le nombre de fois qu'une lettre apparait.

Exemples :
* "" et "a" -> 0
* "a" et "a" -> 1
* "aaaaabbbaa" et "a" -> 7
* "bbacbaaa" et "c" -> 1
* "bbcc" et "a" -> 0
*/

function countLetters(givenString: string, letter: string): number {
  let counter = 0;
  for (let i = 0; i < givenString.length; i++) {
    const character = givenString[i];

    if (character === letter) {
      counter++;
    }
  }

  return counter;
}

export default countLetters;
