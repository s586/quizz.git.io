
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
    new Question("Which of the following city is second largest city in west Bengal?", ["Asansol", "Malda","siliguri","Bardhaman"], "Asansol"),
    new Question("Total Number of districts in West bengal?", ["18", "20", "23", "22"], "20"),
    new Question("Salt lake stadium is also known as?", ["Yuva Stadium","Yuva Krirangan","Bengal Krirangan", "Yuva bharathi Krirangan"], "Yuva bharathi Krirangan"),
    new Question("In which year the construction of Vidyasagar Setu was completed?", ["1990", "1991", "1992", "1993"], "1992"),
    new Question("In which year Left front won the state assembly elections first time ?", ["1980", "1977", "1982", "1987"], "1977"),
	new Question("In which year the Howrah Bridge was opened for public?", ["1935", "1943","1945", "1951"], "1943"),
    new Question(" The West Bengal Partition took place in which year ?",["1905", "1913", "1910", "1909"], "1905"),
    new Question("In Which year Cooch behar merged with West Bengal ??", ["1902","1303","1950", "1948"], "1950"),
    new Question("Which Vegetable is produced largely in West Bengal?", ["Tomatoe", "Brinjal", "Potato", "Carrot"], "Potato"),
    new Question("The University of Calcutta was founded in", ["1850", "1857", "1890", "1901"], "1857")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();