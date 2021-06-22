import * as sec from "./Sections.js"

let sectionidcount=0;

function createSections() {

    for( let i=0; i<3; i++){
        sec.addSection(sec.simpleContent,"s"+sectionidcount,
        "La chutengcia",
        "Cosas geomorfologas de <a href='https://www.youtube.com/watch?v=KNNr20AsQOs&ab_channel=Jot%40master'>GIS</a>, el Lidar del geodolito nos permite hacer un levantamiento de roca ignea inesperado y scientifico"
        )
        sectionidcount++;    
    }
}

export{createSections}