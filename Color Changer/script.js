const btn = document.getElementById("changeColor");
const colorDisplay = document.getElementById("color-code");

btn.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    colorDisplay.textContent = randomColor;
    document.body.style.backgroundColor = randomColor;
});

function getRandomHexColor(){
    const hex = Math.floor(Math.random() * 0xffffff).toString(16); // 0xffffff indicates it is the maximum hex value. Therefore that hex value get multiplied with a random number and get the floor of it. toString(16) changes that value into a hex value
    return "#" + hex.padStart(6, "0");  //padStart(6, "0") -> this means add 0 in front of the string till the length becomes 6.
}