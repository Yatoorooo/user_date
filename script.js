"use strict";

let country ={
    'Київ':'Україна',
    'Лондон':'США',
    'Вашингтон':'Великобританія',
}
let userSportDate = {
    'Футбол':'Ліонель Мессі',
    'Теніс':'Рафаель Надаль',
    'Баскетбол':'Леброн Джеймс',
}

let userAge = prompt(`Який у вас вік народженні?`);
 if(userAge === null){
    alert(`Шкода що ви не захотіли заповнити ваш вік`);
 } else{
    let userCity = prompt(`Введіть місто в якому ви проживаете:`);
    if (userCity === null){
        alert(`Шкода що ви не захотіли вводити ваше місто!`);
    } else {
        let userSport = prompt(`Введіть свій улюбленний спорт:`);
        if(userSport === null){
            alert(`Шкода що ви не захотіли вводити ваш улюбленный спорт!`);
        } else{
            let currentYear = (new Date).getFullYear();
            let age = currentYear - parseInt(userAge);
            let messageCity;
            if(country[userCity]){
               messageCity = `Ти живеш у столиці ${country[userCity]}` ;

            }else{
                messageCity = `Ти живеш у місті ${userCity}`;
            }
            let messageSport;
            if(userSportDate[userSport]){
                messageSport =`Круто! Хочеш стати як ${userSportDate[userSport]}?`

            }else{
                messageSport = `Круто! Хочеш стати професіоналом у своєму виді спорту?`
            }

            let message = `
            Ваш вік: ${age}
            ${messageCity}
            ${messageSport}`;
            alert(message);
        }
    } 
 }