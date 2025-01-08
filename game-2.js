let boxes=document.querySelectorAll(".box");
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
resetbtn.addEventListener("click",resetGame);
