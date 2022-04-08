/* ### Sistema de gastos familiares

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.

*/

const sum = (array) => {
  let total = 0

  for (let value of array) {
    total += value
  }

  return total
}

const calculateBalance = ( data ) => {
  const calculateIncomes = sum(data.incomes)
  const calculateExpenses = sum(data.expenses)

  const balance = calculateIncomes - calculateExpenses

  let msg
  msg = balance > 0 ? 'Positivo' : 'Negativo'

  return ({'Saldo': balance, 'Mensagem': msg})
}

let financeFamily = {
  incomes: [50, 220, 36, 774],
  expenses: [14, 100, 88, 32]
}

console.log(calculateBalance(financeFamily))