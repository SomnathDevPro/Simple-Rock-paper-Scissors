const userSprite = document.getElementById('user');
const robotSprite = document.getElementById('robot');
userSprite.setAttribute("state", "rock")
robotSprite.setAttribute("state", "rock")
let currentUserState = userSprite.getAttribute("state")
let currentRobotState = robotSprite.getAttribute("state")
const userScore = document.getElementById('user-score');
const robotScore = document.getElementById("robot-score");
let currentUserScore = 0;
let currentRobotScore = 0;

function rock() {
  userSprite.src = "rock(user).png";
  game()
}

function paper() {
  userSprite.src = "paper(user).png";
  currentUserState = "paper";
  game()
}

function scissor() {
  userSprite.src = "scissor(user).png";
  currentUserState = "scissor";
  game()
}

function game() {
  const randNum = Math.floor(Math.random() * 3);
  const robotOutputs = ["scissor.png", "paper.png", "rock.png"];
  robotSprite.src = robotOutputs[randNum];
  if (randNum === 0) {
    currentRobotState = "scissor"
  } else if (randNum === 1) {
    currentRobotState = "paper";
  } else {
    currentRobotState = "rock"
  }
  console.log(currentRobotState)
  checkWinner()
}

function checkWinner() {
  if (currentUserState !== currentRobotState) {
    if ((currentUserState === "paper" &&  currentRobotState === "rock") || (currentUserState==="scissor" && currentRobotState==="paper") || (currentUserState==="rock" && currentRobotState==="scissor")) {
      currentUserScore++;
      userScore.innerHTML=`user:${currentUserScore}`;
    }else{
      currentRobotScore++;
      robotScore.innerHTML=`robot:${currentRobotScore}`;
    }
  }
}