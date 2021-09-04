//import all the basic logic
await import("./main.js");

//CVs pdf expand iframe animation
let showbutton=document.getElementsByClassName("show");
for(let i=0; i<showbutton.length;i++){
    showbutton[i].addEventListener("click", function(){
        let expandable=this.nextElementSibling;
        if(this.textContent=="[show]"){
            this.textContent="[hide]";
            expandable.style.height="600px";
        }
        else 
        {
            this.textContent="[show]";
            expandable.style.height="0px";
        }
    })
}
