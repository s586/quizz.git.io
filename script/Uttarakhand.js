
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
    new Question("Wellspring of cause of the Ganga is_____?", ["Gangotri", "Gomukh","Badri Nath","Yamunotri"], "Gangotri"),
    new Question("What is the rate of forested range in Uttarakhand?", ["60%", "62%", "63%", "48%"], "63%"),
    new Question(" Where is the China crest arranged?", ["Chamoli","Almora","Nainital", "Uttar Kashi"], "Nainital"),
    new Question("The particular character of Uttarakhand is____?", ["Hilly culture", "Population", "Natural excellence", "Over all improvement"], "Natural excellence"),
    new Question("The capital of Katyuri King was____", ["Katyuri", "Baijnath", "Mussoorie", "Almora"], "Baijnath"),
	new Question("Who established Nainital?", ["William Douglas", "Venus","Berro", "Gorge"], "Berro"),
    new Question("Where is the Building Research Institute and Structural Engineering Centers?",["Kanpur", "Delhi", "Roorkee", "Patna"], "Roorkee"),
    new Question(" From Geographical perspective in what number of areas can the Uttarakhand be partitioned??", ["02","03","06", "05"], "03"),
    new Question("Where is the Har-Ki-Pauri arranged at the bank of stream Ganga?", ["Prayag", "Ranchi", "Haridwar", "Raj Ghat"], "Haridwar"),
    new Question("Fundamental wellspring of salary of Uttarakhand is___", ["Energy", " Forest assets and tourism", "Agriculture", "Industry"], " Forest assets and tourism")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();