const input = require('readline-sync');
let todaysDate = new Date().toLocaleString(
    'default', {weekday: 'long'}
     );
   console.log(`Today is ${todaysDate}.`);

console.log("This is week 4 of class. You have passed the first drop assignment. Good job c:");

console.log("----------------------------------------------------------------");
//Methods are things you can do with or to objects

let owl = ["Owl", "Service Dog", 4, true];

let owlArray = {
    "name": "Owl",
    "occupation": "Service Dog",            //Use , to end keys, not ;
    "age": 4,
    "isTall": true
};

console.log(owl[0]);
console.log(owlArray.name);
console.log(owlArray["isTall"]);

/*We have the keys in "" marks isn't always required, but it's a good habit to get in because
some notations like json objects require them. That's why we have them in quotation marks here,
but not in the textbook.

If we are using DOT notation to access keys, why dont we need to use ""? Uh. No answer, thats
just how the syntax works :)*/

console.log("----------------------------------------------------------------");
/*functions can be created anonymously. They KEY could represent the function name.

Say we had a function to say hello/greet a user.
*/
function greetFunction(name) {
    return `Hello, ${name}!`;
}

let dogObject = {
    name: "Owl",
    occupation: "Service Dog",
    age: 4,
    isReallyTall: false,
    greet: function(name = this.name) {
        return `Hello ${this.name}`;  //Use this syntax. ${dogObject.greet} is not wrong, but this is better
    }
}

console.log(dogObject["name"]);


console.log(dogObject.greet);


let bananaCat = {
    name: null,
    species: "Banana Cat",
    weight: null,
    archNemesis: "Apple Dog"
};

// bananaCat.name = "Bananya";
bananaCat["name"] = "Bananya";
console.log("bananaCat.name");

bananaCat["specialTrait"] = "Very Yellow";
console.log(bananaCat["SpecialTrait"]);
//Bro tf did I do LMAO, rewatch lecture this happened around 6:05 PM, so 35ish minutes into lecture?
//Go back around 6:22 PM for info about function errors

console.log("----------------------------------------------------------------");
let output = [];
let students = {
    names: ["Owl", "Dragon", "Plant", "Mango", "Bear"],
    scores: [100, 95, 74, 82, 91]
};

for (let i = 0; i < students["names"].length; i++) {
    let output = "";

    for (items in students) {
        output += `${students[items][i]}: `
    }
    console.log(output.slice(0, -2));
}

/*Why is it line breaking? Discussed at 6:44 PM. But if you wanted it to print all on one line, remove
the console.log statement from inside the loop.*/
console.log("----------------------------------------------------------------");
console.log("Math Objects:")
//These are built-in objects
//My favorite :)

//Help

console.log(Math.abs(-42069));

//Prints a number above 0 but to infinity, never reaching 1
//THIS WORKS, DONT UNCOMMENT UNLESS YOU WANT TO LOOK AT A BUNCH OF RANDOM 0.> DECIMALS

/*console.log(Math.random());

for (let i = 0; i < 100; i++) {
    console.log(Math.random());
}*/

console.log(Math.round(1.4));

console.log(Math.floor(1.9999999999999999999)); //breaks it LOL
console.log(Math.ceil(1.4739));
console.log(Math.trunc(1.4739)); //snips off anything after the decimal
console.log(Math.max(1,2,3,4,5,6));
console.log(Math.min(1,2,3,4,5,6));

/*function roll1d20() {
    return Math.ceil(Math.random()*20);
}*/

function rolld20(numIterations) {
    for (let i = 0; i < numIterations; i++) {
        console.log(Math.ceil(Math.random()*20));
    }
}

console.log(roll1d20);

for (let i=0; i < 10; i++) {
    console.log(Math.ceil(Math.random()*1000)/10);
}