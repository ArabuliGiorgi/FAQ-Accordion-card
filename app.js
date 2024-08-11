const container = document.querySelector(".main-div");
let active = null;

function turnOn(questionDiv){
    questionDiv.children[1].style.display = "block";
    questionDiv.querySelector(".question").children[0].style.fontWeight = "700";
    questionDiv.querySelector(".question").children[0].style.color = "#1E1F36";
    questionDiv.querySelector(".question").children[1].style.transform = "rotate(180deg)";
}
function turnOff(questionDiv){
    questionDiv.children[1].style.display = "none";
    questionDiv.querySelector(".question").children[0].style.fontWeight = "400";
    questionDiv.querySelector(".question").children[0].style.color = "#4B4C5F";
    questionDiv.querySelector(".question").children[1].style.transform = "rotate(0deg)";
}

container.addEventListener("click", (event) => {
    const questionDiv = event.target.closest(".question-divs");
    if(questionDiv){
        if(active){
            turnOff(active);
        }

        if(questionDiv === active){
            turnOff(questionDiv);
            active = null;
        }else{
            turnOn(questionDiv);
            active = questionDiv;
        }
    }
});