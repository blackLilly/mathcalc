const math = require('mathjs');

let currentValue = '0';
let register = [];
let history = [];
let result = '0';

class CalculatorEngine {

    // (CalculatorEngine(){
    //     history = [],
    //     register = [];
    //     currentValue = '';
    //     result = '';
    // })

    inputDigit(digit) {
        if (isNaN(digit)) {
            throw Error('Only numeric input is allowed');
        }

        if (result !== '') {
            result = '';
            currentValue = '';
        } else {
            // register = [];
        }

        console.log(
            'curval', currentValue,
            'register', register,
            'result', result
        )

        currentValue += digit;
        register.push(digit);

        console.log(
            'curval', currentValue,
            'register', register,
            'result', result
        )
    }

    inputDecimal() {
        if (result !== '') {
            result = '';
            currentValue = '';
        }

        if (currentValue.indexOf('.') >= 0) {
            return;
        }

        if (currentValue === '') {
            currentValue += '0.';
        } else {
            currentValue += '.';
        }
    }

    clear() {
        currentValue = '0';
        register = [];
        result = '0';
    }

    clearAll() {
        currentValue = '0';
        register = [];
        result = '0';
        history = [];
    }

    clearHistory() {
        history = [];
    }

    delete() {
        if (currentValue === '') {
            return;
        }

        currentValue = currentValue.substring(0, currentValue.length - 1);
    }

    add() {
        if (currentValue === '') {
            return;
        }

        // register.push(currentValue);
        register.push('+');

        currentValue = '';

        console.log(
            'curval', currentValue,
            'register', register,
            'result', result
        )

    }

    subtract() {
        if (currentValue === '') {
            return;
        }

        register.push(currentValue);
        register.push('-');

        currentValue = '';
    }

    multiply() {
        if (currentValue === '') {
            return;
        }

        register.push(currentValue);
        register.push('*');

        currentValue = '';
    }

    divide() {
        if (currentValue === '') {
            return;
        }

        register.push(currentValue);
        register.push('/');

        currentValue = '';
    }

    equals() {
        try {
            if (currentValue === '') {
                return;
            }
            register.push(currentValue);

            const expression = register.join(' ');

            result = math.evaluate(expression);
            currentValue = result.toString();
            history.splice(0, 0, { expression, result });
            register = [];
        } catch (e) {

        }
    }

    percentage() {
        try {
            if (currentValue === '') {
                return;
            }

            let expression = result.concat(" / ", "100");

            currentValue = (parseFloat(currentValue) / 100).toString();
            history.splice(0, 0, { expression, result });
            register = [];
        } catch (e) { }
    }

    loadHistory(index) {
        currentValue = history[index].result.toString();
    }

    toggleSign() {
        currentValue = (parseFloat(currentValue) * (-1)).toString();
    }

    getValue() {
        try {
            const expression = register.join(' ');
            return math.evaluate(expression).toString();
        }
        catch (e) {
            return currentValue;
        }
    }

    getExpression() {
        return register.join(' ');
    }

    getHistory() {
        return history;
    }

    getResult() {
        return result;
    }
}

export default CalculatorEngine;