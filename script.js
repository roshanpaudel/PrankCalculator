let buttonText = null;
let displayText = 0;
let evalString = 0;
let displayString = 0;
let operators = ["+", "-", "/", "*", "%"];
let operatorInput = false;
let result = 0;

const buttons = document.querySelectorAll("button");
console.log(buttons);

const displayCalc = function (displayString) {
  const display = document.getElementById("display");
  display.innerText = displayString;
};

const inputProcessor = function (buttonText) {
  if (Number(buttonText)) {
    evalString += buttonText;
    displayString += buttonText;
    console.log(evalString);
  } else if (buttonText == "AC") {
    evalString = 0;
    displayString = 0;
  } else if (buttonText == "C") {
    evalString = 0;
    displayString = 0;
  } else if (operators.includes(buttonText)) {
    evalString += buttonText;
    displayString = 0;
  } else if (buttonText == "=") {
    result = eval(evalString);
    displayString = result;
  }
};

const Calculate = function (firstOperand, secondOperand) {};

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    buttonText = event.target.innerText;
    console.log(buttonText);
    inputProcessor(buttonText);
    displayCalc(displayString);
  });
});
