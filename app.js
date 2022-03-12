let Computer_Choose = document.getElementById("computer-choose");
let User_Choose = document.getElementById("user-choose");
let Result = document.getElementById("result");

let possibleChooses = document.querySelectorAll("button");

let userChooses;
let computerChoose;
let result;

possibleChooses.forEach((possibleChoose) =>
  possibleChoose.addEventListener("click", (e) => {
    userChooses = e.target.id;
    // console.log(userChooses);
    User_Choose.innerHTML = userChooses;

    generateComputerChoice();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
//   console.log(randomNumber);

  if (randomNumber === 1) {
    computerChoose = "Rock";
  } else if (randomNumber === 2) {
    computerChoose = "Scissor";
  } else {
    computerChoose = "Paper";
  }

  Computer_Choose.innerHTML = computerChoose;
}

function getResult() {
  if (computerChoose === userChooses) {
    result == "Its draw !";
  }
  if (computerChoose === "Rock" && userChooses === "Paper") {
    result == "You Win!";
  } else if (computerChoose === "Rock" && userChooses === "Scissor") {
    result == "You lost!";
  } else if (computerChoose === "Paper" && userChooses === "Scissor") {
    result == "You won!";
  } else if (computerChoose === "Paper" && userChooses === "Rock") {
    result == "You lost!";
  } else if (computerChoose === "Scissor" && userChooses === "paper") {
    result == "You lost!";
  } else if (computerChoose === "Scissor" && userChooses === "Rock") {
    result == "You won!";
  }
  Result.innerHTML=result;
  console.log(result);
}
