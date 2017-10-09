function clearDisplay() {
    var input = document.getElementsByTagName('input')[0];
    input.value = "";
    input.setAttribute('data-flag', false);
}

module.exports = clearDisplay;