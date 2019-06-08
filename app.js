var running = false;

// declaring variables
var intervalID
var j = 0
var correct = 0
var incorrect = 0
// Step1
var card = $("#quiz-area");

// Step2
var count = 10;

// Step3

var correctAnswers = ["1", "2", "3", "4", "5"];


var myQuestions = [{
        question: "This is my first question ",
        answers: ["A1 ", "A2 ", "A3 ", "A4 "],
        // gif: //link to image
    },
    {
        question: "This is my second question ",
        answers: ["B1 ", "B2 ", "B3 ", "B4 "],
        // gif: //link to image
    },
    {
        question: "This is my third question ",
        answers: ["C1 ", "C2 ", "C3  ", "C4 "],
        // gif: //link to image;
    },
    {
        question: "This is my fourth question ",
        answers: ["D1 ", "D2 ", "D3 ", "D4 "],
        // gif: //link to image
    },
    {
        question: "This is my fifth question ",
        answers: ["E1 ", "E2 ", "E3 ", "E4 "],
        // gif: //link to image
    }
]


var game = {
    //Step4
    name: function () {
        i = 0;
        console.log(myQuestions[i].question)
        for (i = 0; i < 4; i++) {
            console.log(myQuestions[j].answers[i])
        }
        j++
    }
}
game.name()

// Step5
function timer() {
    if (!running) {
        intervalID = setInterval(decrement, 1000)
        running = true;
    }
}

function decrement() {
    count--
    $("#counter").text(count);
    if (count == 0) {
        running = false;
        timeUp()
        clearInterval(intervalID);
    }
}


function timeUp() {
    alert("Times up!")
}

$("#start-button").click(timer);
$("#quiz-answer-area").click(timer)
$("#quiz-answer-area").append(myQuestions[0].question);
$("#quiz-area").append(myQuestions[0].answers)