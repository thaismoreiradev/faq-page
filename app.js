const questions = document.querySelectorAll(".question")
let open = false;



questions.forEach( question => {
    const plusMinusBtn = question.querySelector("#plus-minus-btn");
    const answer = question.querySelector("#answer");
    question.addEventListener("click", () => {
        
        if(open === false){
            plusMinusBtn.classList.remove("fa-plus-square")
            plusMinusBtn.classList.add("fa-minus-square")
            answer.classList.remove("hidden")
            open = true
        } else{
            plusMinusBtn.classList.remove("fa-minus-square")
            plusMinusBtn.classList.add("fa-plus-square")
            answer.classList.add("hidden")
            open = false
        }


    })
})





// const btnChanging = () => {
//     buttons.addEventListener("click", function(target) {
//         if(target === plusBtn){
//             plusBtn.style.display = "none";
//             minusBtn.style.display = "block";
//             answer.style.display = "block"
//         }
//     })
// }