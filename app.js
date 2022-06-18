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
  combination: [],
};

const playerO = {
  name: "O",
  turn: () => {},
  wins: 0,
  combination: [],
};

let currentPlayer = playerX;

//Player X
document.querySelectorAll(".grid").forEach((text) => {
  text.addEventListener("click", () => {
    text.innerHTML = currentPlayer.name;
    // Turn 1
    // X clicks on cell 2
    // [2]
    // Switch player to player0

    // get cell number once clicked
    currentPlayer.combination.push(parseInt(text.getAttribute("id")));

    // get winning winningCombos

    // if (currentPlayer.combination === winningCombos) {
    //   console.log("you win");
    // }

    for (let win of winningCombos) {
      console.log(compareArrays(currentPlayer.combination, win));
    }

    console.log(currentPlayer.combination);
    console.log(winningCombos);
    // currentPlayer =

    // Turn 2
    // 0 clicks
    // Switch player to playerX

    // Turn 3
    // ... same as turn 1

    if (currentPlayer === playerX) {
      currentPlayer = playerO;
    } else if (currentPlayer === playerO) {
      currentPlayer = playerX;
    }
  });
});

const winningCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let compareArrays = (a, b) => {
  return a.sort().join() == b.sort().join();
};

//Player O

// function to see who is playing
// define who the players Are`

//=======================================
// to restart the whole game/page
//=======================================
document.querySelector(".restartButton").addEventListener("click", () => {
  console.log("Run bitch");
});
