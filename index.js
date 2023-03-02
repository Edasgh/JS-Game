let computerGuess;
const gameArea = document.getElementById("gameArea");
const startpage = document.querySelector(".card");
const newGmbtn = document.querySelector(".newGame");
const gameHead = document.getElementById("guHeader");
const gameInput = document.getElementById("guessinput");
let userGuess = [];
let music1 = new Audio("./sounds/music1.wav");
let music2 = new Audio("./sounds/music2.wav");
let music3 = new Audio("./sounds/music3.wav");
let music4 = new Audio("./sounds/music4.wav");
window.onload = function () {
  music1.play();
};
const init = () => {
  computerGuess = Math.floor(Math.random() * 100);
  // console.log(computerGuess);
  gameArea.style.display = "none";
};

const startGame = () => {
  startpage.style.display = "none";
  gameArea.style.display = "flex";
  newGmbtn.style.display = "none";
};

const startNewGame = () => {
  newGmbtn.style.display = "block";
  newGmbtn.addEventListener("click", function newGmbtnClick() {
    window.location.reload();
    startpage.style.display = "flex";
    gameArea.style.display = "none";
  });

  gameInput.setAttribute("disabled", true);
};

const compareGuess = () => {
  music4.play();
  const userNum = Number(document.getElementById("guessinput").value);
  userGuess = [...userGuess, userNum];
  //userGuess=[(spread operator which includes previous values to the array),userNum];
  document.querySelector(".guesses").innerHTML = userGuess;
  //check the value low or high
  if (userGuess.length < maxGuess) {
    if (userNum > computerGuess) {
      gameHead.innerHTML = "Your Guess is high &#128558;";
      gameInput.value = "";
    } else if (userNum < computerGuess) {
      gameHead.innerHTML = "Your Guess is low &#128531;";
      gameInput.value = "";
    } else {
      // userNum.style.color="green";
      gameHead.innerHTML = `Yep !! it's ${userNum} &#128512;`;
      music2.play();
      gameInput.value = "";
      startNewGame();
    }
  } else {
    if (userNum > computerGuess) {
        gameHead.innerHTML = `You loose !! the correct number was ${computerGuess}`;
        music3.play();
        gameInput.value = "";
      } else if (userNum < computerGuess) {
        gameHead.innerHTML = `You loose !! the correct number was ${computerGuess}`;
        music3.play();
        gameInput.value = "";
      } else {
        // userNum.style.color="green";
        gameHead.innerHTML = `Yep !! it's ${userNum} &#128512;`;
        music2.play();
        gameInput.value = "";
        startNewGame();
      }
  }
  document.querySelector(".attempts").innerHTML = userGuess.length;
};

const easyMode = () => {
  music1.play();
  startGame();
  document.getElementById("easy").style.display = "block";
  maxGuess = 10;
};
const hardMode = () => {
  music1.play();
  startGame();
  document.getElementById("hard").style.display = "block";
  maxGuess = 5;
};

init();
