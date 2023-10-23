const input = require('readline-sync');
let todaysDate = new Date ().toLocaleString(
    'default', {weekday: 'long'}
);

//note to future self - if there aren't many notes here, it's because we had a seperate repo to fork/clone
//for interactive practice and stuff.
//I had something to write about undefined constructors but I forgot :)

console.log("In JS, we cannot declare what type of data the constructor argument is. Most other languages require this.");
console.log("This is a weakness of classes in Javascript- you may need to add verification of the values.");

/*remember to use Pastel case for declaring a class name. So Cereal instead of cereal, or
CerealBrands instead of cerealBrands.*/

/*Does providing a default value constrict the data that can be entered into the constrictor?
no
:)
If you WOULD like to restrict it, you have to provide validation INSIDE the constructor argument.

You could force a certain type, or throw an error.

When a method is built inside a constructor, every time you call that constructor, that call receives a copy of
that method.
*/

console.log("HEY! TAKE YOUR ADHD MEDS BEFORE YOU COME TO NEXT CLASS! DUMBASS!");

//I had to go to the bathroom around 6:40 PM and wasn't paying attention or present. Got back around 6:52 PM