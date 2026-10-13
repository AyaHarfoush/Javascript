let count = 0;

const counterDisplay = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");

function updateDisplay() {
    counterDisplay.textContent = count;
    
    if (count >= 0) {
        counterDisplay.classList.remove("negative");
        counterDisplay.classList.add("positive");
    } else {
        counterDisplay.classList.remove("positive");
        counterDisplay.classList.add("negative");
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
