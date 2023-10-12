const input = require('readline-sync');
let todaysDate = new Date ().toLocaleString(
    'default', {weekday: "long"}
);
let topic = "Exceptions";
let bonusTopic = "..and stuff.";

console.log(`Today's topic is regarding ${topic}.${bonusTopic}`);

console.log("----------------------------------------------");
function dataTypes(topic) {
    let dataTypePrimitive = ["Strings", " Numbers", " Booleans", " undefined", " null"];
    console.log("Our primitive data types: " + dataTypePrimitive);
    if (topic == topic) {
        return "Primitive data types are not mutable"
    } else {
        return "Topic not covered"
    }
};

console.log(dataTypes());

let babyGiraffe = {
    species: "A giraffe, idk what else to tell you",
    name: "Gerard Jr.",
    age: "baby",
    diet: "a lot of leaves, probably",
    height: "one instructor",
    weight: null
};

console.log("----------------------------------------------");
console.log("Scope");
//global scope
let globalScopeExample = "This is accessible anywhere below."
globalScopeExample2 = "This is also globally declared by default."
function scopeInfo(globalScopeExample, globalScopeExample2) {
    let testValTwo = true
    if (testValTwo === true) {
        return globalScopeExample
    } else {
        return "Topic not covered"
    }
}

console.log("Global Scope: " + scopeInfo(globalScopeExample, globalScopeExample2));
//block/local scope
function localScopeInside() {
    let internalReference = "This variable is only accessible inside this function."
    let testNum = true
    if (testNum === true) {
        return internalReference
    } else {
        return "I AM LOST PLEASE HELP."
    }
};
console.log("Local Scope: " + localScopeInside());

console.log("----------------------------------------------");
function isDatANumber() {
    const questionNumber = input.question("Input a number: ");
    return questionNumber;
  }

console.log("Errors");
function checkNum(num) {
    if (isNaN(num)) {
        throw Error("Buddy that ain't no number.")
    }

    return "Yup, that's a number";
}


console.log(checkNum("3"));
console.log(checkNum(6));
console.log(checkNum("Help :("));

let