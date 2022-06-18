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

const compareArrays = (a, b) => {
  const aString = a.sort().join();
  const bString = b.sort().join();
  // bStr = "123" exist in aStr = "12345"? subset
  console.log(aString, bString);
  return aString.indexOf(bString) !== -1 || bString.indexOf(aString) !== -1;
};

//Player X
document.querySelectorAll(".grid").forEach((text) => {
  text.addEventListener("click", () => {
    // Option 1: Check if the id value exists in a player's combination array
    // Option 2: Check if the HTML already has a value inside it
    if (text.innerHTML === "") {
      console.log("run code");
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

      if (currentPlayer.combination.length > 3) {
        for (let win of winningCombos) {
          const hasWon = compareArrays(currentPlayer.combination, win);
          if (hasWon) console.log(hasWon);
        }
      }

      // console.log(currentPlayer.combination);
      // console.log(winningCombos);
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
    }
  });
});

// if all 9 turns go and no one won. do a draw

// function to see who is playing
// define who the players Are`

//=======================================
// to restart the whole game/page
//=======================================
document.querySelector(".restartButton").addEventListener("click", () => {
  console.log("Run bitch");
});
