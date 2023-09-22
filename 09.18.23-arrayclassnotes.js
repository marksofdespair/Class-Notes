const input = require('readline-sync');

//myString = "Where does the .push() method put things in an array?";
//console.log(myString.indexOf("o", 8));

/*by typing the 8, you're telling javascript where to start looking at the string. 
So 8 stands for the 8th index. So JS will start looking there.*/

//console.log(myString.indexOf("o", (myString.indexOf("o") + 1)));

//chaining
/*let myName = input.question("What is your name? ").toLowerCase();

if (myName === "dia") {
    console.log("Hey, its you!")
} else {
    console.log("New number who dis?")
}*/


//this one takes into account users not knowing the index
let myString = "JavaScript";
let letterJ = myString.slice(0, 1);
let letterS = myString.slice((myString.indexOf("S")), myString.indexOf("S") + 1); //"S"

//this one relies on the user knowing the index
console.log(myString.slice(0, 1) + myString.slice(4, 5));
console.log(`${letterJ}${letterS}`);

//Getting around strict equality for user input
/*let myName = input.question("What is your name? ");

if (myName.toLowerCase() === "drareg") {
    console.log("Very funny. /s");
} else {
    console.log("Good afternoon! :)");
}*/

let questionTest = input.question("Who was the first American Woman in space?");

if (questionTest.toLowerCase() === "Sally") {
    console.log("Correct!");
} else {
    console.log("false.");
}