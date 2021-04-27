function changetitles(title) {
    var mainTitle=document.getElementById("main-title");
    var headerTitle=document.getElementsByTagName("h1");
    var titulo="Sergio Villamarin";   
    mainTitle.textContent=titulo;
    headerTitle[0].textContent=titulo;
}

function navbarbehavior(){
    var mainTitle=document.getElementById("main-title");
    mainTitle.classList.add("main-title-fixed");
    /*mainTitle.style.position="fixed";
    mainTitle.style.bottom="initial";
    mainTitle.style.top="0px";*/
    alert(mainTitle.className);
    
}

window.onload=function () {
    changetitles("");
    navbarbehavior();
}

