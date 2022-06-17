const container = document.querySelector(".container");

const grids = document.querySelectorAll("#ttt");

// const text = document.querySelectorAll(".grid");
// for (let click of text) {
//     text[].addEventListener("click", () => {
//     text.innerHTML = "X";
//   });
// }

const playerX = {
  name: "X",
  turn: () => {},
  wins: 0,
};

const playerO = {
  name: "O",
  turn: () => {},
  wins: 0,
};

let currentPlayer = playerX;

//Player X
document.querySelectorAll(".grid").forEach((text) => {
  text.addEventListener("click", () => {
    text.innerHTML = currentPlayer.name;
    currentPlayer = playerO;
  });
});

//Player O

// function to see who is playing
// define who the players Are`

//=======================================
// to restart the whole game/page
//=======================================
document.querySelector(".restartButton").addEventListener("click", () => {
  console.log("Run bitch");
});
