const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuote");

const quotes = [
  {
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House"
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  },
  {
    quote: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde"
  },
  {
    quote: "In order to be irreplaceable, one must always be different.",
    author: "Coco Chanel"
  },
  {
    quote: "Java is to JavaScript what car is to Carpet.",
    author: "Chris Heilmann"
  }
];

newQuoteBtn.addEventListener('click', () => {
    getRandomQuote();
});

function getRandomQuote(){
    const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = randomQuotes.quote;
    authorText.textContent = randomQuotes.author;
}


getRandomQuote();