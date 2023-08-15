var welcome = document.querySelector(".welcome")
var startBtn = document.querySelector(".startBtn")
var quiz = document.querySelector(".quiz")
quiz.style.display = "none"
var questionEl = document.querySelector(".questionEl")
var answersList = document.querySelector(".answersList")

var questionIndex = 0;

startBtn.addEventListener("click", function() {
    welcome.style.display = "none"
    quiz.style.display = "block"
    displayQuiz(questionIndex)
})

var myQuestions = [
    {
        question: "What is a boolean value? ",
        answers: [
            "A:True/False",
            "B:A string",
            "C:A number",
            "D:Both A&B"
        ],
        correctAnswer: "A:True/False"
    },
    {
        question: "How do we initialize a variable? ",
        answers: [
            "A: for",
            "B: if",
            "C: var",
            "D: while"
        ],
        correctAnswer:  "C: var",
    }
]

function displayQuiz(questionIndex) {
    questionEl.innerHTML = myQuestions[questionIndex].question
}