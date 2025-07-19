quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "JavaScript is a versatile programming language.",
  "Frontend development is both art and logic.",
  "Practice makes perfect, especially in coding.",
  "Typing speed tests measure focus and accuracy."
];

const quoteText = document.getElementById("quote");
const inputText = document.getElementById("input");
const timerElement = document.getElementById("timer");
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");
const startBtn = document.getElementById("startBtn");


let currentQuote = "";
let startTime, timer;

function startTest(){

    // first part - quotes
    inputText.disabled = false;
    inputText.focus();
    inputText.value = "";
    currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = currentQuote;

    // second part - stats (time)
    startTime = Date.now(); // this is fixed start time example 8000 milisecs
    timerElement.textContent = "0";
    wpmElement.textContent = "0";
    accuracyElement.textContent = "0";

    timer = setInterval(() => {
        const time = Math.floor((Date.now() - startTime)/1000);  // here date.now() is changing after every second and subtract the fixed time which gives the remaining time
        timerElement.textContent = time;
    }, 1000);

}
function endTest(){

    // WPM
    clearInterval(timer);
    const timeTaken = (Date.now() - startTime)/1000;
    const wordsTyped = inputText.value.trim().split(" ").length;
    const wpm = Math.round((wordsTyped/timeTaken)*60);
    wpmElement.textContent = isNaN(wpm)? "0": wpm;

    // accuracy
    let correct = 0;
    for(let i = 0; i<inputText.value.length; i++){
        if(inputText.value[i] === currentQuote[i]){
            correct++;
        }
    }

    let accuracy = Math.round((correct/currentQuote.length)*100)
    accuracyElement.textContent = isNaN(accuracy)? "0":accuracy;
}

startBtn.addEventListener('click', startTest)

inputText.addEventListener('input', ()=>{
    if(inputText.value === currentQuote){
        endTest();
    }
})

