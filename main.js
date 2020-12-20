// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  
  const pAequorFactory = (specimenNum, dna = mockUpStrand()) => {
    return {
      specimenNum : specimenNum,
      dna : dna, 
      mutate() {
        return this.dna = returnRandBase();
      },
      compareDNA(pAequor) {
        console.log(`${this.specimenNum}: ${this.dna}`);
        console.log(`${pAequor.specimenNum}: ${pAequor.dna}`);
        // Create variables to calculate the percentage of DNA have in common
        // and another to save the percentage
        let dnaCommon = 0;
        let dnaPercentage = 0;
        // Loops through two 'dna' array to compare their dna
        for(let i = 0; i < this.dna.length; i++) {
          if(this.dna[i] === pAequor.dna[i]) {
            dnaCommon++;
          }
          dnaPercentage = (100 / 15) * dnaCommon;
        }
        console.log(`Specimen ${specimenNum} and ${pAequor.specimenNum} have ${Math.floor(dnaPercentage)}% DNA in common`);
      },
      // Method that decided it the DNA allow to P.aequor to survive
      willLikelySurvive() {
        let findGandC = 0;
        let survivePercentage = 0;
        for(let i = 0; i < this.dna.length; i++) {
          if(this.dna[i] === 'G' || this.dna[i] === 'C') {
            findGandC++;
          }
        }
        survivePercentage = Math.floor((100 / 15) * findGandC);
        if(survivePercentage >= 60) {
          return true;
        } else {
          return false;
        }
    }
  };
  }
  // Print a simulation 
  // Compares two organisms 'one' and 'two'
  const orgOne = pAequorFactory('one');
  const orgTwo = pAequorFactory('two');
  orgOne.compareDNA(orgTwo);
  
  // Create 30 pAequor objects that have a DNA allow them to survive
  // Save them inside an array
  // Declare the empty array
  const instancespAequor = [];
  let index = 0;
   while(index < 30) {
     pAequorFactory(index);
     if(pAequorFactory(index).willLikelySurvive() === true) {
        instancespAequor.unshift(pAequorFactory(index).dna);
        index++;
     }
   }
  
  console.log(instancespAequor);
  