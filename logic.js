let userScore=0;
let compScore=0;
let el=document.querySelector("#lo");
let h=document.querySelector("body");
mode="light"
let m=el.addEventListener("click",()=>{
if(mode==="light")
    {
        mode="dark";
        h.classList.add("dark")
        h.classList.remove("light");
    }
else
{
    mode="light";
        h.classList.add("light")
        h.classList.remove("dark");
}
});
let d=document.querySelectorAll(".choice");
let userscore=0;
let compscore=0;

 const genCompChoice=()=>{
    //rock,paper,scissors
    const options=["rock","paper","scissors"];
    let ind= Math.floor(Math.random()*3);
    return options[ind];
 };

const draw=()=>{
    console.log("Game was draw");

};
let userScorePara=document.querySelector("#jh");
let compScorePara=document.querySelector("po");

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
  };

const playGame = (userchoice)=>{
    console.log("user choice=", userchoice);
    //Generate comp choice
    const compchoice=genCompChoice();
    console.log(compchoice);
    if(userchoice===compchoice)
        {
            //draw
            draw();
        }
    else
    {
        let userwin=true;
        if(userchoice==="we")
            {
                compchoice==="paper"?false:true;
            }
        else if(userchoice==="zx")
        {
            compchoice==="rock"?true:false;
        }
        else
        {
            compchoice==="rock"?true:false;
        }
        showWinner(userwin,userchoice,compchoice);
    }
    
};

d.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});