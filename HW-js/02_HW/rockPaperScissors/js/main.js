let inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let span = document.querySelector('.span');

let win = 'You win.';
let lose = 'You lose.';
let draw = 'Draw. Play again.'

btn.onclick = () =>{

    let elementValues = {
        1: 'Rock',
        2: 'Paper',
        3: 'Scissors'
    }

    let randomNumber = Math.floor(Math.random() * 3) + 1;

    let result = elementValues[randomNumber]

    let value = inp.value;

    //Rock
    if(value == elementValues[1] && result == elementValues[1]){
        span.innerHTML = `<p style="color:orange">${draw} Both of you are selected: ${elementValues[1]}</p>` 
    }else if(value == elementValues[1] && result == elementValues[2]){
        span.innerHTML = `<p style="color:red">${lose} Computer selected: ${elementValues[2]}</p>` 
    }else if(value == elementValues[1] && result == elementValues[3]){
        span.innerHTML = `<p style="color:green">${win} Computer selected: ${elementValues[3]}</p>` 
    }
    //Paper
    else if(value == elementValues[2] && result == elementValues[2]){
        span.innerHTML = `<p style="color:orange">${draw} Both of you are selected: ${elementValues[2]}</p>` 
    }else if(value == elementValues[2] && result == elementValues[3]){
        span.innerHTML = `<p style="color:red">${lose} Computer selected: ${elementValues[3]}</p>`
    }else if(value == elementValues[2] && result == elementValues[1]){
        span.innerHTML = `<p style="color:green">${win} Computer selected: ${elementValues[1]}</p>` 
    }
    //Scissors
    else if(value == elementValues[3] && result == elementValues[3]){
        span.innerHTML = `<p style="color:orange">${draw} Both of you are selected: ${elementValues[3]}</p>` 
    }else if(value == elementValues[3] && result == elementValues[1]){
        span.innerHTML = `<p style="color:red">${lose} Computer selected: ${elementValues[1]}</p>` 
    }else if(value == elementValues[3] && result == elementValues[2]){
        span.innerHTML = `<p style="color:green">${win} Computer selected: ${elementValues[2]}</p>`
    }
    else{
        span.innerHTML = 'Please add a correct element'
    }
    
}
