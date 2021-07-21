

const fived = "fiveDayKdepl.json";
const twod = "twoDayKdepl.json";
const oned = "oneDayKdepl.json";
const healthy = "healthyPlants.json";
const basis = "Kdeficiency.json";
const indicatorGenes = "Kdeficiency-top100.json"

//an array to specify the file path
const treatments = [basis, healthy, oned, twod, fived];
let numObj = 0;
let potassiumDefIndicatorNumber = 0;

 
 for(let k = 0; k < treatments.length; k++) {
    const fileA = require("./Mock-data/" + treatments[k]);
    numObj=0;
    alteredGenes = 0;
    
        for(let i = 0; i < fileA.length; i++) {
            let objA = fileA[i];
            numObj++;
            if(Number(objA.fdr) < 0.05){
                alteredGenes++;
                };
        }
console.log("In " + treatments[k] + "       " + alteredGenes + "     genes are significantly altered");
console.log(numObj);
};