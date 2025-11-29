// get the references of the elements
const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progress");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// initialization 

let timeLeft = 15;
let score = 0;
let currentQuestionIndex = 0; //current question index
let timer; //timer reference

// quiz question array

const questions = [
    {
        question: "What is MERN stack?",
        answers: [
            { text: "To develop only FE", correct: false },
            { text: "To develop only BE", correct: false },
            { text: "To develop only FE and BE", correct: true },
            { text: "To develop only DB", correct: false }
        ]
    },
    {
        question: "What is HTML?",
        answers: [
            { text: "not the web document", correct: false },
            { text: "web document", correct: true },
            { text: "For styling purpose", correct: false },
            { text: "none of the above", correct: false },
        ]
    },

    {
        question: "What is Java?",
        answers: [
            { text: "Java is the frontend lang", correct: false },
            { text: "java is used for styling purpose", correct: false },
            { text: "Document based", correct: false },
            { text: "Java is the backend lang", correct: true },
        ]
    }

];

// function to start the quiz

function startQuiz() {

    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none" ; //hide next button initially
    showQuestion();
    // updateProgress();

}



function showQuestion() {
    resetState(); //reset all the ui state
    
    startTimer(); //start the coutdown
    const currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion)
    questionElement.textContent = currentQuestion.question;

    // create button for each answer
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer))
        answerButtons.appendChild(button)

    })
}

// function to start the countdown timer

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        // if timer, he didn't selected anything
        if (timeLeft === 0) {
            clearInterval(timer)
            selectAnswer({ correct: false }); //auto select wrong if timer runes out and if it 0
        }

    }, 1000);
}


// function to handle the answer selection

function selectAnswer(answer) {
    clearInterval(timer); //stop timer
    // disable all the buttons after the selecting of the answer
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true; //disabled the buttons
        button.classList.add("disabled"); //add the disabled class

        // highlight the correct or wrong answer 
        if (button.textContent === answer.text) {
            button.classList.add(answer.correct ? "correct" : "wrong")
        }
    })

    if (answer.correct) {
        score++; //we are going to increase the score if answer is correct
    }

    nextButton.style.display = "block"

    nextButton.addEventListener("click", () => {
        currentQuestionIndex++; //move to next question

        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore(); //end the quiz if no more questions
        }
    })
}


// function updateProgress() {

// }

function resetState() {
    clearInterval(timer); // to clear the existing timer
    timeLeft = 15;
    timerElement.textContent = timeLeft; //display the updated timer
    nextButton.style.display = "none"
    answerButtons.innerHTML = "" //remove the previous answer button
}

function showScore() {
    questionElement.textContent = `You scored ${score} out of ${questions.length}!`
    nextButton.textContent = "Play Again";
    nextButton.style.display = "block";

    // reset the quiz and start freshly when user click play again
    nextButton.addEventListener("click", startQuiz)

}

startQuiz()



