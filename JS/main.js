const nav=document.getElementsByTagName("nav")[0];
const subnav=document.getElementById("subnav").firstElementChild.children;
const sections=document.getElementById("sections").children;
let lineon=false;
let currentsection;
const spositions=[0];

//find position of sections
for(let section of sections){
    const rect = section.getBoundingClientRect();
    const Top = window.pageYOffset;
    spositions.push(Top+(rect.top+rect.bottom)/2);
}

//current state updates from sudden load
updateSubnav();

//scrollevents
window.addEventListener("scroll", function(){
    //navigation transition effect when scroll down
    if( !lineon && window.pageYOffset>150){
        nav.classList.add("transition");
        lineon= true;
    }
    if( lineon && window.pageYOffset<150){
        nav.classList.remove("transition");
        lineon= false;
    }
    //subnavigation highlight subnav section
    updateSubnav()
})


function updateSubnav(){ //updates subnav
    for(let i=0; i<spositions.length-1;i++){
        console.log(subnav[i]);
        if(spositions[i]<=window.scrollY && window.scrollY<spositions[i+1]){
            console.log("hola")
            if(currentsection!=subnav[i]){
                try{
                    currentsection.firstElementChild.classList.remove("subcurrent");
                }
                catch(e){
                    if (!(e instanceof TypeError)) raise(e);
                }
                subnav[i].firstElementChild.classList.add("subcurrent");
                currentsection=subnav[i];
                console.log(subnav[i]);
            }
        }
    }
}
//getBoundingClientRect()