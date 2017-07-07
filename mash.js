var promptSync = require("prompt-sync")();

// Create a new array called mashArray
// with 4 battle locations as strings
var mashArray = ['The Great Maze', 'Omega Stage', 'Dream Land', 'Duck Hunt'];


// 3 Create a new array called firstQuestion
// with at least 2 numbers
var firstQuestion = [5, 10];


// 4 Create a new array called secondQuestion
// with at least 2 Smash Brothers character names as strings
var secondQuestion = ["Mario", "Luigi"];

// 5 Create a function that prompts the user to
// input the answer to 2 questions: “How many times will you strike?”
// AND “Who will you choose to fight?” and adds the
// answers to the firstQuestion and secondQuestion arrays.

for ( var i = 0; i < 2; i ++){
  firstQuestion.push(promptSync("How many times will you strike?"));
  secondQuestion.push(promptSync("Who will you choose to fight?"));
}

// 6 Finally, create a new function that logs this
// answer to the console “You fought SECONDQUESTION in the
// MASHARRAY and hit them FIRSTQUESTION times. Too bad. Mewtwo wins!”
// In place of mashArray, firstQuestion, & secondQuestion
// it should output a random item from each array.


var randArray = function(array){
  return array[Math.floor(Math.random()*array.length)];
}

console.log("You fought " + randArray(secondQuestion) + 
            " in the " + randArray(mashArray) +
            " and hit them " + randArray(firstQuestion) + 
            " times. Too bad. Mewtwo wins!");

