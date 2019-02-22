"use strict";

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    itemExpensesFirst = prompt("Введите обязательную статью расходов в этом месяце", ""),
    costItemExpensesFirst = +prompt("Во сколько обойдется?", ""),
    itemExpensesSecond = prompt("Введите обязательную статью расходов в этом месяце", ""), 
    costItemExpensesSecond = +prompt("Во сколько обойдется?", "");

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {
        itemExpensesFirst: costItemExpensesFirst,
        itemExpensesSecond: costItemExpensesSecond
    },
    optionalExpenses: {},
    income: [],
    savings: false
};


alert("Бюджет на день:" + appData.moneyData / 30);

console.log(appData.expenses.itemExpensesFirst);