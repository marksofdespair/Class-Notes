let todaysDate = "Friday the 15th, September 2023"
let todaysReading = "Stringing Characters"
let todaysReadingTwo = "Arrays"
let thisIsEx = "This is an example..."
let thisIsNte = "This is a note..."
let exArrayOne = ["Small","Big","Little","Large"]
let exArrayTwo = [1,2,3,4,5,6,7,8,9,10]
let exArrayThree =["Consider this TINY!", "Consider this LARGE!"]
let thisIsBreaker = "--------------------------------------------"

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

console.log(`${thisIsNte}. Strings are objects. Objects are collections of related data and operations.`);
console.log(`${thisIsNte}. An operation that can be carried out on an object is known as a method.`);
console.log(`${thisIsNte}. A piece of data associated with an object is known as a property.`);

/* Directly from the textbook:

"Suppose we had a square object in JavaScript. (While no such object is built into JavaScript, we will learn how we could make one in a later chapter.)
Since a square has four sides of the same length, it should have a property to represent this length. This property could be called length. 
For a given square, it will have a specific value, such as 4.
Since a square has an area, it should have a method to calculate the area. This method could be called area, and it should calculate the area of a square using its length property." 

You could think of methods and properties as functions and variables that belong to an object. These are accessed during dot notation.*/

console.log(thisIsEx + " " + typeof exArrayOne);
console.log(thisIsEx + " " + typeof 4);
console.log(thisIsEx + " " + todaysDate.length);

