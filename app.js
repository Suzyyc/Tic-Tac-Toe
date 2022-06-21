const container = document.querySelector(".container");

const grids = document.querySelectorAll("#ttt");

const playerX = {
  name: "X",
  wins: 0,
  combination: [],
};

const playerO = {
  name: "O",
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

let winnerWinnerChickenDinner = false;

const logGameResults = (words) => {
  document.querySelector(".gameResult").innerHTML = words;
};

const compareArrays = (win, playerCombo) => {
  // bStr = "123" exist in aStr = "12345"? subset
  return win.every((value) => playerCombo.includes(value)); // every, loops through the win array. includes - checks if the players wining combo is in the array. like lotto
}; //determines whether an array includes a certain value among its entries, returning true or false
// what is the value?

//Players
document.querySelectorAll(".grid").forEach((text) => {
  text.addEventListener("click", () => {
    // Check if the HTML already has a value inside it
    // Change the guard because of hover
    if (
      !text.classList.contains(playerX.name) &&
      !winnerWinnerChickenDinner &&
      !text.classList.contains(playerO.name)
    ) {
      text.innerHTML = currentPlayer.name;
      // Add new class to "text" element when clicking
      // e.g. X, O
      text.classList.add(currentPlayer.name);

      // Turn 1 - X clicks on cell
      // Turn 2 - Switch player to player0 and let them click a cell
      // get cell number once clicked

      currentPlayer.combination.push(parseInt(text.getAttribute("id")));

      // get winning winningCombos
      if (currentPlayer.combination.length >= 3) {
        for (let win of winningCombos) {
          const hasWon = compareArrays(win, currentPlayer.combination);
          if (hasWon) {
            logGameResults(currentPlayer.name + " Won");
            winnerWinnerChickenDinner = true;
            currentPlayer.wins++;
            if (currentPlayer === playerX) {
              document.querySelector(".xPoints").innerHTML = currentPlayer.wins;
            }
            if (currentPlayer === playerO) {
              document.querySelector(".oPoints").innerHTML = currentPlayer.wins;
            }
            console.log(currentPlayer.wins);
          }
        }

        // we should validate the game state
        // check if the game ended in a draw
        if (
          playerX.combination.length + playerO.combination.length === 9 &&
          !winnerWinnerChickenDinner
        ) {
          logGameResults("It's a draw");
        }
      }
      // function to see who is playing
      // define who the players are and switch
      if (currentPlayer === playerX) {
        currentPlayer = playerO;
      } else if (currentPlayer === playerO) {
        currentPlayer = playerX;
      }
    }
  });
});

///==============================================
/// hover over grid and show which player is playing
// when you leave grid don't show
///==============================================

document.querySelectorAll(".grid").forEach((cell) => {
  cell.addEventListener("mouseover", () => {
    if (
      !playerX.combination.includes(parseInt(cell.getAttribute("id"))) && // if player combo does not include a cell id, run code
      !playerO.combination.includes(parseInt(cell.getAttribute("id")))
    ) {
      cell.innerHTML = currentPlayer.name;
    }
  });
  cell.addEventListener("mouseout", () => {
    if (
      !playerX.combination.includes(parseInt(cell.getAttribute("id"))) &&
      !playerO.combination.includes(parseInt(cell.getAttribute("id")))
    ) {
      cell.innerHTML = ""; // leave cell id empty
    }
  });
});

//=======================================
// to restart the whole game/page
//=======================================

// restart game
// go back to the first player
// clear the board
// make it so the button stays put

// const startGame = () => {
//   currentPlayer = playerX;
//   document.querySelectorAll(".grid").forEach((cell) => {
//     cell.innerHTML = "";
//   });
//   logGameResults("");
//   playerX.combination = [];
//   playerO.combination = [];
//   winnerWinnerChickenDinner = false;
// };

const startGame = () => {
  currentPlayer = playerX;
  document.querySelectorAll(".grid").forEach((cell) => {
    !playerX.combination.includes(parseInt(cell.getAttribute("id"))) &&
      !playerO.combination.includes(parseInt(cell.getAttribute("id")));
    cell.innerHTML = "";
  });
  logGameResults("");
  playerX.combination = [];
  playerO.combination = [];
  winnerWinnerChickenDinner = false;
};

// !playerX.combination.includes(parseInt(cell.getAttribute("id"))) &&
//   !playerO.combination.includes(parseInt(cell.getAttribute("id")));

// !text.classList.contains(playerX.name) &&
//   !winnerWinnerChickenDinner &&
//   !text.classList.contains(playerO.name);

////=====================
// AI
////=====================

document.querySelector(".restartButton").addEventListener("click", startGame);
