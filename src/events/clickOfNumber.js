function clickOfNumber(e) {

        var input = document.getElementsByTagName('input')[0];
        var currentString = input.value;
        var lastChar = currentString[currentString.length - 1];

        if (e.target.innerHTML == '.' && input.value == '.') {
            input.setAttribute('data-flag', false);
            return;
        } else if (e.target.innerHTML == '.' && input.value != '' && lastChar.search( /\+|\-|\÷|\×|\^/ ) != -1) {
            return
        }
        if (input.getAttribute('data-flag') === 'false') {
            input.value += e.target.innerHTML;
        } else if (input.getAttribute('data-flag') === 'true' && (lastChar.search( /\+|\-|\÷|\×|\^/ ) != -1) ) {
            input.setAttribute('data-flag', false);
            input.value += e.target.innerHTML;
        } else {
            input.setAttribute('data-flag', false);
            input.value = "";
            input.value += e.target.innerHTML;
        }
    }

module.exports = clickOfNumber;

