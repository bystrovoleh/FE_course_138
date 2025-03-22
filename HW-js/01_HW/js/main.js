
//Task-5

let inp5 = document.querySelector('.inp-5')
let btn5 = document.querySelector('.btn-5')
let span5 = document.querySelector('.span-5')

btn5.onclick = () => {

    span5.innerHTML = `Привет, ${inp5.value}`

}

//Task-6

let inp6 = document.querySelector('.inp-6')
let btn6 = document.querySelector('.btn-6')
let span6 = document.querySelector('.span-6')
const currentYear = 2025

btn6.onclick = () => {

    let calc6 = currentYear - inp6.value

    span6.innerHTML = `Ваш возраст: ${calc6}`

}

//Task-7

let inp7 = document.querySelector('.inp-7')
let btn7 = document.querySelector('.btn-7')
let span7 = document.querySelector('.span-7')
const pTimes = 4

btn7.onclick = () => {

    let calc7 = pTimes * inp7.value

    span7.innerHTML = `Периметр: ${calc7}`

}

//Task-8

let inp8 = document.querySelector('.inp-8')
let btn8 = document.querySelector('.btn-8')
let span8 = document.querySelector('.span-8')
const pi = 3.14159

btn8.onclick = () => {

    let subCalc8 = inp8.value * inp8.value

    let calc8 = pi * subCalc8

    span8.innerHTML = `Площадь: ${calc8}`

}

//Task-9

let inp9 = document.querySelector('.inp-9')
let inp9_1 = document.querySelector('.inp-9-1')
let btn9 = document.querySelector('.btn-9')
let span9 = document.querySelector('.span-9')

btn9.onclick = () => {

    let calc9 = inp9.value / inp9_1.value

    span9.innerHTML = `Необходимая скорость: ${calc9} км/ч`

}

//Task-10

let inp10 = document.querySelector('.inp-10')
let btn10 = document.querySelector('.btn-10')
let span10 = document.querySelector('.span-10')
const exchangeRate = 0.9179

btn10.onclick = () => {

    let calc10 = inp10.value * exchangeRate

    span10.innerHTML = `Вы получите: ${calc10} EUR`

}
