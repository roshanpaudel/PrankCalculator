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

const appendInput = function (str1, str2) {
  if (str1 == 0) {
    console.log(eval(str1 + str2));
    return eval(str1 + str2);
  } else {
    return (str1 += str2);
  }
};

const inputProcessor = function (buttonText) {
  if (Number(buttonText)) {
    displayString = appendInput(displayString, buttonText);
    evalString = appendInput(evalString, buttonText);
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
    evalString = result;
    displayString = result;
  }
};

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    buttonText = event.target.innerText;
    console.log(buttonText);
    inputProcessor(buttonText);
    displayCalc(displayString);
  });
});
