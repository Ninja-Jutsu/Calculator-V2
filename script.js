let firstNumber = ''
let secondNumber = ''
let currentOperation = null
let shouldResetScreen = false

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.getElementById('equal-btn')
const refreshButton = document.getElementById('refresh-btn')
const deleteButton = document.getElementById('delete-btn')
const pointButton = document.getElementById('point-button')
const lastOperationScreen = document.querySelector('#lastOperationScreen')
const currentOperationScreen = document.querySelector('#currentOperationScreen')

window.addEventListener('keydown', handleKeyboardInput)
equalsButton.addEventListener('click', evaluate)
refreshButton.addEventListener('click', clear)
deleteButton.addEventListener('click', deleteNumber)
pointButton.addEventListener('click', appendPoint)

function evaluate() {
    console.log('Evaluated')
    if (currentOperation === null || shouldResetScreen) return
    if (currentOperation === '÷' && currentOperationScreen.textContent === '0') {
      alert("You can't divide by 0!")
      return
    }
    secondNumber = currentOperationScreen.textContent
    currentOperationScreen.textContent = roundResult(
      operate(currentOperation, firstNumber, secondNumber)
    )
    lastOperationScreen.textContent = `${firstNumber} ${currentOperation} ${secondNumber} =`
    currentOperation = null
  }

function clear() {
    currentOperationScreen.textContent = '0'
    lastOperationScreen.textContent = ''
    firstNumber = ''
    secondNumber = ''
    currentOperation = null
}

function deleteNumber() {
    currentOperationScreen.textContent = currentOperationScreen.textContent
      .toString()
      .slice(0, -1)
  }

function appendPoint() {
    if (shouldResetScreen) resetScreen()
    if (currentOperationScreen.textContent === '')
      currentOperationScreen.textContent = '0'
    if (currentOperationScreen.textContent.includes('.')) return
    currentOperationScreen.textContent += '.'
}

numberButtons.forEach((button) => 
  button.addEventListener('click', () => {appendNumber(button.textContent)})
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
)

function appendNumber(number) {
    if (currentOperationScreen.textContent === '0' || shouldResetScreen)
        resetScreen()
        currentOperationScreen.textContent += number
  }

function setOperation(operator) {
    if (currentOperation !== null) {evaluate()}
    firstNumber = currentOperationScreen.textContent
    console.log(firstNumber)
    currentOperation = operator
    lastOperationScreen.textContent = `${firstNumber} ${currentOperation}`
    shouldResetScreen = true
}

function resetScreen() {
    currentOperationScreen.textContent = ''
    shouldResetScreen = false
  }
// Operations:
function operate(operator, firstNumber, secondNumber){
    console.log(firstNumber)
    console.log(operator)
    console.log(secondNumber)

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber)
    if(operator == '+'){
        return add(firstNumber,secondNumber);
    }
    else if(operator == '−'){
        return subtract(firstNumber,secondNumber);
    }
    else if(operator == '×'){
        return multiply(firstNumber,secondNumber)
    }
    else if(operator == '/'){
        return divide(firstNumber,secondNumber)
    }
    else if(operator == '^'){
        return toPower(firstNumber,secondNumber);
    }
};

const add = (a,b) => {return a + b}
const subtract = (a,b) => {return a - b}
const multiply = (a,b) => {return a * b}
const divide = (a,b) => {return a / b}
const toPower = (a,b) => {return Math.pow(a, b);}

// the result of Operate to be rounded;
function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key)
    if (e.key === '.') appendPoint()
    if (e.key === '=' || e.key === 'Enter') evaluate()
    if (e.key === 'Backspace') deleteNumber()
    if (e.key === 'Escape') clear()
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
        setOperation(convertOperator(e.key))
}
function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷'
    if (keyboardOperator === '*') return '×'
    if (keyboardOperator === '-') return '−'
    if (keyboardOperator === '+') return '+'
}