const { getLowExpenseMonths } = require('./homework 2.4.1'); // Импортируем нашу функцию

test('Месяцы с расходами ≤ 1000 для первого массива', () => {
  const expencesExamples = [
    { yearlyExpences: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
  ];

  const result = getLowExpenseMonths(expencesExamples[0].yearlyExpences);
  expect(result).toEqual(['май', 'июнь']); // проверяем результат
});

test('Месяцы с расходами ≤ 1000 для второго массива', () => {
  const expencesExamples = [
    { yearlyExpences: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
  ];

  const result = getLowExpenseMonths(expencesExamples[0].yearlyExpences);
  expect(result).toEqual(['январь', 'февраль', 'май', 'июль', 'август', 'октябрь']); // проверяем результат
});

test('Месяцы с расходами ≤ 1000 для третьего массива', () => {
  const expencesExamples = [
    { yearlyExpences: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
  ];

  const result = getLowExpenseMonths(expencesExamples[0].yearlyExpences);
  expect(result).toEqual(['январь', 'февраль', 'сентябрь', 'октябрь', 'ноябрь']); // проверяем результат
});