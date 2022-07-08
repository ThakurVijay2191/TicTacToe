let music = new Audio("music.mp3");
let Gameturn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false

//function to change the turn
const changeTurn = () => {

    return turn === "X" ? "0" : "X"
}

//function to checkWin

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== '')) {
            document.querySelector(".turn").innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "75%"
        }
    })

}

//Game Logic Start
music.play();

let boxes = document.getElementsByClassName("box")

Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener("click", () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            Gameturn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("turn")[0].innerText = "Turn For " + turn

            }
        }
    })
})

//add onclick listener on reset button

reset.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    })
    turn = "X"
    isgameover = false;
    document.getElementsByClassName("turn")[0].innerText = "Turn For " + turn
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0"

})