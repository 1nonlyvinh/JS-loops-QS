let diceRoll; 
let rolls = 0;

while(diceRoll !== 6){
    diceRoll = Math.floor( Math.random() * 6) + 1;
    rolls++; 
    console.log(`you rolled: ${diceRoll}`);
}
console.log(`it took ${rolls} rolls to get a 6!`);