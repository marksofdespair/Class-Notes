let todaysDate = "Friday the 15th, September 2023"
/*let actualDate =  new Date().toLocaleString('default', {weekday: 'long'}
);
console.log(`Today is ${todaysDate}.`);)*/
let todaysReading = "Stringing Characters";
let todaysReadingTwo = "Arrays";
let thisIsEx = "This is an example...";
let thisIsNte = "This is a note...";
let exArrayOne = ["Small","Big","Little","Large"];
let exArrayTwo = [1,2,3,4,5,6,7,8,9,10];
let exArrayThree = ["Consider this TINY!", "Consider this LARGE!"];
let sentenceCause = "This Morphs This String by... ";
let thisIsBreaker = "--------------------------------------------";

//This isn't really intended to do anything other than exist as an if/else statement lol
if(todaysDate === "Friday the 15th, September 2023"){
    console.log("You are viewing today's notes.");
} else {
    console.log("You are viewing old notes.");
}

console.log(`Today is ${todaysDate}. The topic of today\'s reading is ${todaysReading}.`);
console.log("About " + todaysReading + ":");
console.log(" ");

/* Data types that are comprised of smaller pieces are called collection data types, or collection types.
Depending on the scenario, we may want to treat a value of a collection data type as a sungle entity.
We may also want to access its parts.

A character is a string that contains exactly one element, such as a single letter or symbol.

In other words, strings are built out of characters. 

Strings are sequential collections of characters. 
The characters making up that string are assumed to be in a particular order, left to right.
Collection types that allow their elements to be ordered are known as ordered collections.*/

console.log(`${thisIsNte}. Bracket notation is the special syntax that allows us to access the individual characters that make up a string.`);
console.log(thisIsEx + " " + exArrayOne[2]);
console.log(thisIsEx + " " + exArrayTwo[4]);
console.log(thisIsEx + " " + todaysReading[2]);

//Note for the 3rd example how it pulled a random letter from todaysReading - the r from 'Arrays'.

console.log(" ");

console.log(`${thisIsNte}. Strings are objects. \n\tObjects are collections of related data and operations.`);
console.log(`${thisIsNte}. An operation that can be carried out on an object is known as a method.`);
console.log(`${thisIsNte}. A piece of data associated with an object is known as a property.`);

/* Directly from the textbook:

"Suppose we had a square object in JavaScript. (While no such object is built into JavaScript, we will learn how we could make one in a later chapter.)
Since a square has four sides of the same length, it should have a property to represent this length. This property could be called length. 
For a given square, it will have a specific value, such as 4.
Since a square has an area, it should have a method to calculate the area. This method could be called area, and it should calculate the area of a square using its length property." 

You could think of methods and properties as functions and variables that belong to an object. These are accessed during dot notation.*/

console.log(thisIsEx + " " + typeof exArrayOne); //Tells us the type of an object
console.log(thisIsEx + " " + typeof 4); //Tells us the type of an object
console.log(thisIsEx + " " + "The string attached to this variable has" + " " + todaysDate.length + " " + "characters!"); //Tells us how many characters are in a string
console.log(thisIsEx + " " + sentenceCause.toLowerCase() + "Causing everything in it to be lower case!"); //Causes lowercase
console.log(thisIsEx + " " + sentenceCause.toUpperCase() + "Causing everything in it to be upper case!"); //Causes uppercase

console.log(" ");
console.log("Special note...see comments!");
//Fyi...while a string dot notated with .length may return "6", if you then pick out the 6th character of that string, it's actually going to return undefined. 
console.log("wolves".length);
console.log("wolves"[6]);
//We start counting by going 1, 2, 3, 4, etc. The computer starts counting by going 0, 1, 2, 3, etc. So instead, if you wanted to get the last character:
console.log("wolves".length);
console.log("wolves"[5]);

console.log(" ");
console.log(`${thisIsNte} Strings are immutable. We cannot change the individual characters within a string. We CAN access individual characters using bracket notation, but not change.`);
let example = "Example"
console.log(example);
example[0] = "e";
console.log(example);
//HOWEVER, we could set a variable containing a string to a diff value
console.log(thisIsEx + " again:");
let exampleTwo = "BIG Example!"
exampleTwo = "Big Example!"

console.log(exampleTwo);

/* Considering that strings are imutable, methods called on strings are not actually changing the strings, but transforming their output. */

console.log(" ");
console.log(`${thisIsNte} regarding encoding characters. Each 0 and 1 of data is called a bit, and a byte is a set of 8 bits, and represent a binary number.`);

/* There is 256 different values a byte may take, and each can be used to represent a decimal integer, from 0 to 255. Most characters we are used to using -
including letters, numbers, whitespace, punctuation, and symbols -
are part of the ASCII (ask-ee) character encoding.

JavaScript uses the UTF-16 enciding, which includes ASCII as a subset. */

console.log(`${thisIsNte} JavaScript provides methods to convert any acharacter into its ASCII code and back.`);
let favoriteAnimal = "Wolf";
console.log(favoriteAnimal.charCodeAt(0));
console.log(favoriteAnimal.charCodeAt(1));
console.log(favoriteAnimal.charCodeAt(2));
console.log(favoriteAnimal.charCodeAt(3));

//To convert them back:
let animalCode = [87,111,108,102];
let animalChar = String.fromCharCode(animalCode[0]) + String.fromCharCode(animalCode[1]) + String.fromCharCode(animalCode[2]) + String.fromCharCode(animalCode[3]);
console.log(animalChar);

//I went back and hid the 'examples'/notes for special characters section through the whole notes :] And will do so going forward. Good luck, future me!
//Template literals...there's not much to say about them, as I've been using them the whole time, although we can include an example.

console.log(" ");
let name = "Bear";
let currentAge = 6;

console.log(`${thisIsNte} regarding Template Literals.`);
console.log(`${thisIsEx} Right now, ${name} is ${currentAge}. Next year, he will be ${currentAge + 1} (Next year I will be very sad).`);

/* They also allow us to create multi-line strings without using string concatenation or special characters. */