//Операторы

// && - условная - и 
// || - условная - или 
// > - больше 
// >= - больше и равно  
// < - меньше
// <= - меньше и равно 
// = - присваевание
// == - сравнивание значений

console.log ('2' == 2)

// === - сравнивание значения и типа данных 

console.log ('2' === 2)




// if(){}else{}

//Если булевое значение - тру
if('2' === 2) {
    //Попадаем сюда

    console.log('here')
} else if('2' == 2){
    console.log('correct')
}
else {
    console.log('Error')
}


//Пример

let name = 'Andrey';
let age = 17;

if(age >= 4 && age <= 16){
    console.log('Approved for 4 - 16 years')
} else if(age >= 17 && age <= 18){
    console.log('Approved for 16 - 18 years')
} 
else {
    console.log('No films for you')
}


// // Задача1

// let setUser = prompt('Login');
// let setPass = prompt('Password');

// let login = 'admin';
// let pass = '123';

// if(setUser === login && setPass === pass){
//     alert(`Привет, ${setUser}`)
// }
// else if (setUser !== login && setPass === pass){
//     alert(`Не верный логин`)
// }else if (setPass !== pass && setUser == login){
//     alert(`Не верный пароль`)
// }
// else{
//     alert(`Неверный логин и пароль`);
// }

//Задача 1 UI

let inp1 = document.querySelector('.test1')
let inp2 = document.querySelector('.test2')
let btn2 = document.querySelector('.btn2')
let span2 = document.querySelector('.span2')
let login = 'admin';
let pass = '123';


btn2.onclick = () => {

    let setUser = inp1.value
    let setPass = inp2.value

    if(setUser === login && setPass === pass){
        span2.innerHTML = `Привет, ${setUser}`
    }
    else if (setUser !== login && setPass === pass){
        span2.innerHTML = `Не верный логин`
    }else if (setPass !== pass && setUser == login){
        span2.innerHTML = `Не верный пароль`
    }
    else{
        span2.innerHTML = `Неверный логин и пароль`
    }
}



//Задача 2

// let userAge = prompt('Your age');

// let age1 = 18;
// let age2 = 25;
// let age3 = 60;

// if(userAge >= age1 && userAge < age2){
//     console.log("Прыдатный на сроковую")
// }else if(userAge >= age2 && userAge <= age3){
//     console.log("Прыдатный на контрактную")
// }else{
//     console.log("Не прыдатный")
// }

//Задача 2 UI

let inp = document.querySelector('.test')
let btn = document.querySelector('.btn')
let span = document.querySelector('.span')

btn.onclick = () => {

    let userAge = inp.value

    let age1 = 18;
    let age2 = 25;
    let age3 = 60;

    if(+userAge >= age1 && +userAge < age2){
        span.innerHTML = "Прыдатный на сроковую"
    }else if(+userAge >= age2 && +userAge <= age3){
        span.innerHTML = "Прыдатный на контрактную"
    }else{
        span.innerHTML = "Не прыдатный"
    }

}




/////////////////////////////////////////////////////////////////////////

// Switch 

let device = 'IPhone'

// switch(device) {
//     case 'IPhone':
//         console.log('IPhone: 1300$')
//         break;
//     case 'Samsung':
//         console.log('Samsung: 1000$') 
//     default:
//         console.log('Not available')    
// }


let a = 2;
let b = 4;
let resSimbol = '*';

switch(resSimbol) {
    case '+':
        res = a + b
        break
    case '-':
        res = a - b
        break
    case '*':
        res = a * b
        break 
    case '/':
        res = a / b
        break
}
console.log(res)

let inp3 = document.querySelector('.test3')
let inp4 = document.querySelector('.test4')
let inp5 = document.querySelector('.test5')
let btn3 = document.querySelector('.btn3')
let span3 = document.querySelector('.span3')

btn3.onclick = () => {

    let inpp =  inp3.value  
    let inpp1 =  inp4.value  
    let inpp2 =  inp5.value  

    switch(inpp1) {
        case '+':
            res = +inpp + +inpp2
            span3.innerHTML = res
            break
        case '-':
            res = +inpp - +inpp2
            span3.innerHTML = res
            break
        case '*':
            res = +inpp * +inpp2
            span3.innerHTML = res
            break 
        case '/':
            res = +inpp / +inpp2
            span3.innerHTML = res
            break
    }


}