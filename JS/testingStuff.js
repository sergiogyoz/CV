function changetitles(title) {
    var mainTitle=document.getElementById("main-title");
    var headerTitle=document.getElementsByTagName("h1");  
    mainTitle.textContent=title;
    headerTitle[0].textContent=title;
}

function navbarbehavior(){
    var mainTitle=document.getElementById("main-title");
    mainTitle.classList.add("main-title-fixed");
    /*mainTitle.style.position="fixed";
    mainTitle.style.bottom="initial";
    mainTitle.style.top="0px";
    alert(mainTitle.className);*/
}

class Section{
    constructor(title, content){this.title=title;   this.content=content;}
    
    toString() {
        return (this.title+":  \n"+this.content);
    }
}

function addSection(Section) {
    var sections=document.getElementById("sections");
    console.log(sections.className);
    var snode= document.createElement("div");
    snode.classList.add("section");
    snode.id="crazy-section";
    var t=document.createElement("h2");
    t.append(document.createTextNode(Section.title));
    var c=document.createElement("p");
    c.append(document.createTextNode(Section.content));
    snode.append(t);
    snode.append(c);
    sections.append(snode);
}


window.onload=function () {
    changetitles("Sergio Villamarin");
    navbarbehavior();
    /*testing objects*/
    let x=new Section("mis cositas","Aqui va una detallada explicacion de mis cositas");
    /*testing tree transversing*/
    addSection(x);
    addSection( new Section("La chutengcia","Cosas geomorfologas de GIS, el Lidar del geodolito nos permite hacer un paralaje inesperado y scientifico") );


}

