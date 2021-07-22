const button= document.getElementById("open-nav-button");
const cube= document.getElementById("nav-button");
const circle= document.getElementById("circle-button");
const menu=document.getElementById("mobile-menu");
let menuopen=false;

button.addEventListener("mouseup",function(){
    console.log("---------------------")
    console.log("touchend event")
    const current=menuopen;
    if(current) {
        closeMenu();
        console.log("current is: "+current);
        console.log("menuopne is:"+menuopen);
    }
    if(!current){
        openMenu();
        console.log("current is: "+current);
        console.log("menuopne is:"+menuopen);
    }
})

function openMenu(e){
    console.log("open event")
    cube.style.width="50px";
    cube.style.height="50px";
    circle.style.width="60px";
    circle.style.height="60px";
    menu.style.transform="translate(60px,60px) scale(1)";
    menuopen=true;
}

function closeMenu(e){
    console.log("close event")
    cube.style.width="35px";
    cube.style.height="35px";
    circle.style.width="45px";
    circle.style.height="45px";
    menu.style.transform="translate(-50px,-80px) scale(0)";
    menuopen=false;
}

export {openMenu, closeMenu, menuopen}