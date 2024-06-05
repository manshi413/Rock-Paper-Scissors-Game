let userScore=0;
let compScore=0;
let userScorePara=document.querySelector("#button1");
let compScorePara=document.querySelector("#button2");
let msg=document.querySelector("#yp");
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


 const genCompChoice=()=>{
    //rock,paper,scissors
    const options=["rock","paper","scissors"];
    let ind= Math.floor(Math.random()*3);
    return options[ind];
 };

const draw=()=>{
  msg.innerText = "It was Draw!";
  msg.style.backgroundColor = "#081b31";

};

const showWinner = (userwin, userChoice, compChoice) => {
    if (userwin) {
      userScore++;
      userScorePara.innerText = userScore;
      msg.innerText = `You won!`;
      msg.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = `You lost!`;
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
        if(userchoice=="we")   //Rock
            {
                compchoice=="paper"?false:true;
            }
        else if(userchoice=="zx")    //Paper
        {
            compchoice=="rock"?true:false;
        }
        else     //Scissors
        {
            compchoice=="rock"?false:true;
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