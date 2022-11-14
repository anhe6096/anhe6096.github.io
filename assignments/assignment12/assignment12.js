function check() {
    console.log('test');
}




function higher() {
    outputInt = randomNumber(outputInt, 9999999999);
    output.textContent = outputInt;

}


function lower() {
    outputInt = randomNumber(1000000000, outputInt);
    output.textContent = outputInt;
}


function randomNumber(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}


function submit() {
    alert(output.textContent);
}

function reset() {
    outputInt = 0;
    output.textContent = outputInt;
}

function minus() {
    if (outputInt > 0) {
    outputInt -=1;
    output.textContent = outputInt; }
    
}

function plus() {
    if (outputInt < 9999999999) {
    outputInt +=1;
    output.textContent = outputInt;
    }
}

function random() {
    outputInt = randomNumber(1000000000, 9999999999);
    output.textContent = outputInt;
}





let output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);


let higherButton = document.querySelector('.higher-button').addEventListener('click', higher);
let lowerButton = document.querySelector('.lower-button').addEventListener('click', lower);
let submitButton = document.querySelector('.submit-button').addEventListener('click', submit);


console.log(outputInt)



/* const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');
button.addEventListener('click', updateOutput);
function updateOutput() {
    output.textContent = phone_content.value;
    alert(phone_content.value);
}
*/