
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
    new Question("State Animal of Rajasthan?", ["Tiger", "Camel","Chinkara and camel", " Elephant"], "Chinkara and camel"),
    new Question("Rank of Rajasthan by Area?", ["05", "02", "01", "09"], "01"),
    new Question("Total number of districs in Rajasthan?", ["28","33","22", " 24"], "33"),
    new Question("Rajasthan state Formation day?", ["05,October", "17,August", "01,Novenber", "01,August"], "01,Novenber"),
    new Question("Which state is north to Rajasthan?", ["Gujarat", "Uttar Pradesh", "Punjab", "West Bengal"], "Punjab"),
	new Question("State tree of Rajasthan?", ["Khejari", "Mango","Neem", "Babool"], "Khejari"),
    new Question(" Which dance form of Rajasthan is included in Intangible Cultural Heritage list of UNESCO? ["Ghoomar", "Kalbelia", "Terah Taali", "Kachi Ghodi"], "Kalbelia"),
    new Question("Which river of Rajasthan is known as ‘Van Ki Asha’ (Hope of the forest)?", ["Luni","Chambal","Banas", "Mahi"], "Banas"),
    new Question("Keoladeo National Park is located in which district of Rajasthan?", ["Jaipur", "Kota", "Ajmer", "Bharatpur"], "Bharatpur"),
    new Question("What is the official language of Rajasthan state?", ["Kannada", "Bangla", "Mizo, English", "Hindi"], "Hindi")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();