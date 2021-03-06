const nav=document.getElementById("menu");
const subnav=document.getElementById("subnav").firstElementChild.children;
const sections=document.getElementById("sections").children;
const header= document.getElementById
const spositions=[0];
let currentsection;

let lineon=false;


for(let section of sections){ //find position of sections
    const rect = section.getBoundingClientRect();
    const Top = window.pageYOffset;
    spositions.push(Top+(rect.top+rect.bottom)/2);
}


updateSubnav();

window.addEventListener("scroll", function(){ //page scroll events
        topMenuTransitionEffect();
        updateSubnav();
})


function topMenuTransitionEffect(){ //Shadow effect on TopMenu
    if( !lineon && window.pageYOffset>250){
        nav.classList.add("transition");
        lineon = true;
    }
    if( lineon && window.pageYOffset<250){
        nav.classList.remove("transition");
        lineon = false;
    }
}

function updateSubnav(){ //updates subnav
    for(let i=0; i<spositions.length-1;i++){
        if(spositions[i]<=window.scrollY && window.scrollY<spositions[i+1]){
            if(currentsection!=subnav[i]){
                try{
                    currentsection.firstElementChild.classList.remove("subcurrent");
                }
                catch(e){
                    if (!(e instanceof TypeError)) raise(e);
                }
                subnav[i].firstElementChild.classList.add("subcurrent");
                currentsection=subnav[i];
            }
        }
    }
}

export {topMenuTransitionEffect, updateSubnav}