const buttons = document.querySelectorAll("#btn")

// buttons.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.style.display = "block";
//     })
// })


const plusBtn = document.querySelectorAll("#plus-btn");
const minusBtn = document.querySelectorAll("#minus-btn");


const btnChanging = () => {
    addEventListener("click", function(target) {
        if(target == plusBtn){
            plusBtn.style.display = "hidden"
            minusBtn.style.display = "block"
        }
    })
}