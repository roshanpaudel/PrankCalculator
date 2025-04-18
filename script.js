let buttonText = null;
let displayString = "";
let operators = ["+", "-", "/", "*", "%"];

//Event-listener
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    buttonText = event.target.innerText;
    inputProcessor(buttonText);
    displayCalc(displayString);
  });
});

const displayCalc = function (displayString) {
  const display = document.getElementById("display");
  display.innerText = displayString;
};

const deleteLast = function (str) {
  displayString = str.slice(0, -1);
  return displayString;
};

const inputProcessor = function (buttonText) {
  if (Number(buttonText)) {
    displayString += buttonText;
  } else if (buttonText === "AC") {
    displayString = "";
  } else if (buttonText === "C") {
    deleteLast(displayString);
  } else if (operators.includes(buttonText)) {
    if (displayString === "") {
      displayString = "0" + buttonText;
      return;
    }
    if (operators.includes(displayString.slice(-1))) {
      deleteLast(displayString);
    }
    displayString += buttonText;
  } else if (buttonText === "=") {
    if (operators.includes(displayString.slice(-1))) {
      deleteLast(displayString);
    }
    displayString = eval(displayString).toString();
  }
};
