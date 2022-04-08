/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F

*/

function transformScore(score) {
  let scoreFinal
  
  if (score >= 90) {
    scoreFinal = 'A'
  } else if (score >= 80 && score <= 89) {
    scoreFinal = 'B'
  } else if (score >= 70 && score <= 79) {
    scoreFinal = 'C'
  } else if (score >= 60 && score <= 69) {
    scoreFinal = 'D'
  } else {
    scoreFinal = 'F'
  }

  return scoreFinal
}

console.log(transformScore(82))