// TODO What does the Ex 5 paragraph starting with "This is where 'this'" mean? 
// TODO Why does this print "object Object"? object (dict) of type Object

var StarShip = function(designation, registryNumber, crewComplement){
    this.designation = designation || "Unknown Designation";
    this.registryNumber = registryNumber || "registryNumber";
    this.crewComplement = crewComplement || 0;
};

StarShip();

var enterprise = new StarShip("Enterprise", "NCC-1701-D", 1014);

var birdOfPrey = new StarShip("IKS Koraga", "K'Vort", "25");

console.log("this is enterprise: " + enterprise);
console.log("this is birdOfPrey " + birdOfPrey);

console.log("this is Starship original crewComplement: " + StarShip.crewComplement);
console.log("this is Starship original registryNumber: " + StarShip.registryNumber);
console.log("this is enterprise designation: " + enterprise.designation);
console.log("this is birdOfPrey registry number: " + birdOfPrey.registryNumber);


