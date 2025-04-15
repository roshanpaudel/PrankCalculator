let buttonText = null;
let displayText = 0;

const buttons = document.querySelectorAll("button");
console.log(buttons);

// const displayCalc = function(buttonText){
//     document.getElementsByClassName("display")
// }
buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    buttonText = event.target.textContent;
    console.log(buttonText);

  });
});
