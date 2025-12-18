const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "C") {
      display.value = "";
    } 
    else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } 
    else {
      display.value += value;
    }
  });
});

// Keyboard Support
document.addEventListener("keydown", e => {
  if ("0123456789+-*/.".includes(e.key)) {
    display.value += e.key;
  }
  if (e.key === "Enter") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  }
  if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }
  if (e.key === "Escape") {
    display.value = "";
  }
});
