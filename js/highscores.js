const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Testing function
/// console.log(highScores);

// Iterate through each score and add an li to unordered list - same as map
highScores.map((score) => {
	console.log('<li class = "high-score">$(score.name)-$(score.score)</li>');
});
