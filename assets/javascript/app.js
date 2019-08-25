// Create starting box with instructions and start button

// Create quizz slides with buttons
    // If timer hits zero or answer -> next slide
    // Increase Right or Wrong answer count
// Create end of game box with scores and start button
// 

let guessTime = 10;
let breakTime = 5
let questionCount = 0;
let intervalId;
let breakID
let wrongCount = 0;
let rightCount = 0;

const q1 = {
    question : "What is the Capital of Montana?",
    answer1 : ["Helena", true],
    answer2 : ["Butte", false],
    answer3 : ["Cheyenne", false]
}
const q2 = {
    question : "Who did Miley Cyrus first gain fame for portraying?",
    answer1 : ["Hannah Montana", true],
    answer2 : ["Lizzie McGuire", false],
    answer3 : ["Raven Symone", false]
}
const q3 = {
    question : "What rap group had a hit song titled Hannah Montana?",
    answer1 : ["Migos", true],
    answer2 : ["Young Money", false],
    answer3 : ["Young Gunz", false]
}
const q4 = {
    question : "Before Dora the Explorer, what PBS tv show taught kids beginner spanish?",
    answer1 : ["Amigos", true],
    answer2 : ["Destinos", false],
    answer3 : ["El Gato en Mis Pantalones", false]
}
const q5 = {
    question : "The Religious Society of Friends is better known by their nickname:",
    answer1 : ["The Quakers", true],
    answer2 : ["The Mennonites", false],
    answer3 : ["The Mormons", false]
}
const q6 = {
    question : "The 3D engine for this computer game was one of the first developed and became widely reused in the late 1990s:"
    answer1 : ["Quake", true],
    answer2 : ["Doom", false],
    answer3 : ["Counterstrike", false]
}
const q7 = {
    question : "One of the largetst recorded earthquakes in the last century in the lower 48 states not including California occured near Hebgen Lake in this State ",
    answer1 : ["Montana", true],
    answer2 : ["Idaho", false],
    answer3 : ["Tennessee", false]
}

}
const questionSet = [q1,q2,q3,q4,q5,q6,q7];

let welcome = "Click 'Play the Game' to start. You have "+ guessTime + " seconds to answer per question and there are "+ questionSet.length + " questions"

// Creates starting page on file open
function gameIntro(){
    $("#count-timer").html("<h2>" + welcome + "</h2>")
    
}

// Create countdown timer
function countdown(){
    
    $("#count-timer").html("<h2>You have "+ guessTime + " seconds left!")
    guessTime--;
    if (guessTime === -1){
        questionCount += 1
        wrongCount++
        
        guessTime = 10;
        breakTime = 5
        questionCount++
        
        $("#count-timer").html("Tally: "+ rightCount +" Right -" +wrongCount +" Wrong")
        $("quiz-box").html("")
        clearInterval(breakID);
        breakID = setInterval(timedBreak, 1000);
        nextQuestion()
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
            console.log(currentQuestion.answer1[1])
            $("#quiz-box").text("")
            $("#quiz-box").append(textQuestion)
            $("#quiz-box").append(textAns1)
            $("#quiz-box").append(textAns2)
            $("#quiz-box").append(textAns3)

            // Start countdown clock
            clearInterval(intervalId);
            intervalId = setInterval(countdown, 1000);

            $(".btn").click(function(){
                console.log($(this).attr("value"))
                var userGuess = $(this).attr("value")
                
                console.log(questionCount)

                console.log(userGuess)
                if(userGuess === "true"){
                    rightCount++
                } else{
                    wrongCount++
                }
                console.log(rightCount + " " + wrongCount)
                guessTime = 10;
                breakTime = 5
                
                
               
            })

            
        }

    }
function endGame(){
    $("#count-timer").html("<h2>Game Over!</h2>")
        .append("<h2>You got "+ rightCount + " questions right!</h2>")
    $("#play-button").text("Start Over?")
    
    // Starts game from the beginning if clicked    
    $(document).on("click", "#play-button", function(){
        $("#play-button").text("Start Over?")
        $("#count-timer").text("")
        guessTime = 10;
        questionCount = 0;
        wrongCount = 0;
        rightCount = 0;
        nextQuestion();
        })
    
    
    
   
}


// Shows current score between questions
function gameStatus(){
    questionCount++
    $("#count-timer").html("Tally: "+ rightCount +" Right -" +wrongCount +" Wrong")
    $("quiz-box").html("")
    clearInterval(breakID);
    breakID = setInterval(timedBreak, 1000);
    nextQuestion()
}

function timedBreak(){
    breakTime--;
    if (breakTime === -1){
        return;
    }
}

gameIntro();   

$(document).on("click", "#play-button", function(){
    $("#count-timer").text("")
    
    nextQuestion();
    })
