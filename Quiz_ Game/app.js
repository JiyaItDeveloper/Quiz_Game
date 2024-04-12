
const questions = [{
question:'Which is the largest animal in this world?',
answers:[{ text: "Shark",Correct:false},
{text: "Blue Whale",Correct:true},
{text: "Elephant",Correct:false},
{text: "Giraffe",Correct:false}]

},

{
    question:'Which is the largest desert in this world?',
    answers:[{ text: "Kalhari",Correct:false},
    {text: "Gobi",Correct:true},
    {text: "Sahara",Correct:false},
    {text: "Antarctica",Correct:true}]
    
    },

    {question:'Which is the smallest continent in this world?',
    answers:[{ text: "Asia",Correct:false},
    {text: "Australia",Correct:true},
    {text: "Arctic",Correct:false},
    {text: "Africa",Correct:false}]
    
    },

    
   { question:'Which is the national game of Pakistan?',
answers:[{ text: "Cricket",Correct:false},
{text: "Hockey",Correct:true},
{text: "Football",Correct:false},
{text: "Bate binton",Correct:false}]

   }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let CurrentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    CurrentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
};
function showQuestion(){
    resetState();
    let currentQuestion =questions[CurrentQuestionIndex];
    let questionNo = CurrentQuestionIndex +1;
    questionElement.innerHTML =questionNo + ". " + currentQuestion.
    question;
    currentQuestion.answers.forEach(answer =>{
        const button =document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.Correct){
            button.dataset.Correct =answer.Correct;
        }
        button.addEventListener("click",selectAnswer);

    })
};

function resetState(){
nextButton.style.display = "none";
while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild)
}
};

function selectAnswer(e){
    let selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.Correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("Incorrect");
    }
    Array.from(answerButton.children).forEach(
        button =>{
            if(button.dataset.Correct === "true"){
                button.classList.add("correct");
            }
            button .disabled = true;  
        }
    )
    nextButton.style.display ="block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = 'block'
}



function handleNextButton(){
    CurrentQuestionIndex++;
    if(CurrentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if(CurrentQuestionIndex < questions.length){
        handleNextButton();    
    }else{
        startQuiz();
    }
})

startQuiz()

















