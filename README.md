<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac game</title>
    <style>
      *{
    margin: 0;
    padding: 0;
}
body{
    background-color:pink;
    text-align: center;
}
.container{
    height:70vh;
    display: flex;
    /* flex-wrap:wrap; */
    justify-content:center;
    align-items: center;
    /* gap:1.5vmin; */
}
.game{
    height:60vmin ;
    width:60vmin ;
    display: flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    gap:1.5vmin;

}
.box{
    height:18vmin ;
    width:18vmin;
    border-radius: 1rem;
    border: none;
    box-shadow:00 1rem rgba(0,0,0,0.3);
    font-size:8vmin;
    color: red;
    background-color: black;
}
#reset-btn{
    padding:1rem;
    font-size:1.25rem ;
    background-color: black;
    color: white;
    border-radius: 1 rem;
    border: none;
}
#new-btn{
    padding:1rem;
    font-size:1.25rem ;
    background-color: black;
    color: white;
    border-radius: 1 rem;
    border: none;
}
#msg{
    color:#ffffc7;
    font-size:8vmin;
}
.msg-container{
    height:100vmin;
    display: flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    gap:4rem;

}
.hide{
    display: none;
}
    </style>
</head>
<body>
    <div class="msg-container hide" >
        <p id="msg">Winner</p>
        <button id="new-btn">New Game</button>
        </div>
    <main>
    <h1>Tic-Tac-Toe</h1>
    <div class="container">
    <div class="game">
        <button class="box"></button>
        <button class="box"></button>
        <button class="box"></button>
        <button class="box"></button>
        <button class="box"></button>
        <button class="box"></button>
        <button class="box"></button>
        <button class="box"></button>
        <button class="box"></button>
    </div>
    </div>
    <button id="reset-btn">Reset game</button>
    </main>
    <script>let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn =document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg");
let turno=true;  //playerX,playerY
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turno=true;
    enabledboxes();
    msgContainer.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turno){
            box.innerText="o";
            turno=false;
        }else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
      checkwin();
    })
});
const disableboxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};
const enabledboxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText=" "
    }
}
const showwin=(winner)=>{
    msg.innerText=`Congratulations! ,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();

};
const checkwin=()=>{
  for(let pattern of winPattern)  {
   // console.log(pattern);
    let pos0Val=boxes[pattern[0]].innerText;
    let pos1Val=boxes[pattern[1]].innerText;
    let pos2Val=boxes[pattern[2]].innerText;

    if(pos1Val !=""&& pos2Val !="" && pos0Val !=""  ) {
        if(pos1Val===pos2Val && pos2Val=== pos0Val){
            console.log("Winner",pos1Val);

            showwin(pos1Val);
        }
    }
   }
 };
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame); </script>
</body>
</html>
