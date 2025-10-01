const boxes = document.querySelectorAll(".box");
const showTurn = document.querySelector(".turn");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");
const modeBTN = document.querySelector(".modeBTN");
const heading = document.querySelector(".heading");
const body = document.querySelector("body");
const main = document.querySelector(".main");
const ting = new Audio("Assets/audio/ting.mp3");
const congrats = new Audio("Assets/audio/congrats.mp3");
let turn = "X";
let gameOver = false;
let mode = "light";

const changeTurn = () => {
    turn = turn === "X" ? "O" : "X";
};

const resetClick = () => {
    boxes[0].innerText = ""
    boxes[1].innerText = ""
    boxes[2].innerText = ""
    boxes[3].innerText = ""
    boxes[4].innerText = ""
    boxes[5].innerText = ""
    boxes[6].innerText = ""
    boxes[7].innerText = ""
    boxes[8].innerText = ""
}

showTurn.innerText += `: X`

const modeChange = () => {
    if (mode === "light") {
        mode = "dark"
        heading.style.background = "#eceaea";
        heading.style.color = "#706c61";
        reset.style.background = "#f8f1f1"
        reset.style.color = "#5a615b"
        modeBTN.style.background = "#f8f1f1"
        modeBTN.style.color = "#5a615b"
        result.style.background = "#f8f1f1"
        result.style.color = "#5a615b"
        showTurn.style.background = "#f8f1f1"
        showTurn.style.color = "#5a615b"
        body.style.background = "#727D73"
        main.style.background = "#BAD8B6"
        for (box of boxes) {
            box.style.background ="#000"
            box.style.color = "#D0DDD0"
            box.style.border = "2px solid #fdfdfd"
        }
    } else if (mode === "dark") {
        mode = "light"
        heading.style.background = "#706c61";
        heading.style.color = "#eceaea";
        reset.style.background = "#5a615b"
        reset.style.color = "#f8f1f1"
        modeBTN.style.background = "#5a615b"
        modeBTN.style.color = "#f8f1f1"
        result.style.background = "#5a615b"
        result.style.color = "#f8f1f1"
        showTurn.style.background = "#5a615b"
        showTurn.style.color = "#f8f1f1"
        body.style.background = "#BAD8B6"
        main.style.background = "#727D73"
        for (box of boxes) {
            box.style.background ="#D0DDD0"
            box.style.color = "#000"
            box.style.border = "2px solid #201f1e"
        }
    }
}


// making a simple 2D Array
let winPatterns = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [6, 4, 2],
];

modeBTN.addEventListener("click", () => {
    modeChange();
    ting.play();
})

reset.addEventListener("click", () => {
    resetClick();
    gameOver = false;
    turn = "X";
    result.innerText = "winner is:"
    showTurn.innerText = "Turn For: X"
    ting.play()
}); 

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "" && gameOver === false) {
            box.innerText = turn;
            checkWin();
            changeTurn();
            showTurn.innerText = `Turn for: ${turn}`;
            ting.play()
        }
    });
});

const checkWin = () => {
    for (pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                result.innerText += " " + pos1;
                gameOver = true;
                congrats.play()
            }
            
        }
    }
};