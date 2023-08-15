var welcome = document.querySelector(".welcome")
var startBtn = document.querySelector(".startBtn")
var quiz = document.querySelector(".quiz")
quiz.style.display = "none"
var questionEl = document.querySelector(".questionEl")
var answersList = document.querySelector(".answersList")
var endQuizEl = document.querySelector(".endQuiz")
endQuizEl.style.display = "none"
var scoreEl = document.querySelector(".scoreEl")
var initials = document.querySelector(".initials")
var saveBtn = document.querySelector(".saveBtn")
var userHistory = JSON.parse(localStorage.getItem("userHistory")) || []

var questionIndex = 0;
var score = 0;

startBtn.addEventListener("click", function() {
    welcome.style.display = "none"
    quiz.style.display = "block"
    displayQuiz(questionIndex)
})

var myQuestions = [
    {
        question: "What is a boolean value? ",
        answers: [
            "A: True/False",
            "B: A string",
            "C: A number",
            "D: Both A and B"
        ],
        correctAnswer: "A: True/False"
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
    answersList.innerHTML = ""
    questionEl.innerHTML = myQuestions[questionIndex].question
    var answerSet = myQuestions[questionIndex].answers
    answerSet.forEach(function(value) {
        var li = document.createElement("li")
        li.innerHTML = value
        answersList.append(li)
        li.addEventListener("click", function(event) {
            var correct = myQuestions[questionIndex].correctAnswer
            var choice = event.target.innerHTML
            if(choice === correct) {
                console.log("correct")
                score = score + 20
            } else {
                console.log("wrong")
            }
            questionIndex++;
            if(questionIndex <= myQuestions.length - 1) {
                displayQuiz(questionIndex)
            } else {
                endQuiz()
            }
        })
    })
}

function endQuiz() {
    quiz.style.display = "none"
    endQuizEl.style.display = "block"
    scoreEl.innerHTML = "You got a score of: " + score
    saveBtn.addEventListener("click", function() {
        var initialsValue = initials.value
        var userInfo = {
            initials: initialsValue,
            score: score
        }
        userHistory.push(userInfo)
        localStorage.setItem("userHistory", JSON.stringify(userHistory))
    })
}