"use strict";

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time  =  prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();



let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
   
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = +prompt("Во сколько обойдется?", "");
        
        if ( (typeof(a)) != null && (typeof(b)) != null && a != "" && b != "" && a.length < 50 ) {
            appData.expenses[a] = b;
    
        } else {
            alert("Попробуйте еще раз!!!");
            i--;
        }
        
    }
    
}


chooseExpenses();


function detectDayBudget() {
    appData.moneyPerDay = (appData.moneyData / 30).toFixed();

    alert("Ежедненый бюджет: " + appData.moneyPerDay + "Руб.");
}

detectDayBudget();



function detectLevel() {
    if(appData.moneyPerDay < 100){
        alert("Минимальный уровень достатка");
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        alert("Средний уровень достатка");
    } else if(appData.moneyPerDay > 2000) {
        alert("Высокий уровень достатка");
    } else{
        alert("Что то пошло не так!");
    }
}


detectLevel(); 


function checkSavings() {
    if(appData.savings == true){
        let save = +prompt("Какова сумма накоплений?", ""),
            percent = +prompt("Под какой процент?", "");

        appData.monthIncome = save/100/12*percent;

        alert("Доход в месяц с Вашего депозита:" + appData.monthIncome);
    }
}

checkSavings();


function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
   
        let answerOptExpenses = prompt("Статья необязательных расходов?", "");
        
        if ( (typeof(answerOptExpenses)) != null && answerOptExpenses != "" && answerOptExpenses.length < 50 ) {
            appData.optionalExpenses[i] = answerOptExpenses;
            console.log(appData.optionalExpenses);
    
        } else {
            alert("Попробуйте еще раз!!!");
            i--;
        }
        
    }
}

chooseOptExpenses();

