function generateText() {
    var element = document.createElement('h2');
    element.innerText = 'hello h2 world';
    return element;
}

module.exports = generateText;