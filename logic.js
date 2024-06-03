let el=document.querySelector("#lo");
mode="light"
let m=el.addEventListener("click",()=>{
if(mode==="light")
    {
        mode="dark";
        document.querySelector("#lo").classList.add("dark")
        document.querySelector("#lo").classList.remove("light");
    }
else
{
    mode="light";
        document.querySelector("#lo").classList.add("light")
        document.querySelector("#lo").classList.remove("dark");
}
});