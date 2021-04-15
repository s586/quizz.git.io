
// code by webdevtrick (https://webdevtrick.com)
var level;
var str="level incress";
function Bihar_level()
{
	if(level>3)
	{
		str.link("C:\Users\saurav kumar\Desktop\project\Bihar_level2.html");
		}
}
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        level=this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("Where is capital of Bihar?", ["Patna", "Motihari","Chhapra", "siwan"], "Patna"),
    new Question("Which district of Bihar has the highest Literacy rate in the State?", ["Patna", "Rohtas", "Siwan", "Motihari"], "Rohtas"),
    new Question("Which of the following district of Bihar does not shares border with Nepal?", [" Purnia", "Motihari","Sitamarhi", " Madhubani"], "Purnia"),
    new Question("Which of the following district of bihar does not shares border with Uttar Pradesh?", ["Buxar", "Gopalganj", "Saran", "Muzaffarpur"], "Muzaffarpur"),
    new Question("Total Number of districts in Bihar?", ["36", "40", "38", "42"], "38"),
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();