"use strict";

var money = +prompt("Ваш бюджет на месяц?", "400"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2019-02-22"),
    itemExpensesFirst = prompt("Введите обязательную статью расходов в этом месяце", "Еда"),
    costItemExpensesFirst = +prompt("Во сколько обойдется?", "100"),
    itemExpensesSecond = prompt("Введите обязательную статью расходов в этом месяце", "Развлечения"), 
    costItemExpensesSecond = +prompt("Во сколько обойдется?", "150");

var appData = {
    moneyData: money,
    timeData: time,
    expenses: {
        itemFirst: itemExpensesFirst,
        costItemFirst: costItemExpensesFirst,
        itemSecond: itemExpensesSecond,
        costItemSecond: costItemExpensesSecond,
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

alert("Бюджет на день:" + appData.moneyData / 30);