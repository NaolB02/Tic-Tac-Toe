let turn = "X";
let boxes = ['', '', '', '', '', '', '', '', ''];
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

function isNotOccupied(index) {
    if (boxes[index] != '') {
        return false
    }
    return true
}

function turnViewer() {
    document.getElementById("currentPlayer").innerHTML = turn;
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
            return true
        }
    }
    return false
}

function changeVisibility(id) {
    document.getElementById(id).style.visibility = "visible";
}


function play(index, id) {
    if (isNotOccupied(index)) {

        changeVisibility(id);
        boxes[index] = turn;

        if (turn == "X") {
            turn = "O";
        } else {
            turn = "X";
        }

        if (gameOver()) {
            if (turn == "X") {
                document.getElementById("winnerDisplay").innerHTML = "Congrats, O has won";
            } else {
                document.getElementById("winnerDisplay").innerHTML = "Congrats, X has won";
            }
        } else {
            turnViewer();
        }
    }
}

//event listeners
document.getElementById("box0").addEventListener("click", () => {
    let index = 0;
    let id = '';
    if (turn == "X") {
        id = "x--0";
    } else {
        id = "o--0";
    }
    play(index, id);
})

document.getElementById("box1").addEventListener("click", () => {
    let index = 1;
    let id = '';
    if (turn == "X") {
        id = "x--1";
    } else {
        id = "o--1";
    }
    play(index, id);
})

document.getElementById("box2").addEventListener("click", () => {
    let index = 2;
    let id = '';
    if (turn == "X") {
        id = "x--2";
    } else {
        id = "o--2";
    }
    play(index, id);
})

document.getElementById("box3").addEventListener("click", () => {
    let index = 3;
    let id = '';
    if (turn == "X") {
        id = "x--3";
    } else {
        id = "o--3";
    }
    play(index, id);
})

document.getElementById("box4").addEventListener("click", () => {
    let index = 4;
    let id = '';
    if (turn == "X") {
        id = "x--4";
    } else {
        id = "o--4";
    }
    play(index, id);
})

document.getElementById("box5").addEventListener("click", () => {
    let index = 5;
    let id = '';
    if (turn == "X") {
        id = "x--5";
    } else {
        id = "o--5";
    }
    play(index, id);
})

document.getElementById("box6").addEventListener("click", () => {
    let index = 6;
    let id = '';
    if (turn == "X") {
        id = "x--6";
    } else {
        id = "o--6";
    }
    play(index, id);
})

document.getElementById("box7").addEventListener("click", () => {
    let index = 7;
    let id = '';
    if (turn == "X") {
        id = "x--7";
    } else {
        id = "o--7";
    }
    play(index, id);
})

document.getElementById("box8").addEventListener("click", () => {
    let index = 8;
    let id = '';
    if (turn == "X") {
        id = "x--8";
    } else {
        id = "o--8";
    }
    play(index, id);
    console.log(boxes);
})

document.getElementById("reset").addEventListener("click", () => {
    location.reload();
})