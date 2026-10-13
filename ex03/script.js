let count = 0;

const counterDisplay = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");

function updateDisplay() {
    counterDisplay.textContent = count;
    counterDisplay.classList.remove("positive","negative","reset");
    if (count > 0) {
        counterDisplay.classList.add("positive");
    } else if (count <0) {
        counterDisplay.classList.add("negative");
     
    } else {
        counterDisplay.classList.add("reset");
}

}

incrementBtn.addEventListener("click", function() {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener("click", function() {
    count--;
    updateDisplay();
});

resetBtn.addEventListener("click", function() {
    count = 0;
    updateDisplay();
});
