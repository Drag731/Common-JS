function removePressingEffect(event) {
    var target = event.target;

    if (target.tagName != 'BUTTON') {
        return;
    }

    target.classList.remove('light-blue');
}

module.exports = removePressingEffect;