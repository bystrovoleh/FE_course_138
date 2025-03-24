//Task 1

let fr = '0.1'
let sec = '0.2'

let res = +fr + +sec

console.log(res)

//Task 2

let str = '1'
let num = 2

let res2 = +str + num

console.log(res2)

//Task 3

let inp = document.querySelector('.inp1')
let btn = document.querySelector('.btn')
let span = document.querySelector('.span')

btn.onclick = () => {
    let value = inp.value

    let questMb = +value * 1000

    let res3 = questMb / 800

    span.innerHTML = res3
}

//Task 4

let quest1 = +prompt('Amount of money');
let quest2 = +prompt('Price for choco bar');

let chocResult = quest1 / quest2;

let sdachResult = quest1 - (Math.floor(chocResult) * quest2);


console.log(`You can buy: ${Math.floor(chocResult)} chocoBars. Your change: ${sdachResult}`)



