const q1 = document.getElementById("question1");
const q2 = document.getElementById("question2");
const q3 = document.getElementById("question3");
const q4 = document.getElementById("question4");
const q5 = document.getElementById("question5");

const a1 = document.getElementById("answer1");
const a2 = document.getElementById("answer2");
const a3 = document.getElementById("answer3");
const a4 = document.getElementById("answer4");
const a5 = document.getElementById("answer5");

const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");
const arrow3 = document.getElementById("arrow3");
const arrow4 = document.getElementById("arrow4");
const arrow5 = document.getElementById("arrow5");

let myarr = [false, false, false, false, false];

function turnOn(q, a, arrow, index){
    q.style.fontWeight = "700";
    q.style.color = "#1E1F36";
    a.style.display = "block";
    arrow.style.transform = "rotate(180deg)";
    myarr[index] = true;
}
function turnOff(q, a, arrow, index){
    q.style.fontWeight = "400";
    q.style.color = "#4B4C5F";
    a.style.display = "none";
    arrow.style.transform = "rotate(360deg)";
    myarr[index] = false;
}

q1.addEventListener("click", () => {
    if(!myarr[1]){
        turnOn(q1, a1, arrow1, 1);
    }else{
        turnOff(q1, a1, arrow1, 1);
    }
});
q2.addEventListener("click", () => {
    if(!myarr[2]){
        turnOn(q2, a2, arrow2, 2);
    }else{
        turnOff(q2, a2, arrow2, 2);
    }
});
q3.addEventListener("click", () => {
    if(!myarr[3]){
        turnOn(q3, a3, arrow3, 3);
    }else{
        turnOff(q3, a3, arrow3, 3);
    }
});
q4.addEventListener("click", () => {
    if(!myarr[4]){
        turnOn(q4, a4, arrow4, 4);
    }else{
        turnOff(q4, a4, arrow4, 4);
    }
});
q5.addEventListener("click", () => {
    if(!myarr[5]){
        turnOn(q5, a5, arrow5, 5);
    }else{
        turnOff(q5, a5, arrow5, 5);
    }
});

arrow1.addEventListener("click", () => {
    if(!myarr[1]){
        turnOn(q1, a1, arrow1, 1);
    }else{
        turnOff(q1, a1, arrow1, 1);
    }
});
arrow2.addEventListener("click", () => {
    if(!myarr[2]){
        turnOn(q2, a2, arrow2, 2);
    }else{
        turnOff(q2, a2, arrow2, 2);
    }
});
arrow3.addEventListener("click", () => {
    if(!myarr[3]){
        turnOn(q3, a3, arrow3, 3);
    }else{
        turnOff(q3, a3, arrow3, 3);
    }
});
arrow4.addEventListener("click", () => {
    if(!myarr[4]){
        turnOn(q4, a4, arrow4, 4);
    }else{
        turnOff(q4, a4, arrow4, 4);
    }
});
arrow5.addEventListener("click", () => {
    if(!myarr[5]){
        turnOn(q5, a5, arrow5, 5);
    }else{
        turnOff(q5, a5, arrow5, 5);
    }
});