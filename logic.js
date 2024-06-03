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
let d=document.querySelectorAll(".qw");
let userscore=0;
let compscore=0;

 const genCompChoice=()=>{
    //rock,paper,scissors
    const options=["rock","paper","scissors"];
    let ind= Math.floor(Math.random())*3;
    return options[ind];
 }

const playGame = (userchoice)=>{
    console.log("user choice=", userchoice);
    //Generate comp choice
    const compchoice=genCompChoice();
}

d.forEach((choice)=>{
    choice.addEventListener(("click"),()=>{
        const userchoice=choice.getAttribute("id");
        console.log("Choice was clicked", userchoice);
        playGame(userchoice);
    });
});