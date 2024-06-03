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
// let t=document.querySelector("#we");
// let y=document.querySelector("#zx");
// let u=document.querySelector("#bn");
// let r=addEventListener("click",()=>{
// });