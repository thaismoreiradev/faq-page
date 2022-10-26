const questions = document.querySelectorAll(".question")
const buttonQuestion1 = document.querySelector(".plus-minus-question-1")
const buttonQuestion2 = document.querySelector(".plus-minus-question-2")
const buttonQuestion3 = document.querySelector(".plus-minus-question-3")
const answerQuestion1 = document.querySelector(".answer-question-1")
const answerQuestion2 = document.querySelector(".answer-question-2")
const answerQuestion3 = document.querySelector(".answer-question-3")
const questionOneRounded = document.querySelector("#question-rounded-1")
const questionTwoRounded = document.querySelector("#question-rounded-2")
const questionThreeRounded = document.querySelector("#question-rounded-3")
let openQuestionOne = false;
let openQuestionTwo = false;
let openQuestionThree = false;






questions.forEach( question => {
    const plusMinusBtn = question.querySelector("#plus-minus-btn");
    const answer = question.querySelector("#answer");


    question.addEventListener("click", () => {
      
        
        const questionId = question.getAttribute("id")

        // rules for question one
        if(questionId === "question1" && openQuestionOne === false){
            
            plusMinusBtn.classList.remove("fa-plus-square")
            plusMinusBtn.classList.add("fa-minus-square")
            answer.classList.remove("hidden")

            // rule for change de border for rounded or not
            questionOneRounded.classList.remove("rounded-lg")
            questionOneRounded.classList.add("rounded-t-lg")
            openQuestionOne = true
            openQuestionTwo = false
            openQuestionThree = false

            questionTwoRounded.classList.remove("rounded-t-lg")
            questionTwoRounded.classList.add("rounded-lg")

            questionThreeRounded.classList.remove("rounded-t-lg")
            questionThreeRounded.classList.add("rounded-lg")

            buttonQuestion2.classList.remove("fa-minus-square")
            buttonQuestion2.classList.add("fa-plus-square")
            answerQuestion2.classList.add("hidden")

            buttonQuestion3.classList.remove("fa-minus-square")
            buttonQuestion3.classList.add("fa-plus-square")
            answerQuestion3.classList.add("hidden")

        } else if(questionId === "question1" && openQuestionOne === true){            
            plusMinusBtn.classList.remove("fa-minus-square")
            plusMinusBtn.classList.add("fa-plus-square")
            answer.classList.add("hidden")

            // rule for change de border for rounded or not
            questionOneRounded.classList.remove("rounded-t-lg")
            questionOneRounded.classList.add("rounded-lg")

            openQuestionOne = false
            openQuestionTwo = false
            openQuestionThree = false

        }


        // rules for question two
        if(questionId === "question2" && openQuestionTwo === false){
            
            plusMinusBtn.classList.remove("fa-plus-square")
            plusMinusBtn.classList.add("fa-minus-square")
            answer.classList.remove("hidden")

            // rule for change de border for rounded or not
            questionTwoRounded.classList.remove("rounded-lg")
            questionTwoRounded.classList.add("rounded-t-lg")
               
            openQuestionOne = false
            openQuestionTwo = true
            openQuestionThree = false

            questionOneRounded.classList.remove("rounded-t-lg")
            questionOneRounded.classList.add("rounded-lg")

            questionThreeRounded.classList.remove("rounded-t-lg")
            questionThreeRounded.classList.add("rounded-lg")

            buttonQuestion1.classList.remove("fa-minus-square")
            buttonQuestion1.classList.add("fa-plus-square")
            answerQuestion1.classList.add("hidden")

            buttonQuestion3.classList.remove("fa-minus-square")
            buttonQuestion3.classList.add("fa-plus-square")
            answerQuestion3.classList.add("hidden")


         

        } else if(questionId === "question2" && openQuestionTwo === true){            
            plusMinusBtn.classList.remove("fa-minus-square")
            plusMinusBtn.classList.add("fa-plus-square")
            answer.classList.add("hidden")

            // rule for change de border for rounded or not
            questionTwoRounded.classList.remove("rounded-t-lg")
            questionTwoRounded.classList.add("rounded-lg")

            openQuestionOne = false
            openQuestionTwo = false
            openQuestionThree = false
        }




                // rules for question three
        if(questionId === "question3" && openQuestionThree === false){
            
            plusMinusBtn.classList.remove("fa-plus-square")
            plusMinusBtn.classList.add("fa-minus-square")
            answer.classList.remove("hidden")

            // rule for change de border for rounded or not
            questionThreeRounded.classList.remove("rounded-lg")
            questionThreeRounded.classList.add("rounded-t-lg")
               
            openQuestionOne = false
            openQuestionTwo = false
            openQuestionThree = true

            questionOneRounded.classList.remove("rounded-t-lg")
            questionOneRounded.classList.add("rounded-lg")

            questionTwoRounded.classList.remove("rounded-t-lg")
            questionTwoRounded.classList.add("rounded-lg")

            buttonQuestion1.classList.remove("fa-minus-square")
            buttonQuestion1.classList.add("fa-plus-square")
            answerQuestion1.classList.add("hidden")

            buttonQuestion2.classList.remove("fa-minus-square")
            buttonQuestion2.classList.add("fa-plus-square")
            answerQuestion2.classList.add("hidden")


         

        } else if(questionId === "question3" && openQuestionThree === true){            
            plusMinusBtn.classList.remove("fa-minus-square")
            plusMinusBtn.classList.add("fa-plus-square")
            answer.classList.add("hidden")

            // rule for change de border for rounded or not
            questionThreeRounded.classList.remove("rounded-t-lg")
            questionThreeRounded.classList.add("rounded-lg")

            openQuestionOne = false
            openQuestionTwo = false
            openQuestionThree = false
        }

    })
})



