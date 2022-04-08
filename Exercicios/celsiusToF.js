/* Celsius to Fahrenheit

Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32

*/    

function convertCtoF( expression ) {
  const celsiusExists = expression.toUpperCase().includes('C')
  const fahrenheitExists = expression.toUpperCase().includes('F')

  if (!celsiusExists && !fahrenheitExists) {
    throw new Error('Unidade não reconhecida!')
  }

  let updatedExpression = Number(expression.toUpperCase().replace("F", ""))
  let formula = f => (f - 32) * 5/9 
  let expressionSign = 'C'

  if (celsiusExists) {
    updatedExpression = Number(expression.toUpperCase().replace("C", ""))
    formula = c => c * 9/5 + 32
    expressionSign = 'F'
  }

  return formula(updatedExpression) + expressionSign
}

try {
  console.log(convertCtoF('32F'))
  console.log(convertCtoF('0C'))
  console.log(convertCtoF('14z'))
} catch (error) {
  console.log(error.message)
}