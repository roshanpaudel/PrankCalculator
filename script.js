let buttonText = null;
let displayText = 0;
let numberString = 0;
let firstOperand = 0;
let secondOperand = 0;
let operators = ["+", "-", "/", "*", "%"];
let operatorInput = false;

const buttons = document.querySelectorAll("button");
console.log(buttons);

const displayCalc = function (numberString) {
  const display = document.getElementById("display");
  display.innerText = numberString;
};

const inputProcessor = function (buttonText) {
  if (Number(buttonText)) {
    numberString += buttonText;
    console.log(numberString);
  } else if (buttonText == "AC") {
    numberString = 0;
    firstOperand = 0;
    secondOperand = 0;
    operatorInput = false;
  } else if (buttonText == "C") {
    numberString = 0;
    secondOperand = 0;
  } else if (operators.includes(buttonText)) {
    firstOperand = numberString;
    numberString = 0;
    operatorInput = true;
  } else if (Number(buttonText) && operatorInput == true) {
    s;
  }
};

const Calculate = function (firstOperand, secondOperand) {};

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    buttonText = event.target.innerText;
    console.log(buttonText);
    inputProcessor(buttonText);
    displayCalc(numberString);
  });
});
