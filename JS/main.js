let mqScreenSize = window.matchMedia("(min-width: 1080px)");

if(mqScreenSize.matches) console.log("PS screen");
else console.log("phone/tablet Screen");

mqScreenSize.addEventListener("change",ScreenSizeChanged)

import { topMenuTransitionEffect, updateSubnav} from "./PC.js"
import * as mobile from "./mobile.js" 

function ScreenSizeChanged(e){
    if(e.matches){
        updateSubnav();
    }
    else{

    }
}

//scrollevents
window.addEventListener("scroll", function(){
    
    if(mqScreenSize.matches){//Big Screen behaviour
        topMenuTransitionEffect();
        updateSubnav();
    }
    else{//Small Screen behaviour

    }
    //subnavigation highlight subnav section

})


