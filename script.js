let firstNumber = '';
let tempNumber = '';
let secondNumber = '';
let operator = '';
let display = '';
let operationCounter = 0;
const screen = document.querySelector('#screen')

function showOnScreen(arg){
    display += arg;
    return display
}

function collectDigits(digit){
    if (operationCounter === 0){
        firstNumber += digit;
    }
    if (operationCounter === 1){
        secondNumber += digit;
    }
}

function clickOperator(Operator){
    operator = Operator;
    console.log(operator);
    secondNumber = 0;
    operationCounter = 1;
}

function showResult(){

    operate(firstNumber, operator, secondNumber);
    display = currentResult;
    operationCounter = 0;
}

// Refresh screen:
function refreshAll(){
    display = '0';
    screenShow = 0;
    firstNumber = 0;
    operationCounter = 0;
};

// Operands:
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const zero = document.querySelector('#zero')

one.onclick= () => {collectDigits('1');showOnScreen(1);screenDisplay(display);}
two.onclick = () => {collectDigits('2');showOnScreen(2);screenDisplay(display);}
three.onclick = () => {collectDigits('3');showOnScreen(3);screenDisplay(display);}
four.onclick = () => {collectDigits('4');showOnScreen(4);screenDisplay(display);}
five.onclick = () => {collectDigits('5');showOnScreen(5);screenDisplay(display);}
six.onclick = () => {collectDigits('6');showOnScreen(6);screenDisplay(display);}
seven.onclick = () => {collectDigits('7');showOnScreen(7);screenDisplay(display);}
eight.onclick = () => {collectDigits('8');showOnScreen(8);screenDisplay(display);}
nine.onclick = () => {collectDigits('9');showOnScreen(9);screenDisplay(display);}
zero.onclick = () => {collectDigits('0');showOnScreen(0);screenDisplay(display);}

// Operators:
const equalBtn = document.querySelector('#equal-btn')
const refreshBtn = document.querySelector('#refresh-btn')
const divideBtn = document.querySelector('#divide-btn')
const multiBtn = document.querySelector('#Multi-btn')
const subBtn = document.querySelector('#sub-btn')
const addBtn = document.querySelector('#add-btn')
const powBtn = document.querySelector('#Pow-btn')

equalBtn.onclick = () => {showResult();screenDisplay(display);}
refreshBtn.onclick = () => {refreshAll();screenDisplay(display);}
subBtn.onclick = () => {if (operationCounter === 0){clickOperator('-');showOnScreen('-');screenDisplay(display)}}
multiBtn.onclick = () => {if (operationCounter === 0){clickOperator('*');showOnScreen('*');screenDisplay(display)}}
addBtn.onclick = () => {if (operationCounter === 0){clickOperator('+');showOnScreen('+');screenDisplay(display)}}
powBtn.onclick = () => {if (operationCounter === 0){clickOperator('^');showOnScreen('^');screenDisplay(display)}}
divideBtn.onclick = () => {if (operationCounter === 0){clickOperator('/');showOnScreen('/');screenDisplay(display)}}

// Operations:
function operate(firstNumber, operator, secondNumber = 0){
    if(operator == '+'){
        let result =  add(parseFloat(firstNumber),parseFloat(secondNumber));
        return result
    }
    else if(operator == '-'){
        let result = subtract(parseFloat(firstNumber),parseFloat(secondNumber));
        return result
    }
    else if(operator == '*'){
        let result = multiply(parseFloat(firstNumber),parseFloat(secondNumber))
        return result
    }
    else if(operator == '/'){
        let result = divide(parseFloat(firstNumber),parseFloat(secondNumber))
        return result
    }
    else if(operator == '^'){
        let result = toPower(parseFloat(firstNumber),parseFloat(secondNumber));
        return result
    }
    else if(operator == 'c'){
        let result = refresh();
        return result
    }
};
const refresh = () => currentResult = 0;
const add = (a,b) => {currentResult = a + b; firstNumber = currentResult; }
const subtract = (a,b) => {currentResult = a - b; firstNumber = currentResult;}
const multiply = (a,b) => {currentResult = a * b; firstNumber = currentResult;}
const divide = (a,b) => {currentResult = a / b; firstNumber = currentResult;}
const toPower = (a,b) => {currentResult = Math.pow(a, b); firstNumber = currentResult ;}


function screenDisplay (text){
     screen.innerHTML = text;
}

// delete button:
const deleteBtn = document.querySelector('#delete-btn');
deleteBtn.onclick = () => 
{
    console.log(firstNumber)
    console.log(secondNumber)
    secondNumber = secondNumber.slice(0,-1);
    display = display.slice(0,-1)
    screenDisplay (display)
}