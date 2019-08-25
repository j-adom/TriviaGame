// Create starting box with instructions and start button

// Create quizz slides with buttons
    // If timer hits zero or answer -> next slide
    // Increase Right or Wrong answer count
// Create end of game box with scores and start button
// 

let guessTime = 10;
let questionCount = 0;
let intervalId;
let wrongCount = 0;
let rightCount = 0;

const q1 = {
    question : "Question 1",
    answer1 : ["Answer 1", true],
    answer2 : ["Answer 2", false],
    answer3 : ["Answer 3", false]
}
const q2 = {
    question : "Question 2",
    answer1 : ["Answer 1", true],
    answer2 : ["Answer 2", false],
    answer3 : ["Answer 3", false]
}
const q3 = {
    question : "Question 3",
    answer1 : ["Answer 1", true],
    answer2 : ["Answer 2", false],
    answer3 : ["Answer 3", false]
}
const q4 = {
    question : "Question 4",
    answer1 : ["Answer 1", true],
    answer2 : ["Answer 2", false],
    answer3 : ["Answer 3", false]
}
const q5 = {
    question : "Question 5",
    answer1 : ["Answer 1", true],
    answer2 : ["Answer 2", false],
    answer3 : ["Answer 3", false]
}
const q6 = {
    question : "Question 6",
    answer1 : ["Answer 1", true],
    answer2 : ["Answer 2", false],
    answer3 : ["Answer 3", false]
}
const q7 = {
    question : "Question 7",
    answer1 : ["Answer 1", true],
    answer2 : ["Answer 2", false],
    answer3 : ["Answer 3", false]
}
const q8 = {
    question : "Question 8",
    answer1 : ["Answer 1", true],
    answer2 : ["Answer 2", false],
    answer3 : ["Answer 3", false]
}
const q9 = {
    question : "Question 9",
    answer1 : ["Answer 1", true],
    answer2 : ["Answer 2", false],
    answer3 : ["Answer 3", false]
}
const q10 = {
    question : "Question 10",
    answer1 : ["Answer 1", true],
    answer2 : ["Answer 2", false],
    answer3 : ["Answer 3", false]
}
const questionSet = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];

let welcome = "Click 'Play the Game' to start. You have "+ guessTime + " seconds to answer per question and there are "+ questionSet.length + " questions"

function gameIntro(){
    $("#count-timer").html("<h2>" + welcome + "</h2>")
    
}

// Create countdown timer
function countdown(){
    
    $("#count-timer").html("<h2>You have "+ guessTime + " seconds left!")
    guessTime--;
    if (guessTime === -1){
        wrongCount++
        console.log(wrongCount)
        gameStatus()
    }

}
//Update screen with current question
function nextQuestion(){
   if (questionCount === questionSet.length){
        endGame();
    }
    else{
        console.log(questionSet)
        let currentQuestion = questionSet[questionCount] 
        console.log(currentQuestion)
        let textQuestion = $("<p>").text(currentQuestion.question)
        console.log(currentQuestion.question)
        let textAns1 = $("<div>").text(currentQuestion.answer1[0])
            .addClass("btn btn-secondary btn-lg btn-block")       
            .attr("id","answer-1 ")
            .attr("value", currentQuestion.answer1[1])
        let textAns2 = $("<div>").text(currentQuestion.answer2[0])
            .addClass("btn btn-secondary btn-lg btn-block")
            .attr("id","answer-2 ")
            .attr("value", currentQuestion.answer2[1])
        let textAns3 = $("<div>").text(currentQuestion.answer3[0])
            .addClass("btn btn-secondary btn-lg btn-block")
            .attr("id","answer-3 ")
            .attr("value", currentQuestion.answer3[1])
        
        $("#quiz-box").text("")
        $("#quiz-box").append(textQuestion)
        $("#quiz-box").append(textAns1)
        $("#quiz-box").append(textAns2)
        $("#quiz-box").append(textAns3)

        clearInterval(intervalId);
        intervalId = setInterval(countdown, 1000);

        $(".btn").click(function(){
            var userGuess = $(this).val()
            console.log(questionCount)
            console.log(userGuess)
            if(userGuess === true){
                rightCount++
            } else{
                wrongCount++
            }
            setTimeout(() => { gameStatus()}, 5000); 
        })

        
    }

}
function endGame(){
    $("#count-timer").html("<h2>Game Over!</h2>")
        .append("<h2>You got "+ rightCount + " questions right!</h2>")
    $("#play-button").text("Start Over?")
    $("#play-button").on("click", function(){
        $("#play-button").text("Start Over?")
        $("#count-timer").text("")
        guessTime = 10;
        questionCount = 0;
        wrongCount = 0;
        rightCount = 0;
        nextQuestion();
        })
    
    
    
   
}

function gameOn(){



}



function gameStatus(){
    guessTime = 10;
    questionCount++
    
    $("#count-timer").text("Tally: "+ rightCount +" Right -" +wrongCount +" Wrong")
    $("quiz-box").text("")


}
function startGame(){
}

gameIntro();   

$("#play-button").on("click", function(){
    $("#count-timer").text("")
    
    nextQuestion();
    })
