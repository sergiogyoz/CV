let sections=document.getElementById("sections");
let subnavlist=document.getElementById("subnav").children[0];

function addSection(section_method, id, title, ...params) {

    const newsection= document.createElement("div");
    newsection.classList.add("section");
    newsection.id=id;

    if(params.length==1) //title and content only
        section_method(newsection,title,params[0]);
    
    sections.append(newsection);

    const newli=document.createElement("li");
    const newa=document.createElement("a");
    newa.textContent=title;
    newa.setAttribute("href","#"+id);
    newli.append(newa);
    subnavlist.append(newli);

    clickEffectOnSections(newsection); //add click effects
}


function simpleContent(sectionNode, title, htmlcontent) {
    const t=document.createElement("h2");
    t.textContent= title;
    sectionNode.append(t);

    const c=document.createElement("p");
    c.innerHTML= htmlcontent;
    sectionNode.append(c);   
}


function clickEffectOnSections(section) {
    section.addEventListener("click",function () {section.classList.add("darken"); } );
}

function addSectionsFromJSON(url, section_method){
    const request= new XMLHttpRequest(); 
    request.onload=function () {
        let obj=JSON.parse(request.responseText);
        for(var i=0; i<3; i++){
            let section= obj.sections[i];
            addSection(section_method, section.id, section.title, section.content);
        }
    }
    request.open("GET", url);
    request.send();   
}






export {simpleContent, addSectionsFromJSON, addSection}