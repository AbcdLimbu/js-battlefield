const symbols = ['🍕','🎮','🎲','🎧','🍩','🍔','🎯','🚀'];
let cards = [...symbols, ...symbols]; // duplicate for pairs
let flippedCards = [];
let matched = 0;

const board = document.getElementById("gameBoard");
const status = document.getElementById("status");
const restartBtn = document.getElementById("restartBtn");

// Shuffle cards using Fisher-Yates
function shuffle(array) {
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createBoard() {
  board.innerHTML = "";
  shuffle(cards);
  matched = 0;
  flippedCards = [];

  cards.forEach((symbol, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.symbol = symbol;
    card.dataset.index = index;
    card.addEventListener("click", flipCard);
    board.appendChild(card);
  });

  status.textContent = "Find all matching pairs!";
}

function flipCard() {
  if (this.classList.contains("flipped") || flippedCards.length === 2) return;

  this.textContent = this.dataset.symbol;
  this.classList.add("flipped");
  flippedCards.push(this);

  if (flippedCards.length === 2) {
    const [card1, card2] = flippedCards;
    if (card1.dataset.symbol === card2.dataset.symbol) {
      card1.classList.add("matched");
      card2.classList.add("matched");
      matched += 2;
      flippedCards = [];

      if (matched === cards.length) {
        status.textContent = "🎉 You matched them all!";
      }
    } else {
      setTimeout(() => {
        card1.textContent = "";
        card2.textContent = "";
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        flippedCards = [];
      }, 800);
    }
  }
}

restartBtn.addEventListener("click", createBoard);

// Start the game on load
createBoard();
