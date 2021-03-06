const container = document.querySelector(".container");
const grids = document.querySelectorAll("#ttt");

// players
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

//Starting position
let currentPlayer = playerX;

let possibleOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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

////=====================
// AI mode
////=====================
//set the AI button to run
// Ai is the second player

let aiMode = false;
document.querySelector(".aiButton").addEventListener("click", (event) => {
  aiMode = !aiMode;
  if (aiMode) {
    event.target.innerHTML = "AI mode on";
  } else {
    event.target.innerHTML = "AI mode off";
  }
});

// winner
let winnerWinnerChickenDinner = false; // win state

const logGameResults = (words) => {
  document.querySelector(".gameResult").innerHTML = words;
}; // DRY using this for other results

const compareArrays = (win, playerCombo) => {
  // bStr = "123" exist in aStr = "12345"? subset
  return win.every((winValue) => playerCombo.includes(winValue)); // every, loops through the win array. includes - checks if the players wining combo is in the array. like lotto
}; //determines whether an array includes a certain value among its entries, returning true or false

document.querySelectorAll(".grid").forEach((text) => {
  text.addEventListener("click", () => {
    // for each cell, adding a click listener

    // checking if the current cell is empty and can be clicked and there's no winner
    if (
      !text.classList.contains(playerX.name) &&
      !winnerWinnerChickenDinner &&
      !text.classList.contains(playerO.name)
    ) {
      text.innerHTML = currentPlayer.name; // adding the players name to the cell
      // Add new class to "text" element when clicking cause of hover
      // e.g. X, O
      text.classList.add(currentPlayer.name);

      // Turn 1 - X clicks on cell
      // Turn 2 - Switch player to player0 and let them click a cell
      // get cell number once clicked
      const currentPositon = parseInt(text.getAttribute("id"));
      const removePosition = possibleOptions.indexOf(currentPositon); // for ai and draw conditions
      possibleOptions.splice(removePosition, 1);

      currentPlayer.combination.push(currentPositon); // adding the current postion to the players combo

      // get winning winningCombos
      if (currentPlayer.combination.length >= 3) {
        for (let win of winningCombos) {
          //looing through the win combos
          const hasWon = compareArrays(win, currentPlayer.combination);
          if (hasWon) {
            logGameResults(currentPlayer.name + " Won");
            winnerWinnerChickenDinner = true;
            currentPlayer.wins++; // adding 1 to the player point
            if (currentPlayer === playerX) {
              document.querySelector(".xPoints").innerHTML = currentPlayer.wins; //showing the player points
            }
            if (currentPlayer === playerO) {
              document.querySelector(".oPoints").innerHTML = currentPlayer.wins;
            }
          }
        }
        if (possibleOptions.length === 0 && !winnerWinnerChickenDinner) {
          //no possibile options - log draw
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
      //needs to select a random grid/cell
      //then switch back to player 1/X
      // play out the game, see who wins/draw
      //AI to count points under playerO
      if (aiMode && currentPlayer === playerO) {
        //   ai to select a empty grid randomly
        const randomChoice = Math.floor(Math.random() * possibleOptions.length);
        document.querySelector(".g" + possibleOptions[randomChoice]).click(); // ai will randomly choose a class grid from possible options which are left and simulate a click in the grid
      } // .g is there because you cannot queryselect a ID if it's a number
    }
  });
});

///==============================================
/// hover over grid and show which player is playing
// when you leave grid don't show
///==============================================
document.querySelectorAll(".grid").forEach((cell) => {
  // looping through each element/grid
  cell.addEventListener("mouseover", () => {
    // checking each grid to see when the mouse goes over it
    if (
      !playerX.combination.includes(parseInt(cell.getAttribute("id"))) && // checking each grid to see if the player combination includes the cell id e.g 7 if empty
      !playerO.combination.includes(parseInt(cell.getAttribute("id")))
    ) {
      cell.innerHTML = currentPlayer.name; // showing the players name
    }
  });
  cell.addEventListener("mouseout", () => {
    if (
      !playerX.combination.includes(parseInt(cell.getAttribute("id"))) &&
      !playerO.combination.includes(parseInt(cell.getAttribute("id")))
    ) {
      cell.innerHTML = ""; // leave cell empty/reset
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
const startGame = () => {
  currentPlayer = playerX;
  document.querySelectorAll(".grid").forEach((cell) => {
    // looping through each grid and setting it as empty
    cell.innerHTML = "";
    cell.classList.remove(playerO.name, playerX.name);
  });
  logGameResults("");
  playerX.combination = [];
  playerO.combination = [];
  winnerWinnerChickenDinner = false;
  possibleOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
};

document.querySelector(".restartButton").addEventListener("click", startGame);
