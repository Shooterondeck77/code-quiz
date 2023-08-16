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
var timeEl = document.querySelector(".timeEl")
var highscoreEL = document.querySelector(".highscoreEL");
highscoreEL.style.display = "none"
var userHistory = JSON.parse(localStorage.getItem("userHistory")) || []
var highscoreList = document.querySelector(".highscoreList"); 
highscoreList.style.display = "none";
var highscorename = document.querySelector(".highscorename"); 
highscorename.style.display = "none"



var congratulationsMessage = document.querySelector(".congratulationsMessage");


var questionIndex = 0;
var score = 0;
var timer = 60

startBtn.addEventListener("click", function() {
    welcome.style.display = "none"
    quiz.style.display = "block"
    displayQuiz(questionIndex)
    setInterval(function() {
        timer--
        timeEl.innerHTML = "Time: " + timer
    }, 1000)
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
    },
    {
        question: "Which company developed javascript?",
          answers: [
            "A: Microsoft",
            "B: IBM",
            "C: Netscape",
            "D: Sony"
          ],
            correctAnswer:  "C: Netscape",
        },
    {
        question: "what is \"===\" operator mean?",
        answers:[
        "A: absolute",
        "B: equal",
        "C: sum",
        "D: add",
        ],
        correctAnswer:  "A: absolute"
},

];


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
            score: score}
        })
}
    

saveBtn.addEventListener("click", function() {
    var initialsValue = initials.value; 
    
    if (initialsValue !== "") {
        endQuizEl.style.display = "none";
        highscoreEL.style.display = "block";
        displayHighscores();
        
        var userInfo = {
            initials: initialsValue,
            score: score
        };
        userHistory.push(userInfo);
        localStorage.setItem("userHistory", JSON.stringify(userHistory));
    } else {
        alert("Please enter your initials before saving.");
    }

})

function displayHighscores() {
    endQuizEl.style.display = "none"
    highscoreEL.style.display = "block"
    highscoreEL.innerHTML = "Congratulations on completing the quiz!"
    highscorename.style.display = "block"
    highscorename.innerHTML = "High Scores"
    highscoreList.style.display = "block"
   

    highscoreList.innerHTML = "";
    for (var i = 0; i < Math.min(userHistory.length, 10); i++) {
        var listItem = document.createElement("li");
        listItem.innerHTML = userHistory[i].initials + ": " + userHistory[i].score;
        highscoreList.appendChild(listItem);
    };
}

    
    
 userHistory.push(score) 
        localStorage.setItem("userHistory", JSON.stringify(userHistory))
    
    
