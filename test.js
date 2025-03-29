const { getLowExpenseMonths } = require('./homework 2.4.1'); 
describe("Функция getLowExpenseMonths", () => {
  test("Обычный случай - несколько месяцев с расходами ≤ 1000", () => {
    const yearlyExpenses = [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390];
    expect(getLowExpenseMonths(yearlyExpenses)).toEqual(["май", "июнь", "июль", "сентябрь", "ноябрь"]);
  });

  test("Граничное значение 1000 включается", () => {
    const yearlyExpenses = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000];
    expect(getLowExpenseMonths(yearlyExpenses)).toEqual(["январь"]);
  });

  test("Все расходы выше 1000 - должен вернуть пустой массив", () => {
    const yearlyExpenses = [1500, 2000, 3000, 5000, 6000, 7000, 8000, 9000, 1100, 1200, 5000, 4000];
    expect(getLowExpenseMonths(yearlyExpenses)).toEqual([]);
  });

  test("Все расходы ниже 1000 - должны вернуться все месяцы", () => {
    const yearlyExpenses = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50, 30, 10];
    expect(getLowExpenseMonths(yearlyExpenses)).toEqual([
      "январь", "февраль", "март", "апрель", "май", "июнь",
      "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"
    ]);
  });

  test("Пустой массив - должен вернуть пустой массив", () => {
    expect(getLowExpenseMonths([])).toEqual([]);
  });

  test("Массив из одного элемента - должен вернуть один месяц, если ≤ 1000", () => {
    expect(getLowExpenseMonths([500])).toEqual(["январь"]);
  });

  test("Массив из одного элемента - должен вернуть пустой массив, если > 1000", () => {
    expect(getLowExpenseMonths([1500])).toEqual([]);
  });
});