let checkBtn = document.querySelector(".check");
let showBtn = document.querySelector(".show");
let clearBtn = document.querySelector(".clear");

let everyCell = document.querySelectorAll("table input");

let inputsBand = document.querySelectorAll(".band input");
let answerBand = document.querySelectorAll(".band .answer");
let yourAnswerDivBand = document.querySelectorAll(".band .inputed");

let allInputs = document.querySelectorAll(".inputing");
let allAnswersDiv = document.querySelectorAll(".checked");

let inputsFreq = document.querySelectorAll(".freq input");
let answerFreq = document.querySelectorAll(".freq .answer");
let yourAnswerDivFreq = document.querySelectorAll(".freq .inputed");

let inputsWave = document.querySelectorAll(".wave input");
let answerWave = document.querySelectorAll(".wave .answer");
let yourAnswerDivWave = document.querySelectorAll(".wave .inputed");

let inputsApp = document.querySelectorAll(".app input");
let answerApp = document.querySelectorAll(".app .answer");
let yourAnswerDivApp = document.querySelectorAll(".app .inputed");

checkBtn.onclick = function () {
  everyCell.forEach((cell) => {
    if (cell.value != "") {
      allInputs.forEach((input) => {
        input.style.display = "none";
      });
      allAnswersDiv.forEach((div) => {
        div.style.display = "block";
      });

      inputsBand.forEach((input) => {
        answerBand.forEach((answer) => {
          if (input.value != "") {
            if (answer.dataset.order == input.dataset.order) {
              yourAnswerDivBand.forEach((div) => {
                if (div.dataset.order == input.dataset.order) {
                  div.innerHTML = input.value;
                }
              });
            }
            if (
              document
                .querySelector(
                  `.band .answer[data-order="${input.dataset.order}"]`
                )
                .textContent.toLowerCase()
                .split(" ")
                .join("") == input.value.toLowerCase().split(" ").join("")
            ) {
              document.querySelector(
                `.band .answer[data-order="${input.dataset.order}"]`
              ).parentElement.children[3].style.display = "none";
              document.querySelector(
                `.band .answer[data-order="${input.dataset.order}"]`
              ).parentElement.children[2].style.display = "block";
            } else {
              document.querySelector(
                `.band .answer[data-order="${input.dataset.order}"]`
              ).parentElement.children[2].style.display = "none";
              document.querySelector(
                `.band .answer[data-order="${input.dataset.order}"]`
              ).parentElement.children[3].style.display = "block";
            }
          } else {
            document.querySelector(
              `.band .answer[data-order="${input.dataset.order}"]`
            ).parentElement.children[2].style.display = "none";
            document.querySelector(
              `.band .answer[data-order="${input.dataset.order}"]`
            ).parentElement.children[3].style.display = "block";
          }
        });
      });

      inputsFreq.forEach((input) => {
        answerFreq.forEach((answer) => {
          if (input.value != "") {
            if (answer.dataset.order == input.dataset.order) {
              yourAnswerDivFreq.forEach((div) => {
                if (div.dataset.order == input.dataset.order) {
                  div.innerHTML = input.value;
                }
              });
            }
            if (
              document
                .querySelector(
                  `.freq .answer[data-order="${input.dataset.order}"]`
                )
                .textContent.toLowerCase()
                .split(" ")
                .join("") == input.value.toLowerCase().split(" ").join("")
            ) {
              document.querySelector(
                `.freq .answer[data-order="${input.dataset.order}"]`
              ).parentElement.children[5].style.display = "none";
              document.querySelector(
                `.freq .answer[data-order="${input.dataset.order}"]`
              ).parentElement.children[4].style.display = "block";
            } else {
              document.querySelector(
                `.freq .answer[data-order="${input.dataset.order}"]`
              ).parentElement.children[4].style.display = "none";
              document.querySelector(
                `.freq .answer[data-order="${input.dataset.order}"]`
              ).parentElement.children[5].style.display = "block";
            }
          } else {
            document.querySelector(
              `.freq .answer[data-order="${input.dataset.order}"]`
            ).parentElement.children[4].style.display = "none";
            document.querySelector(
              `.freq .answer[data-order="${input.dataset.order}"]`
            ).parentElement.children[5].style.display = "block";
          }
        });
      });

      inputsWave.forEach((input) => {
        answerWave.forEach((answer) => {
          if (input.value != "") {
            if (answer.dataset.order == input.dataset.order) {
              yourAnswerDivWave.forEach((div) => {
                if (div.dataset.order == input.dataset.order) {
                  div.innerHTML = input.value;
                }
              });
            }
            if (
              document
                .querySelector(
                  `.wave .answer[data-order="${input.dataset.order}"]`
                )
                .textContent.toLowerCase()
                .split(" ")
                .join("") == input.value.toLowerCase().split(" ").join("")
            ) {
              document.querySelector(
                `.wave .answer[data-order="${input.dataset.order}"]`
              ).parentElement.children[5].style.display = "none";
              document.querySelector(
                `.wave .answer[data-order="${input.dataset.order}"]`
              ).parentElement.children[4].style.display = "block";
            } else {
              document.querySelector(
                `.wave .answer[data-order="${input.dataset.order}"]`
              ).parentElement.children[4].style.display = "none";
              document.querySelector(
                `.wave .answer[data-order="${input.dataset.order}"]`
              ).parentElement.children[5].style.display = "block";
            }
          } else {
            document.querySelector(
              `.wave .answer[data-order="${input.dataset.order}"]`
            ).parentElement.children[4].style.display = "none";
            document.querySelector(
              `.wave .answer[data-order="${input.dataset.order}"]`
            ).parentElement.children[5].style.display = "block";
          }
        });
      });

      inputsApp.forEach((input) => {
        answerApp.forEach((answer) => {
          if (input.value != "") {
            if (answer.dataset.order == input.dataset.order) {
              yourAnswerDivApp.forEach((div) => {
                if (div.dataset.order == input.dataset.order) {
                  div.innerHTML = input.value;
                }
              });
            }
            if (
              document
                .querySelector(
                  `.app .answer[data-order="${input.dataset.order}"]`
                )
                .textContent.toLowerCase()
                .split(" ")
                .join("") == input.value.toLowerCase().split(" ").join("")
            ) {
              document.querySelector(
                `.app .answer[data-order="${input.dataset.order}"]`
              ).parentElement.children[3].style.display = "none";
              document.querySelector(
                `.app .answer[data-order="${input.dataset.order}"]`
              ).parentElement.children[2].style.display = "block";
            } else {
              document.querySelector(
                `.app .answer[data-order="${input.dataset.order}"]`
              ).parentElement.children[2].style.display = "none";
              document.querySelector(
                `.app .answer[data-order="${input.dataset.order}"]`
              ).parentElement.children[3].style.display = "block";
            }
          } else {
            document.querySelector(
              `.app .answer[data-order="${input.dataset.order}"]`
            ).parentElement.children[2].style.display = "none";
            document.querySelector(
              `.app .answer[data-order="${input.dataset.order}"]`
            ).parentElement.children[3].style.display = "block";
          }
        });
      });
    }
  });
};

showBtn.onclick = function () {
  allInputs.forEach((input) => {
    input.style.display = "none";
  });
  allAnswersDiv.forEach((div) => {
    div.style.display = "block";
  });
  everyCell.forEach((cell) => {
    cell.value = "";
  });
};

clearBtn.onclick = function () {
  everyCell.forEach((cell) => {
    cell.value = "";
  });
  let allTrFa = document.querySelectorAll(".right , .wrong");
  let inputed = document.querySelectorAll(".inputed");
  inputed.forEach((input) => {
    input.innerHTML = "";
  });
  allTrFa.forEach((trFa) => {
    trFa.style.display = "none";
  });
  allInputs.forEach((input) => {
    if (input.style.display == "none") {
      allInputs.forEach((input) => {
        input.style.display = "block";
      });
      allAnswersDiv.forEach((div) => {
        div.style.display = "none";
      });
    }
  });
};
