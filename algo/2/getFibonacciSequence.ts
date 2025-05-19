/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/

function getFibonacciSequence(size: number): number[] {
  // Ton code ici !
  if (size <= 0) return [];

  const sequence: number[] = [];

  Array.from({ length: size }, (_, i) => {
    if (i === 0) sequence.push(0);
    else if (i === 1) sequence.push(1);
    else sequence.push(sequence[i - 1] + sequence[i - 2]);
  });

  return sequence;
}

export default getFibonacciSequence;
