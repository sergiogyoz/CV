import * as sec from "./Sections.js"

let sectionidcount=0;

function SimpleSections() {
    const indexurl="./JSON/SimpleSections.json";
    sec.addSectionsFromJSON(indexurl,sec.simpleContent);
}

export{SimpleSections}