


function changetitles(title) {
    var mainTitle=document.getElementById("main-title");
    var headerTitle=document.getElementsByTagName("h1");
    var titulo="Sergio Villamarin";   
    mainTitle.textContent=titulo;
    headerTitle[0].textContent=titulo;
}

window.onload=function () {
    changetitles("");
}



