

//Назначение переменных

// Old
// var a = 2;

//Обычная переменная - с возможностью перезаписывания
let a = 2;

//Константа - нет возможноси изменить тип данных
const b = 2;


// Число
let num = 1000 + 10;

// Строка
let str = '<h1 class="test">Test</h1>'



// Варианты вывода результата

//Алерт
//alert(a)

//Выводит в конце документа
// document.write(num)

//Конкретное место куда вставить
// document.querySelector('.out').innerHTML = 'test'

//Основной
console.log('test2');



//Математические операторы (*, / , +, -)

console.log(2 + 2)

//Конкатинация 
let userName = 'Oleh'
console.log('Hello ' + userName)


// Варианты ввода результата

let a1 = 2;
let a2 = 3;
let res = a1 + a2;

console.log(res)


// let p1 = +prompt('First number')
// let p2 = +prompt('Second number')

// console.log(p1 + "+" + p2 + "=" + (p1 + p2))


//Первая задача
// let name1 = prompt('First name')
// let lastName = prompt('Last name')

// console.log("Hello" + ", " + name1 + " " + lastName + "!")


//Вторая задача
// let name1 = prompt('First name')
// let number1 = prompt('Sum in USD')

// let calcs = number1 * 41;

// console.log(name1 + ", вы получите:" + calcs)




//////////////////////////////////////////////////////////////////////////////////////////


let btn = document.querySelector('.btn')
let inp1 = document.querySelector('.inp1')
let inp2 = document.querySelector('.inp2')
let calcOut = document.querySelector('.calc-out')

btn.onclick = () => {
    // console.log(+inp1.value + +inp2.value)

    calcOut.innerHTML = +inp1.value + +inp2.value
}


//Задача 2
let name1 = prompt('First name')
let age = +prompt('Age')
let test11 = document.querySelector('.test1')

// test11.innerHTML = "<h1 style='color: red'>" + "Привет! " + name1 + "! " + "Поздравляю с днем рождения, Вам: " + age + "</h1>";

test11.innerHTML = `<h1 style='color: red'> Привет! ${name1}! Поздравляю с днем рождения, Вам ${age}`



