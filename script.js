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

let userAge = prompt(`Введіть ваш рік народження:`);
 if(userAge === null){
    alert(`Шкода що ви не захотіли заповнити ваш рік`);
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
 } else{
    let userCity = prompt(`Введіть місто в якому ви проживаете:`);
    if (userCity === null){
        alert(`Шкода що ви не захотіли вводити ваше місто!`);
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