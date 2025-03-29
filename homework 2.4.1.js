/*function calculateExpenses(yearlyExpenses) {
    return yearlyExpenses
      .filter(expense => expense > 1000) 
      .reduce((sum, expense) => sum + expense, 0); 
  }
  
  function testExpenses(expenseObject) {
    let result = calculateExpenses(expenseObject.yearlyExpences);
    console.log(`Расчет для массива:`, expenseObject.yearlyExpences);
    console.log(`Сумма расходов больше 1000: ${result}`);
  }
  
    let expencesExamples = [
    { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
    { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
    { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
  ];
  
  
  expencesExamples.forEach(testExpenses);
  */

  function getLowExpenseMonths(yearlyExpenses) {
    return yearlyExpenses
      .map((expense, index) => ({ month: index, expense })) 
      .filter(item => item.expense <= 1000) 
      .map(item => new Date(2024, item.month).toLocaleString('ru-RU', { month: 'long' }));
  }
  
  module.exports = { getLowExpenseMonths };
        

function testExpenses(expenseObject) {
    let lowExpenseMonths = getLowExpenseMonths(expenseObject.yearlyExpences);
    console.log(`Месяцы с расходами ≤ 1000: ${lowExpenseMonths.join(', ')}`);
}

let expencesExamples = [
    { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
    { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
    { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
];

expencesExamples.forEach(testExpenses);

