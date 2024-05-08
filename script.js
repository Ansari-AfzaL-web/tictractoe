let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#New-btn");
let msgContainer = document.querySelector(".msg-container");

let msg = document.querySelector("#msg");             
let turnO = true; //PlayerO, playerX
// let arr = ["apple", "banana", "lichi"];

//2D array
// let arr2 = [["apple", "lichi"],["potato", "mushroom"],["pants", "shirts"]];

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    //   console.log("box is clicked");
      if(turnO){
          box.innerText = "O";
          box.style.color = "black";
          turnO = false;
    }else{
        box.innerText = "X";
        box.style.color = "white";
        turnO = true;
    }

    box.disabled = true;

    checkWinner();
  });
});


const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for(let box of boxes){
        box.disabled = false; // Set disabled property to false to enable the box
        box.innerText = "";
    }
}


const showWinner = (winner) => {
    msg.innerText = "Congratulations! Player "+ winner +" wins!";
    msgContainer.classList.remove("hide");
    disabledBoxes();
};


const checkWinner = () => {
    for(let Pattern of winPatterns){
        // console.log(Pattern[0], Pattern[1], Pattern[2]);
        // console.log(boxes[Pattern[0]].innerText, boxes[Pattern[1]].innerText, boxes[Pattern[2]].innerText);

        let pos1Val = boxes[Pattern[0]].innerText;
        let pos2Val = boxes[Pattern[1]].innerText;
        let pos3Val = boxes[Pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};       
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

const count = () => {
    for(let box of boxes){
        count++;
        count.innerText = "match is draw";
    }
}