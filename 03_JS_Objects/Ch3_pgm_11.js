// Using a property in a calculation

var player1;

player1 = {
	  name: "Max",
	  score: 0
};

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + 50;

console.log(player1.name + " has scored " + player1.score);


// Increase player1's score by 10%
player1.score = player1.score * 1.1; // Increases score by 10%
console.log(player1.name + " now has a score of " + player1.score);

// Add a second player
var player2 = {
    name: "Alice",
    score: 0
};

// Calculate and log the sum of their scores
var totalScore = player1.score + player2.score;
console.log(player1.name + " and " + player2.name + " have a total score of " + totalScore);
