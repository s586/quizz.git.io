
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
    new Question("Tripura is top producer of which of the following?", ["Mango", "Apple","Natural Rubber","Pepper"], "Natural Rubber"),
    new Question("How many Districts in Tripura?", ["05", "02", "08", "09"], "08"),
    new Question("which of the following is an official language of Tripura?", ["Nepali","Santhali","Bengali", " Assamese"], "Bengali"),
    new Question("Which is the Capital of Tripura?", ["Agartala", "Khowai", "Udaipur", "Dharmanagar"], "Agartala"),
    new Question("Total Number of Assembly Seats in Tripura?", ["60", "65", "42", "56"], "60"),
	new Question("Which is the highest point in Tripura?", ["Dhavalagiri", "Mount Ararat","Betling Shib/Sib/Chip/Shiv", "Harney peak"], "Betling Shib/Sib/Chip/Shiv"),
    new Question("State tree of Tripura ? ["Mango", "Neem", "Agar", "None of these"], "Agar"),
    new Question("Which state is to the east of Tripura?", ["Mizoram","Sikim","Bihar", "Jharkhand"], "Mizoram"),
    new Question("Which one is the largest river of Tripura?", ["Gomati", "Juri", "Manu", "Muhuri"], "Gomati"),
    new Question("Which was the first newspaper published from Agartala?", ["Rabi", "Tribune", "Mizo", "Jagaran"], "Rabi")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();