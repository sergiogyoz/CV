const button= document.getElementById("open-nav-button");
const cube= document.getElementById("nav-button");
const circle= document.getElementById("circle-button");
const menu=document.getElementById("mobile-menu");
const html_obj= document.getElementsByTagName("html")[0];
let menuopen=false;


html_obj.addEventListener("mouseup", function(){
    console.log("---------------------")
    console.log("touch outside menu")
    if(menuopen) closeMenu();
})

button.addEventListener("mouseup",function(e){ //handle menu button click event
    console.log("---------------------")
    console.log("touch end menu event")
    e.stopPropagation();
    const current=menuopen;
    if(current) {
        closeMenu();
    }
    if(!current){
        openMenu();
    }
})

function openMenu(e){
    console.log("open menu event")
    cube.style.width="50px";
    cube.style.height="50px";
    circle.style.width="60px";
    circle.style.height="60px";
    menu.style.transform="translate(60px,60px) scale(1)";
    menuopen=true;
}

function closeMenu(e){
    console.log("close menu event")
    cube.style.width="35px";
    cube.style.height="35px";
    circle.style.width="45px";
    circle.style.height="45px";
    menu.style.transform="translate(-50px,-80px) scale(0)";
    menuopen=false;
}

export {openMenu, closeMenu, menuopen}