
//navigation transition effect
const nav=document.getElementsByTagName("nav")[0];
let lineon=false;
window.addEventListener("scroll", function(){
    if( !lineon && window.pageYOffset>150){
        nav.classList.add("transition");
        lineon= true;
    }
    if( lineon && window.pageYOffset<150){
        nav.classList.remove("transition");
        lineon= false;
    }
})

//