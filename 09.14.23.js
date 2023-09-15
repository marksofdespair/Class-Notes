let todaysDate = new Date().toLocaleString(
    'default', {weekday: 'long'}
     );
   console.log(`Today is ${todaysDate}.`);

//Syntax errors can prevent code from being parsed properly
//console.log("0" === 0 && 0 === "0");
/*npm install readline-sync

const myName = input.question("What's your name?");

console.log("Hello " + myName); */

console.log("----------------------------------------------");
/*Loose equality and strict equality is == and ===. Loose attempts to convert data types that don't match,
while Strict Equality will not. See here: */
console.log("Loose vs. Strict Equality:")

console.log ("5" == 5);
console.log("5" === 5);

//google identity in coding later
console.log("----------------------------------------------");
//Logical not is the != - it's more or less a double negative. So:
console.log("Not operator:");

console.log(6 != 4);

console.log("----------------------------------------------");
let testTwo = 420 >= 69;
let testOne = 5 > 7;

 //this is called the pipe symbol wtf: ||

//For AND operator: &&  - both need to be true
console.log("Logical AND:");

console.log( 4 === 5 && 1 === 2);
console.log( 4 === 4 && 5 === 5);
console.log(!testTwo && testOne);

//!= is loose inquality. !=== strict inequality

console.log("----------------------------------------------");
console.log("If/else Statements: ");
//if ALWAYS needs to be used to start if/else statements - not else, not whatever.
//At least ONE thing inside it needs to evaluate true.

/* let myName = input.question("What's your name? ");
let myAge = Number(input.question("\nHow old are you? "));
let myPhrase;

if (myAge < 18) {
    myPhrase = "Parental supervision advised.";
} else if (myAge < 26) {
    myPhrase = "Imagine paying for health insurance...";
} else {
    myPhrase = "Imagine having health insurance... :(";
}

console.log("\nHello, " + myName + ". " + myPhrase); */

console.log("Here\'s an example from PlantsApp2:");

/*const getSeason = month => {
if (3 <= month && month <= 5) {
    console.log('spring');
  } else if {
  if (6 <= month && month <= 8) {
    console.log('summer');
  }
  if (9 <= month && month <= 11) {
    console.log('autumn');
  }
  console.log('winter'); {
    else 
  } console.log("I don't know what season it is!");
}; */

let getSeason = month => {
    if (3 <= month || month <= 5) {
        console.log('spring');
    } else if (6 <= month || 8 <= month) {
        console.log('summer');
    } else if (9 <= month || 11 <= month) {
        console.log('autumn');
    } else {
        console.log('winter');
    }
};

//logic errors suck

console.log(getSeason);
//unknown happens when you declare something and never initialize it

console.log("----------------------------------------------");
console.log("More on logic errors: ");
console.log("This is an example from LC/Slack: ");

const input = require('readline-sync');

// instantiate variables 
let hoursInWeek = 168;

let sleepHours = 56;
let workHours = 40;
let miscHours = 21;
let studyHours = 18;

// create variable to reduce clutter
let necessities = sleepHours + workHours + miscHours + studyHours;

// instantiate hours spent gaming on teh daily, then multiply by 7 to update leisureHours
let dailyGaming = Number(input.question("How many hours a day would you like to spend playing Baldur's Gate 3? "));
let leisureHours = dailyGaming * 7;

// give user feedback
console.log("\nGotcha. You want to spend at least " + dailyGaming + " hours a day playing Baldur's Gate. That comes out to " + leisureHours + " hours spent across seven daily gaming sessions.\n");

// additional feedback based on whether they have exceeded total hours in a week
if (necessities + leisureHours > hoursInWeek) {
  console.log("I think you need to reconsider your priorities. There are only " + hoursInWeek + " hours in a week, and with all your other obligations you only have " + (hoursInWeek - necessities) + " hours throughout the week to spend on leisurely activities.");
} else {
  console.log("Cool. That sounds like a balanced schedule. You'll have about " + (hoursInWeek - (necessities + leisureHours)) + " hours leftover to spend how you'd like.");
}
