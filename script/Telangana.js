
// code by webdevtrick (https://webdevtrick.com)
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
        this.score++;
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
    new Question("Nagarjuna sagar dam was built on which river____?", ["Bhima", "Krishna","Manjira","Godavari"], "Krishna"),
    new Question("When was Telangana established?", ["2 June 2014", "12 julay 2015", "2 julay 2013", "1 julay 1996"], "2 June 2014"),
    new Question("Which one is Telangana state bird ??", ["Peacock","House Sparrow","Indian Roller", "Swang"], "Indian Roller"),
    new Question("How many Districts in Telangana?", ["30", "31", "32", "33"], "31"),
    new Question("Total number of National Park in Telangana?", ["03", "08", "10", "05"], "08"),
	new Question("Area rank of the state?", ["4th", "12th","10th", "23th"], "12th"),
    new Question("Sport of the state of Telangana?",["Mango", "Neem", "Agar", "None of these"], "Agar"),
    new Question("Which of the following dynasties ruled Telngana?", ["Kakatiya","Chera","Sena", "Pala"], "Kakatiya"),
    new Question("What is the capital of Telangana?", ["Kohima", "Ranchi", "Hyderabad", "Tamilnadu"], "Gomati"),
    new Question("Who was the last Nizam of Hyderabad?", ["Mir Akbar Ali Khan", "Mir Osman Ali Khan", "Mir Mahbub Ali Khan", "Mir Nizam Ali Khan"], "Mir Osman Ali Khan")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();