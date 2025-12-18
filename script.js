const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

// Update display
function updateDisplay(value) {
  display.classList.remove("error");
  currentInput += value;
  display.value = currentInput;
}

// Clear
function clearDisplay() {
  currentInput = "";
  display.value = "";
  display.classList.remove("error");
}

// Calculate
function calculateResult() {
  try {
    if (currentInput === "") return;

    const result = Function("return " + currentInput)();

    if (!isFinite(result)) throw Error();

    currentInput = result.toString();
    display.value = currentInput;
  } catch {
    display.value = "Error";
    display.classList.add("error");
    currentInput = "";
  }
}

// Button click handling
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      clearDisplay();
    } else if (value === "=") {
      calculateResult();
    } else {
      updateDisplay(value);
    }
  });
});

// Keyboard input handling
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || ["+", "-", "*", "/", "."].includes(e.key)) {
    updateDisplay(e.key);
  } else if (e.key === "Enter") {
    calculateResult();
  } else if (e.key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
