let turn = "X";
let boxes = ['', '', '', '', '', '', '', '', ''];
let gameStatus = true;
let playerX = 0;
let playerO = 0;
let draw = 0;
document.getElementById("playerX").innerHTML = playerX;
document.getElementById("draw").innerHTML = draw;
document.getElementById("playerO").innerHTML = playerO;
const winningCombs = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

//checks if a cell is occupied
function isNotOccupied(index) {
    if (boxes[index] != '') {
        return false
    }
    return true
}

//checks if every cell is occupied
function isFullyOccupied() {
    for (let i = 0; i < 9; i++) {
        if (boxes[i] == '') {
            return false
        }
    }
    return true
}

//adds event listener to each cell
function addHandler(j) {
    for (let i = 0; i < j; i++) {
        document.getElementById("box" + i).addEventListener("click", () => {
            play(indexId(i)[0], indexId(i)[1]);
        });
    }
}


// restarts a finished game
function playAgain() {
    boxes = ['', '', '', '', '', '', '', '', ''];
    gameStatus = true;
    document.getElementById("winnerDisplay").innerHTML = turn + "'s turn"
    for (let i = 0; i < 9; i++) {
        reverseChangeVisibility("x--" + i);
        reverseChangeVisibility("o--" + i);
    }

}

//views whose turn it is
function turnViewer() {
    document.getElementById("winnerDisplay").innerHTML = turn + "'s turn";
}


function similarityCheck(arr) {
    if ((boxes[arr[0]] == boxes[arr[1]]) && (boxes[arr[1]] == boxes[arr[2]]) && (boxes[arr[0]] != '')) {
        return true
    }
    return false
}

function gameOver() {
    for (let i = 0; i < 8; i++) {
        if (similarityCheck(winningCombs[i])) {
            gameStatus = false;
        }
    }

    if (!(gameStatus)) {
        if (turn == "X") {
            playerO += 1;
            document.getElementById("playerO").innerHTML = playerO;
            document.getElementById("winnerDisplay").innerHTML = "Congrats, O has won!!";
        } else {
            playerX += 1;
            document.getElementById("playerX").innerHTML = playerX;
            document.getElementById("winnerDisplay").innerHTML = "Congrats, X has won!!";
        }

    } else if (isFullyOccupied()) {
        draw += 1;
        document.getElementById("draw").innerHTML = draw;
        document.getElementById("winnerDisplay").innerHTML = "Draw Game.";

    } else {
        turnViewer();
    }

}

function changeVisibility(id) {
    document.getElementById(id).style.visibility = "visible";
}

function reverseChangeVisibility(id) {
    document.getElementById(id).style.visibility = "hidden";
}


function play(index, id) {
    if (isNotOccupied(index) && gameStatus) {

        changeVisibility(id);
        boxes[index] = turn;

        if (turn == "X") {
            turn = "O";
        } else {
            turn = "X";
        }

        gameOver();
    }
}

function indexId(num) {
    let index = num;
    let id = '';
    if (turn == "X") {
        id = "x--" + index;
    } else {
        id = "o--" + index;
    }

    return [index, id]
}

addHandler(9);

document.getElementById("reset").addEventListener("click", () => {
    location.reload();
})

document.getElementById("playagain").addEventListener("click", () => {
    playAgain();
})