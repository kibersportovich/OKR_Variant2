const outputDiv = document.getElementById('output');
const pressedChars = new Set();

document.addEventListener('keydown', (event) => {
    const char = event.key;

    if (!pressedChars.has(char)) {
        pressedChars.add(char);
        outputDiv.textContent += char;
    }
});