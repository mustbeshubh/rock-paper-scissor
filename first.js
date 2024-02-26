let userscore = 0;
let compscore = 0;

const choices =document.querySelectorAll(".choice");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () =>{
    const options = ["rock" ,"paper", "scissors"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
}
const mssg = document.querySelector("#mssg");

const drawgame =()=>{
    // console.log("game was draw");
    mssg.innerText = ("it was a draw. play again");
    mssg.style.backgroundColor = "black";
};

const showinner = (userwin,userChoice,compchoice)=>{
    if (userwin){
        userscore++;
        userscorepara.innerText = userscore;
        // console.log("you win");
mssg.innerText = `you win! your ${userChoice} beats ${compchoice}`;
mssg.style.backgroundColor = "green";

    }else{
        compscore++;
        compscorepara.innerText = compscore;
        // console.log("you lose");
        mssg.innerText =`you lose!  ${compchoice} beats your ${userChoice}`
        mssg.style.backgroundColor = "red";
    }
};

const playgame = (userChoice) =>{
    console.log("YOU HAVE SELECTED" , userChoice);
// generate computer choice => modular
const compchoice = gencompchoice();
console.log("COMP HAS SELECTED", compchoice);

if(userChoice===compchoice){
drawgame();
} else{
    let userwin = true;
    if(userChoice==="rock"){
        userwin =compchoice==="paper" ?false:true;
        // paper , scissors
    }else if (userChoice==="paper"){
        userwin = compchoice==="rock"?true:false;
        // rock , scissors
    }else{
        // paper, rock
        userwin =compchoice ==="paper"?true:false;
    }
    showinner(userwin,userChoice,compchoice);
}
}
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
playgame(userChoice);
    })
})