let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgcontainer = document.querySelector(".msgContainer");
const userscorep = document.querySelector("#userScore");
const compscorep = document.querySelector("#compScore");
const modebtn = document.querySelector(".changeMode");
const body = document.querySelector("body");
const h1 = document.querySelector(".heading");
const choice1 = document.querySelector(".choice_1");
const choice2 = document.querySelector(".choice_2");
const choice3 = document.querySelector(".choice_3");
const score = document.querySelectorAll(".score");
const score1 = document.querySelector(".score_1");
const score2 = document.querySelector(".score_2");
const resetBtn = document.querySelector(".resetBTN");
const userText = document.querySelector(".userText");
const compText = document.querySelector(".compText");
const Ting = new Audio("Assets/audio/Ting.mp3");
const Congrats = new Audio("Assets/audio/Congrats.mp3");
const GameOver = new Audio("Assets/audio/Game_over.mp3");


const gencomputerchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}


const drawgame = () => {
  msg.innerText = "its a draw. please play again";
  msg.style.backgroundColor = `yellow`; 
  
}

const showWinner = (userwin, userchoice, compChoice) => {
  if (userwin) {
    userscore++;
    userscorep.innerText = userscore; 
    msg.innerText = `you win your ${userchoice} beats ${compChoice}`
    msg.style.backgroundColor = "green"
    msg.style.color = "#fdf2f2";
    Congrats.play();
  } else {
    compscore++;
    compscorep.innerText = compscore;
    msg.innerText = `you lose ${compChoice} beats your ${userchoice}`
    msg.style.backgroundColor = "red"
    msg.style.color = "#fdf2f2";
    GameOver.play();
  }
};

resetBtn.addEventListener("click", () => {
  Ting.play();
    if (userscore === 0 && compscore === 0) {
        msg.innerText = "Game Is Already Reset, Play Your Move";
        if (mode === "light") {
            msg.style.backgroundColor = "#292727";
        } else  {
            msg.style.backgroundColor = "#fdf2f2";
        }
    }else {
        userscore = 0;
        compscore = 0;
        userscorep.innerText = userscore;
        compscorep.innerText = compscore;
        msg.innerText = "Game Reset, Play Your Move";
        if (mode === "light") {
          msg.style.backgroundColor = "#292727";
          msg.style.color = "#fdf2f2";
        } else  {
          msg.style.backgroundColor = "#fdf2f2";
          msg.style.color = "#292727";
        }
    }
});

const playgame =(userchoice) => {
    //generate computer choice
    const compChoice = gencomputerchoice();
    
    if (compChoice === userchoice){
    } else {
        let userwin = true;
        if (userchoice === "rock")  {
          //paper, scissor
          userwin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
          //rock, scissor
          userwin = compChoice === "scissor" ? false : true;
        } else if (userchoice === "scissor")  {
          userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin,userchoice, compChoice);
      } 
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);
        Ting.play();
    })
});     


let mode = "light";

modebtn.addEventListener("click", () => {
  Ting.play();
  if (mode === "light") {
    console.log("dark");
    mode = "dark";
    modebtn.innerText = "Change Mode To Light";
    body.style.backgroundColor = "#292727";
    modebtn.style.backgroundColor = "#fdf2f2";
    modebtn.style.color = "#292727";
    h1.style.backgroundColor = "#fdf2f2";
    h1.style.color = "#292727";
    resetBtn.style.backgroundColor = "#fdf2f2";
    resetBtn.style.color = "#292727";
    choices.forEach((choice) => {
      choice.style.backgroundColor = "#fdf2f2";
      choice.style.color = "#292727";
    });
    score.forEach((score) => {
      score.style.backgroundColor = "#fdf2f2";
      score.style.color = "#292727";
    });
    userText.style.backgroundColor = "#292727";
    userText.style.color = "#fdf2f2";
    compText.style.backgroundColor = "#292727";
    compText.style.color = "#fdf2f2";
    msg.style.backgroundColor = "#fdf2f2";
    msg.style.color = "#292727";  
    modebtn.style.border = "4px solid transparent";
    resetBtn.style.border = "4px solid transparent";
    choices.forEach((choice) => {
      choice.addEventListener("mouseover", () => {
        choice.style.backgroundColor = "#292727";
        choice.style.color = "#fdf2f2";
        choice.style.border = "6px solid #fdf2f2";
      });
      choice.addEventListener("mouseout", () => {
        choice.style.backgroundColor = "#fdf2f2";
        choice.style.color = "#292727";
        choice.style.border = "6px solid #292727";
      });
    });
    modebtn.addEventListener("mouseover", () => {
      modebtn.style.backgroundColor = "#292727";
      modebtn.style.color = "#fdf2f2";
      modebtn.style.border = "4px solid #fdf2f2";
    });
    modebtn.addEventListener("mouseout", () => {
      modebtn.style.backgroundColor = "#fdf2f2";
      modebtn.style.color = "#292727";
      modebtn.style.border = "4px solid transparent";
    });
  } else {
    console.log("light");
    mode = "light";
    modebtn.innerText = "Change Mode To Dark";
    body.style.backgroundColor = "#fdf2f2";
    modebtn.style.backgroundColor = "#292727";
    modebtn.style.color = "#fdf2f2";
    h1.style.backgroundColor = "#292727";
    h1.style.color = "#fdf2f2";
    resetBtn.style.backgroundColor = "#292727";
    resetBtn.style.color = "#fdf2f2";
    choices.forEach((choice) => {
      choice.style.backgroundColor = "#292727";
      choice.style.color = "#fdf2f2";
    });
    score.forEach((score) => {
      score.style.backgroundColor = "#292727";
      score.style.color = "#fdf2f2";
    });
    userText.style.backgroundColor = "#fdf2f2";
    userText.style.color = "#292727";
    compText.style.backgroundColor = "#fdf2f2";
    compText.style.color = "#292727";
    msg.style.backgroundColor = "#292727";
    msg.style.color = "#fdf2f2";
    modebtn.style.border = "4px solid transparent";
    resetBtn.style.border = "4px solid transparent";
    choices.forEach((choice) => {
      choice.addEventListener("mouseover", () => {
        choice.style.backgroundColor = "#fdf2f2";
        choice.style.color = "#292727";
        choice.style.border = "6px solid #292727";
      });
      choice.addEventListener("mouseout", () => {
        choice.style.backgroundColor = "#292727";
        choice.style.color = "#fdf2f2";
        choice.style.border = "6px solid #fdf2f2";
      });  
    });
    modebtn.addEventListener("mouseover", () => {
      modebtn.style.backgroundColor = "#fdf2f2";
      modebtn.style.color = "#292727";
      modebtn.style.border = "4px solid #292727";
    });
    modebtn.addEventListener("mouseout", () => {
      modebtn.style.backgroundColor = "#292727";
      modebtn.style.color = "#fdf2f2";
      modebtn.style.border = "4px solid transparent ";
    });
  }
});