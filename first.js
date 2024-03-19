let hasDeposited = false;

const playButton = document.getElementById("playGame");
const buttonclick = document.getElementById("playit");

playButton.addEventListener("click", function() {
  if (!hasDeposited) {
    alert("MAKE YOUR DEPOSIT FIRST!");
  } else {
    // Code to start the game goes here
  }
});
buttonclick.addEventListener("click", function() {
    if (!hasDeposited) {
      alert("MAKE YOUR DEPOSIT FIRST!");
    } else {
      // Code to start the game goes here
    }
  });
  
