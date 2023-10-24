const input = require('readline-sync');
let todaysDate = new Date ().toLocaleString(
    'default', {weekday: 'long'}
);

//CLI - Command Line interface
/* 
-Can install software and dependancies using package managers like npm, homebrew, yarn, etc
-Manager version control
-Run JS files w/ node
-Run JS files with Node, or applications built with Angular, React, etc
*/

//Using a Terminal
/*
-You can open the terminal provided by your OS
-You cna also open it from iside an IDE or text editor like VSCode
*/

//Basic Commands
/*
Covered in textbook, will come back to this (who am I kidding, 5% chance I remember to do that)
- cd ../.. takes you back 2 directories
-cd takes you back to the root
-touch creates new file
-mkdir creates new directory
-Built in text editor nano to edit a file
-cat will display the contents of a file
*/

console.log("-------------------------------------------------")
//Version Control
/*
-Version control system (VCS) lets us keep track of different veresions of the code you've created
-Will be using GIT in class, most widely used VCS
-Git repos encapsulates code we wish to track
-Dont worry about branches or merging yet (except I have to bc im dumb and made one)
*/

//Basics of GIT
/*
-If the default branch is set to master you can change master to main with the command git branch -m main
-A commit is a snapshot of the version you have right now, with any changes since the last commit
-Make commits often
-Use the process:
---git status /to check which fules need to be staged
---git add filename1 filename2 /to stage, or git add. will state everything
---git status /again to verify what has been staged
---git commit -m "some message" /to describe changes made
*/

