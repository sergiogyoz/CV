let sections=document.getElementById("sections");
let subnavlist=document.getElementById("subnav").children[0];

function addSection(fill_section_method, id, title, ...params) {

    const newsection= document.createElement("div");
    newsection.classList.add("section");
    newsection.id=id;

    if(params.length==1) //title and content only
        fill_section_method(newsection,title,params[0]);
    
    sections.append(newsection);

    const newli=document.createElement("li");
    const newa=document.createElement("a");
    newa.textContent=title;
    newa.setAttribute("href","#"+id);
    newli.append(newa);
    subnavlist.append(newli);

    clickEffectOnSections(newsection); //add click effects
}


function simpleContent(sectionNode, title, content) {
    const t=document.createElement("h2");
    t.textContent= title;
    sectionNode.append(t);

    const c=document.createElement("p");
    c.innerHTML= content;
    sectionNode.append(c);   
}


function clickEffectOnSections(section) {
    section.addEventListener("click",function () {section.classList.add("darken"); } );
}

export {addSection, simpleContent}