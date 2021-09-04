let mqScreenSize = window.matchMedia("(min-width: 1080px)");

if(mqScreenSize.matches){
    console.log("PC screen");
    await import("./PC.js");
}
else{
    console.log("phone/tablet Screen");
    await import("./mobile.js");
}

mqScreenSize.addEventListener("change",ScreenSizeChanged)
//Function that handles when the screen size changed
function ScreenSizeChanged(e){
    if(e.matches){//to PC
        console.log("loading PC version");
        (async()=>{await import("./PC.js");})();
    }
    else{//to mobile
        console.log("loading mobile version");
        (async()=>{await import("./mobile.js");})();
    }
}






