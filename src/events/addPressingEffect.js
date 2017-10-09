function addPressingEffect(event) {
    var target = event.target;

    if (target.tagName != 'BUTTON') {
        return;
    }

    target.classList.add('light-blue');
}

module.exports = addPressingEffect;