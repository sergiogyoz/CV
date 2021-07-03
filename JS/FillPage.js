import * as sec from "./Sections.js"

function SimpleSections() {
    const indexurl="./JSON/SimpleSections.json";
    sec.addSectionsFromJSON(indexurl,sec.simpleContent);
}

export{SimpleSections}