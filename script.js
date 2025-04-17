let buttonText = null;
let displayText = 0;
let evalString = 0;
let displayString = "";
let operators = ["+", "-", "/", "*", "%"];
let operatorInput = false;
let result = 0;

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
  str = str.splice(0, -1);
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
    if (displayString.includes(operators)) {
      deleteLast(displayString);
    }
    displayString += buttonText;
  } else if (buttonText === "=") {
    displayString = eval(displayString).toString();
  }
};
