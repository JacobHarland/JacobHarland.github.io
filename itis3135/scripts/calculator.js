const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        // dataset.action selects the data-action attribute in the html
        const action = key.dataset.action
        // gets the value of key which is the button pressed
        const keyContent = key.textContent
        // gets the value of the display
        const displayedNum = display.textContent

        const previousKeyType = calculator.dataset.previousKeyType

        // data-action in html is only set for non numerical values
        if (!action) {
            // if the displayed number is 0 then the button pressed gets pushed to the display
            if (displayedNum === '0') {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        }
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {

            display.textContent = displayedNum + keyContent

            // Checks if the previous key was a data-action operator in html
            // not neededd ?calculator.dataset.previousKeyType = 'operator'

            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
        }
        if (action === 'decimal') {
            display.textContent = displayedNum + '.'
        }
        if (action === 'clear') {
            console.log('clear')
        }
        if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum

            console.log(firstValue)
            console.log(operator)
            console.log(secondValue)
            display.textContent = calculate(firstValue, operator, secondValue)
        }
    }
})

const calculate = (firstValue, operator, secondValue) => {
    let result = ''

    if (operator === 'add') {
        var parts = secondValue.split("+"); //gives us ["1", "2"]
        result = parseFloat(parts[0]) + parseFloat(parts[1])
    } else if (operator === 'subtract') {
        var parts = secondValue.split("-"); //gives us ["1", "2"]
        result = parseFloat(parts[0]) - parseFloat(parts[1])
    } else if (operator === 'multiply') {
        var parts = secondValue.split("×"); //gives us ["1", "2"]
        result = parseFloat(parts[0]) * parseFloat(parts[1])
    } else if (operator === 'divide') {
        var parts = secondValue.split("÷"); //gives us ["1", "2"]
        result = parseFloat(parts[0]) / parseFloat(parts[1])
    }

    return result
}