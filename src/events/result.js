function resultAll() {
    var input = document.getElementsByTagName('input')[0];
    var inputString = input.value;
    // forming an array of numbers
    var numbers = inputString.split(/\+|\-|\×|\÷|\^/g);
    // forming an array of operators
    var operators = inputString.replace(/[0-9]|\./g, "").split("");

    var divide = operators.indexOf("÷");

    while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");
    }

    var multiply = operators.indexOf("×");

    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
    }

    var divide = operators.indexOf("^");

    while (divide != -1) {
        numbers.splice(divide, 2, Math.pow(numbers[divide], numbers[divide + 1]));
        operators.splice(divide, 1);
        divide = operators.indexOf("^");
    }

    var subtract = operators.indexOf("-");

    while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
    }

    var add = operators.indexOf("+");

    while (add != -1) {
        // using parseFloat is necessary, otherwise it will result in string concatenation 
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf("+");
    }

    input.value = Math.round(numbers[0]*100000)/100000; // displaying the output
    input.setAttribute('data-flag', true);
}

module.exports = resultAll;