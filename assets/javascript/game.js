var card = $("#quiz-are");

var countStarNumber = 30;

var question = [{
        question: "string",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "string",
        // gif: //link to image
    },
    {
        question: "string",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "string",
        // gif: //link to image
    },
    {
        question: "string",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "string",
        // gif: //link to image;
    },
    {
        question: "string",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "string",
        // gif: //link to image
    },
    {
        question: "string",
        answers: ["1", "2", "3", "4"],
        correctAnswer: "string",
        // gif: //link to image
    }


]
//A variable to hol the set interval
var timer;

var game = {
    questions: question,
    currenQuestion: 0,
    counter: countStarNumber,
    correct: 0,
    Incorrect: 0,
    

    countdown: function () {
        // decrement counter
        setInterval()
        
        //use jquery to put dynamically
        //put logic onto the page
        // if statement
        //if time is up, run time up function
    },

    loadQuestion: function () {
        // *set timer
        // * timer = setInterval(game.countdown, 1000)
        // * dynamically add question into card variable
        //      * *hint* card.html ("<h2>" + "<h2>")
        // *for loop to run through the the questions
        // * a dynamically added buttons with answer options
    },


    nextQuestion: function () {
        // * set the counter
        // game.counter = counStartNumber
        // * use jquery to change the text of the game counter
        // * increment the currentQuestion by one
        // * call the loadQuestion function
    },

    timeUp: function(){
        // * clear Interval(timer)
        // * use jquery to change the text of the game counter
        // * dynamically add out of time too the card
        // * append the correct answer to the card
        // * append image/gif to the card
    },

    results: function() {
        // * clearInterval
        // * dynamically add html to let them know of there results
        // * use jquery to add html of game.counter to the id of counter-number
        // * add how many correct answer they got
        // * add how many incorrect answers they got 
        // * add how many unanswered
        // * add a start over button
    },

    clicked: function(){
        // * clearInterval(timer)
        // * if/else statement for when an answer is clicked
        //      *if correct run answeredCorrectly() function
        //      *else run answeredIncorrectly() function
    },

    answeredIncorrectly: function(){
        // * add a point to the incorrect column
        //                  *clearInterval(timer)
        //                  *dynamically add html to let them know they are wrong
        //                  * add the right answer
        //                  * add the image
        //                  * if / else statement
        //                      *if no mroe questions wait 3 seconds and then show results
        //                          *else wait three seconds and show next question
    },

    answeredCorrectly: function() {
        // * add a point to the correct column
        // * clearInterval(timer)
        // * dynamically add html to let them know they are correct
        // * add image
        // * if / else statement
        //        * if no more questions wait three seconds then show result
        //              *else wait three seconds and show next question
    },

    //create a reset function

}

    



//create click events

// $(document).on("click", "start", function () {}
//     $("sub-wrapper").prepend( < h2 > Time Remaining: < span id = 'counter-cumber' > 30 < /span>seconds</h2 > )
// ),
