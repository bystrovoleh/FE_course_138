// Типы данных 

//Примитивные 

//////////////////////////////////////////////////////////////////

//Число
const num = 22.99;

console.log(num)
//Округление
console.log(Math.round(num))

//////////////////////////////////////////////////////////////////

//Строка
const str = '  String Test  ';

//Все с маленькой
console.log(str.toLowerCase())

//Убирает отступы
console.log(str.trim())

//////////////////////////////////////////////////////////////////

//Булевый

// False: 0, Undefined, Null, NaN

let bool = true;

console.log(Boolean(0))

console.log(Boolean(''))

//////////////////////////////////////////////////////////////////

//Undefined и Null 

let un;
//Undefined - когда есть переменная, но не объявленна
console.log(un);

//Null - когда переменная не существует
// console.log(un2);

//////////////////////////////////////////////////////////////////

//Не примитивные 

//////////////////////////////////////////////////////////////////

//Объект

let arr = ['Apple', 'Android', 'Lenovo'] // Массив - коллекция чего-то
console.log(arr)


let Apple = {
    brand: 'Apple',
    prise: '2000'

} // Объект

console.log(Apple)

// console.dir(document.title)

//////////////////////////////////////////////////////////////////

//Функция 

function log(par){
    console.log('Тест' + par)
}