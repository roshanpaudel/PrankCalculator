let buttonText = null;
let displayText = 0;
let numberString = 0;

const buttons = document.querySelectorAll("button");
console.log(buttons);

const displayCalc = function (numberString) {
  const display = document.getElementById("display");
  display.innerText = numberString;
};

const numberAppend = function (buttonText) {
  if (Number(buttonText)) {
    numberString += buttonText;
    console.log(numberString);
  } else if ((buttonText = "AC")) {
    numberString = 0;
  }
};

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    buttonText = event.target.innerText;
    console.log(buttonText);
    numberAppend(buttonText);
    displayCalc(numberString);
  });
});
