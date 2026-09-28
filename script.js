let minimumNum = document.querySelector("#minNumber");
let maximumNum = document.querySelector("#maxNumber");
let result = document.querySelector("#message");
let btnGenerate = document.querySelector("#btn");

function generateNumber() {
  let minNum = Number(minimumNum.value);
  let maxNum = Number(maximumNum.value);

  if (minimumNum.value === "" && maximumNum.value === "") {
    result.textContent = "Please input the numbers first";
  } else if (minimumNum.value === "") {
    result.textContent = "Hey! input the minimum number";
  } else if (maximumNum.value === "")
    result.textContent = "Hey! input the maximum number";
  else if (minNum >= maxNum) {
    result.textContent = "Maximum must be greater than minimum";
  } else {
    let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

    result.textContent = "Random Number: " + randomNum + " 🎲";
  }
}

btnGenerate.addEventListener("click", generateNumber);

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    generateNumber();
  }
});
