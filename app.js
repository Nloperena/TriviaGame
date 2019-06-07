var running = false;

// declaring variables
var correct = [""];
var incorrect = [""]
// Step1
var card = $("#quiz-area");

// Step2
var countStartNumber = 30;

// Step3
var question = [{
        question: "string",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "string",
        incorrectAnswer: ["2", "3", "4"]
        // gif: //link to image
    },
    {
        question: "string",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "string",
        incorrectAnswer: ["2", "3", "4"]
        // gif: //link to image
    },
    {
        question: "string",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "string",
        incorrectAnswer: ["2", "3", "4"]
        // gif: //link to image;
    },
    {
        question: "string",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "string",
        incorrectAnswer: ["2", "3", "4"]
        // gif: //link to image
    },
    {
        question: "string",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "string",
        incorrectAnswer: ["2", "3", "4"]
        // gif: //link to image
    }
]
//Step4
function () {
    if (!running) {
        var timer = setInterval(decrement, 1000)
        running = true;
    }
}


var game = {

}

