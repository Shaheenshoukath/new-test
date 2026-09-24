// Initialize the starting count state
let count = 0;

// Grab references to the HTML elements
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

// Function to update the number shown on the screen and handle color changes
function updateDisplay() {
    counterValue.textContent = count;
    
    // Change text color based on the number value
    if (count > 0) {
        counterValue.style.color = '#2ecc71'; // Green for positive
    } else if (count < 0) {
        counterValue.style.color = '#e74c3c'; // Red for negative
    } else {
        counterValue.style.color = '#2c3e50'; // Default dark slate for zero
    }
}

// Add event listeners to handle user interactions
incrementBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});
