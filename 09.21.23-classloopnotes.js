const input = require('readline-sync');

/*
Instead of typing or copy-pasting console.log(1); (then one then two and so on), we can use loops
to print that thing or that number 50 times.
*/

console.log("Commenting this 50-number loop so it stops printing 50+ lines to the console and terminal :I")
/*
for (let i = 1; i < 51; i++) {
    console.log(i)
}
*/

/*
Pro-tip: if you need to break out of an infinite loop or code execution, ctrl + c in the terminal
OR terminating the terminal entirely stops it.
*/

let gerard = ["Kahoot", "Duck", "Squeak", "Teacher"];
let forLoopedD = [];

for (let i = 0; i < gerard.length; i++) {
    forLoopedD.unshift(gerard[i]);
}

console.log(forLoopedD);



for (let i = 0; i < gerard.length; i++) {
    console.log(`iteration ${i + 1}: the current state of the new array is: 

    ${gerard}`);
}

/* you can unshift from as many arrays as you want */
console.log("------------------------------------------------------");
//while loop examples
let whileLoopedD = [];

while (gerard.length > 0) {
    whileLoopedD.unshift(gerard.shift());
}

console.log(gerard);
console.log(whileLoopedD);

console.log("------------------------------------------------------");
//this doesnt work. Go back and watch lecture maybe, happened around 6:35 PM, so 30-40 minutes after lecture started.
let startingFuelLevel = Number(input.question("Please enter a fuel value greater than 5000 and less than 30000: "));
let numAstronauts = Number(input.question("Please enter a crew size from 1 to a max of 7: "));

while (startingFuelLevel < 5000 || startingFuelLevel > 30000 || isNaN(startingFuelLevel)) {
    startingFuelLevel = Number (input.question(`Sorry, ${startingFuelLevel} is not a valid fuel level input. Please enter a fuel level greater than 5000 and less than 3000: `));
}


while (astronauts < 1 || numAstronauts > 7 || isNaN(numAstronauts)) {
    numAstronauts = Number (input.question(`Sorry, ${numAstronauts} is not a valid number of astronauts. Please enter a number greater than 1 and less than 7: `));
}
console.log("Good job!");

console.log("------------------------------------------------------");
/*
while (fuel level is above a certain threshhold) {
    //increase altutude base on some formula
    // decrease fuel level based on some formula
}
*/
console.log("------------------------------------------------------");

