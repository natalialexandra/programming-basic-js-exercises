// 2 Honest Rock Paper Scissors

const gameRockPaperScissors = userArg => {
  // convert user input to lower case and without spaces
  let improvedUserArg = improveUserInput(userArg);
  const words = ["rock", "scissors", "paper"];
  const wordRandom = words[Math.floor(Math.random() * 3)];

  // if user input is the same as the word in array, than print random word from array
  // otherwise print default msg
  if (improvedUserArg === "paper") {
    return wordRandom;
  } else if (improvedUserArg === "scissors") {
    return wordRandom;
  } else if (improvedUserArg === "rock") {
    return wordRandom;
  } else {
    return "I'm an honest function bro, be honest too and just write 'rock', 'paper', or 'scissors' as an argument";
  }
};
console.log(gameRockPaperScissors("roCk"));
// console.log(gameRockPaperScissors("5"));
// console.log(gameRockPaperScissors(5));

// convert user input to lower case and remove spaces
function improveUserInput(userInput) {
  if (!Number(userInput)) {
    const improvedUserInput = userInput.toLowerCase().trim();
    return improvedUserInput;
  } else {
    return userInput;
  }
}
// console.log(improveUserInput("RoCk "));
