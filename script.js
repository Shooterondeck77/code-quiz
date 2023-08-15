var welcome = document.querySelector(".welcome")
var startBtn = document.querySelector(".startBtn")
var quiz = document.querySelector(".quiz")
quiz.style.display = "none"
var questionEl = document.querySelector(".questionEl")
var answersList = document.querySelector(".answersList")


startBtn.addEventListener("click", function() {
    welcome.style.display = "none"
    quiz.style.display = "block"
})


var myQuestions = [
    {
        question: "What is Boolean? ",
        answers: [
            "A:True/False",
            "B:A string",
            "C:A number",
            "D:Both A&B"
        ],
        correctAnswer: "A:True/False"
    },
    {
        question: "What is HTML? ",
        answers: [
            "A:True/False",
            "B:A string",
            "C:A number",
            "D:Both A&B"
        ],
        correctAnswer: A
    }
]