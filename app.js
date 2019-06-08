var running = false;

// declaring variables
var intervalID
var next = 0
var j = 0
var correct = 0
var incorrect = 0


const choiceA = document.getElementById("A")
const choiceB = document.getElementById("B")
const choiceC = document.getElementById("C")
// Step1
var card = $("#quiz-area");

// Step2
//starting timer
var count = 10;




//questions
var myQuestions = [{
        question: "What color is an Apple? ",
        choiceA: "Red ",
        choiceB: "Blue ",
        choiceC: "Purple ",
        choiceD: "Black ",
        correct: "A"
        // gif: //link to image
    },
    {
        question: "What color is an Grape? ",
        choiceA: "Red ",
        choiceB: "Blue ",
        choiceC: "Purple ",
        choiceD: "Black ",
        correct: "C"
        // gif: //link to image
    },
    {
        question: "What color is the sky? ",
        choiceA: "Red ",
        choiceB: "Blue ",
        choiceC: "Purple ",
        choiceD: "Black ",
        correct: "B"
        // gif: //link to image;
    },
    {
        question: "What color is represents royalty? ",
        choiceA: "Red ",
        choiceB: "Blue ",
        choiceC: "Purple ",
        choiceD: "Black ",
        correct: "C"
        // gif: //link to image
    },
    {
        question: "What color is fire on Earth usually? ",
        choiceA: "Red ",
        choiceB: "Blue ",
        choiceC: "Purple ",
        choiceD: "Black ",
        correct: "A"
        // gif: //link to image
    }
]

//created this variable to try and work with my other function on line 88
var questionIndex = myQuestions.length- 1;


//created an object called game that holds some of the logic for the game.
// var game = {
//     name: function () {
//         i = 0;
//         console.log(myQuestions[i].question)
//         for (i = 0; i < 4; i++) {
//             console.log(myQuestions[j].answers[i])
//         }
//         j++
//     }
// }
// game.name()

//This function will allow the next question to swap to the following
// function showQuestion(){
//     let quest = myQuestions[next];
//     question.innerHTML ="<p>" +quest.myQuestions+ "</p>";
//     choiceA.innerHTML = quest.ChoiceA
//     choiceB.innerHTML = quest.ChoiceB
//     choiceC.innerHTML = quest.ChoiceC
//     choiceD.innerHTML = quest.ChoiceD
// }
// next = 0;
// showQuestion()
// next++
// showQuestion()


// This is the timer for the page
function timer() {
    if (!running) {
        intervalID = setInterval(decrement, 1000)
        running = true;
    }
}
//This is how the timer counts down and calls an alert to let you know if you timed out
function decrement() {
    count--
    $("#counter").text(count);
    if (count == 0) {
        clearInterval(intervalID);
        running = false;
        timeUp()
        
    }
}

//times up alert
function timeUp() {
    alert("Times up!")
}



//jquery section but not entirely sure how this works all together.

$("#start-button").click(timer);
$("#quiz-answer-area").click(timer)
// $("#quiz-question-area").append(myQuestions[0].question);
$("#quiz-answer-area").append(myQuestions[0].answers)
$("#quiz-question-area").text(myQuestions[next].question)
   