function clickOfOperator(e) {
        var input = document.getElementsByTagName('input')[0];
        var currentString = input.value;
        var lastChar = currentString[currentString.length - 1];
        if (!lastChar) {
            return;
        }
        if (lastChar.search( /\+|\-|\÷|\×|\^|\./ ) != -1) {
            var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
            input.value = newString;
        } else if (currentString.length == 0) {
            console.log("enter a number first");
        } else {
            input.value += e.target.innerHTML;
        }
    }

module.exports = clickOfOperator;