class Section{
    constructor(title, content){this.title=title;   this.content=content;}
    
    toString() {
        return (this.title+":  \n"+this.content);
    }
}

function addSection(Section) {
    var sections=document.getElementById("sections");
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


function clickOnSections() {
    var sections=document.getElementsByClassName("section");
    for (let i=0; i < sections.length; i++) {
        sections[i].addEventListener("click",function () {sections[i].classList.add("darken"); } )
    }
}



window.onload=function () {
    /*testing objects*/
    let x=new Section("mis cositas","Aqui va una detallada explicacion de mis cositas");
    /*testing tree transversing*/
    addSection(x);
    addSection( new Section("La chutengcia","Cosas geomorfologas de GIS, el Lidar del geodolito nos permite hacer un paralaje inesperado y scientifico") );
    clickOnSections();
}