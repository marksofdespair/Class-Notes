/*Some notes ahead of time:
-Most of the time, variables outside a function are NOT visible inside of it
-Some variables CAN be seen from the outside. 
-Variables initialized without using let, const, or var are GLOBAL variables, and should be used rarely
-What allows a function to be seen from outside the function is nuanced.
-Scope is always important to keep in mind when working with functions.
-Always use camel case
-Consider using verb/noun pairs when applicable
-It is conventional for boolean functions to start with "is" or "has"
-Functions should be short and for ONE THING.
*/

//Makes a sandwhich with the given ingredients

function amkeSandwhich(breadType, fillingType, condiments) {

}

//This function takes a string and returns the result of removing all the hyphens, -, from the string

function removeHyphens(str) {
    let strWithoutHyphens = ''

    for (let i = 0; i < str.length; i++) {
    if (str[i] !== '-') {
        strWithoutHyphens += str[i];
    }
    }

    return strWithoutHyphens;
}

let launchCodePhone = "314-254-0107";
console.log(removeHyphens(launchCodePhone));
console.log(strWithoutHyphens);

//Palindrome checker created using function composition. When givena  string, first function returns the reverse:

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

//OR

function reverse(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
}

/*
1. Turn the string into an array of characters. We call str.split(''), using the empty string as the splitting character, 
   returns an array of the individual characters that make up the string.
2. Reverse the array of characters. To do this, we use the built-in array method reverse.
3. Join the reversed character array into a string. We call .join(''). Joining with the empty string is the same as concatenating 
   each of the individual characters together into a single string.
*/

//Next, we create the full Palindrome function:

function reverse(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    return reverse(str) === str;
}

/* Above is also an example of making sure to keep functions short, and with one purpose. We should not combine these functions into one- it should not
   both reverse the string and then check to see if its a palindrome, although the textbook mentions this particular example to be a BIT subjective and
   up for debate.
*/