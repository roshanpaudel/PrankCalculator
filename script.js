let buttonText = null;
let displayString = "";
let operators = ["+", "-", "/", "*", "%"];
let lastOperator = "";
let hitEquals = false;
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
  if (displayString === "134") {
    display.innerText = "I ❤︎ you";
    display.style.backgroundColor = "red";
    display.style.color = "white";
    return;
  }
  display.innerText = displayString;
};

const deleteLast = function (str) {
  displayString = str.slice(0, -1);
};

//resets the input after equal is clicked when user inputs number
const equalsClicked = function () {
  if (hitEquals == true) {
    displayString = "";
    hitEquals = false;
  }
};

const inputProcessor = function (buttonText) {
  if (buttonText === "0" || !isNaN(buttonText)) {
    if (displayString[0] === "0") {
      deleteLast(displayString);
    }
    equalsClicked();
    displayString += buttonText;
  } else if (buttonText === "AC") {
    displayString = "0";
    lastOperator = "";
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
    hitEquals = false;
    lastOperator = buttonText;
    displayString += buttonText;
  } else if (buttonText === "=") {
    if (operators.includes(displayString.slice(-1))) {
      deleteLast(displayString);
    }
    hitEquals = true; //to reset new calculation afterwards
    displayString = eval(displayString).toString();
  } else if (buttonText === ".") {
    let lastStr = displayString.slice(displayString.indexOf(lastOperator));
    console.log(lastStr);
    if (displayString.includes(".") && !lastOperator) return;
    if (lastStr.includes(".")) return;

    hitEquals = false;
    displayString += buttonText;
  }
};
