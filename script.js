let count = 0;
// Select the HTML elements 
const heading =
document.getElementById("count");
const increaseBtn =
document.getElementById("increase");

const decreaseBtn =
document.getElementById("decrease");
const resetBtn =
document.getElementById("reset");
const changeColorBtn =
document.getElementById("changeColor");

//Update the display
function updateDisplay() {
    heading.textContent = `Count: 
    ${count}`;
    if (count < 0) {
        heading. classList . add("negative");
    } else{
        heading. classList . remove("negative");
    }
}
//Increase count
increaseBtn. addEventListener("click", function () {
    count++;
    updateDisplay();
    
});
//Decrease count
decreaseBtn.addEventListener("click",function(){
    count--;
    updateDisplay();
});
//Reset count
resetBtn.addEventListener("click",function(){
    count = 0;
    updateDisplay();
});
//Change background colour
changeColorBtn. addEventListener("click", function(){
    document.body.classList.toggle("")
});

