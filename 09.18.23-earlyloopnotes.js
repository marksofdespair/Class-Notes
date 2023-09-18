let todaysDate = new Date().toLocaleString(
    'default', {weekday: 'long'}
);
let subject = "Loops, Iterations, and Terminating loops!"
console.log("Today is " + todaysDate + "! These were started on 09/18/2023. Todays subject is " + subject);
console.log("----------------------------------------------");
console.log("for Loops:");
/*basic syntax example of for Loops is as follows:

for (let i = 0; i < 51; i++) {
   console.log(i);
}

This program is an example for a loop that prints the integers 0 through 50. Since 0 indexing is a thing, we set the cap of i < 51 as 51.
Here is a weorded example of the syntax:

for (initial expression; loop condition; update expression) {
   loop body

So to recap:

let i = 0 is executed ONCE, at the start of loop exection.
i is the loop variable.
i < 51 is the loop condition, and a boolean expression.
i++ is the update expression.
{} anything inside this is the loop body.
}*/
