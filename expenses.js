// expenses.js

function getLowExpenseMonths(yearlyExpenses) {
    return yearlyExpenses
      .map((expense, index) => ({ month: index, expense })) 
      .filter(item => item.expense <= 1000) 
      .map(item => new Date(2024, item.month).toLocaleString('ru-RU', { month: 'long' }));
  }
  
  module.exports = { getLowExpenseMonths };
  