const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2

const calculate = (num1, num2, operator) => {
    if (operator === '+') {
        return add(num1, num2)
    } else if (operator === '-') {
        return subtract(num1, num2)
    } else if (operator === '*') {
        return multiply(num1, num2)
    } else {
        return divide(num1, num2)
    }
}

const calc = document.querySelector('#calc')
calc.addEventListener('click', function(evt) {
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let operator = document.getElementById('operator').value
    let result = document.getElementById('result')

    result.textContent = calculate(num1, num2, operator)
})