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
  let cont = 0;
  if (givenString.length === 0 || letter.length === 0) {
    return 0;
  }
  for (let i = 0; i < givenString.length; i++) {
    if (givenString[i] === letter) {
      cont++;
    }
  }
  return cont;
}

export default countLetters;
