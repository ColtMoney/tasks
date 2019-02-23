"use strict";

let money = +prompt("Ваш бюджет на месяц?", ""),
    time  =  prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// for (let i = 0; i < 2; i++) {
   
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = +prompt("Во сколько обойдется?", "");
    
//     if ( (typeof(a)) != null && (typeof(b)) != null && a != "" && b != "" && a.length < 50 ) {
//         appData.expenses[a] = b;

//     } else {
//         alert("Попробуйте еще раз!!!");
//         i--;
//     }
    
// }

let count = 0;

while(count < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется?", "");

    if ( (typeof(a)) != null && (typeof(b)) != null && a != "" && b != "" && a.length < 50 ) {
        appData.expenses[a] = b;
        count++;

    } else {
        alert("Попробуйте еще раз!!!");
    }
}

// count = 0;

// do {

//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = +prompt("Во сколько обойдется?", "");

//     if ( (typeof(a)) != null && (typeof(b)) != null && a != "" && b != "" && a.length < 50 ) {
//         appData.expenses[a] = b;
//         count++;

//     } else {
//         alert("Попробуйте еще раз!!!");
//     } 

// } while(count < 2);

appData.moneyPerDay = appData.moneyData / 30;

alert("Ежедненый бюджет: " + appData.moneyPerDay + "Руб.");

if(appData.moneyPerDay < 100){
    alert("Минимальный уровень достатка");
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    alert("Средний уровень достатка");
} else if(appData.moneyPerDay > 2000) {
    alert("Высокий уровень достатка");
} else{
    alert("Что то пошло не так!");
}

