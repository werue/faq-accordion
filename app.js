const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer")
const questionIcons = document.querySelectorAll(".question__icon")

for (let i = 0; i < questions.length; i++){
    const q = questions[i];
    const a = answers[i];
    const icon = questionIcons[i];

    q.addEventListener("click", () => {
        console.log("clicked!");
    
        if(!a.style.display){
            for(let openQ = 0; openQ < questions.length; openQ++){
                answers[openQ].style.display = "";
                questionIcons[openQ].src = "assets/images/icon-plus.svg";
            }

            a.style.display = "block";
            icon.src = "assets/images/icon-minus.svg";
        }else{
            a.style.display = "";
            icon.src = "assets/images/icon-plus.svg";
        }


    })
}