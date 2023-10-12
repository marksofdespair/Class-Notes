let todaysDate = new Date ().toLocaleString(
    'default', {weekday: "long"}
);

console.log("This note doc is covering an assortment of topics including the chapter topic, modules.");

console.log("----------------------------------------------");
console.log("Quick Review of Terminal/Command Line");

console.log("ls");
//ls looks at all nonhidden items ina  directory
console.log("cd returns you to the main directory.");
console.log("cd .. goes up one directory");
console.log("cd - also works");
//cd changes current directory to the given directory argument

//touch is a command to create files
//you can make multiple after the other:
console.log("touch index.html styles.css scripts.js img.png"); //you must include whitespaces after each filename

//to create a directory
console.log(",,mkdir Sample Directory 1,,"); //pretend the ,, are quotes ty
console.log("mkdir Sample\ Directory"); //this is an alternative to using quotes

//the command rm forcefully removes a file
console.log("rm img.png");
console.log("rm -r ,,Sample Directory,,");
console.log("rm -rf Sample\ Directory"); 
/*Keep in mind this is a DANGEROUS COMMAND. It can irreperably destroy your PC. These files do not go to trash.
They go to liminal space where only the most powerful PC wizards know how to retrieve them and will
brick your computer if you delete something important.*/

//mv uh? moves stuff?
//can you move a folder full of other shit?
console.log("mv LaunchCode Destination");
console.log("LaunchCode ../")

//on mac ONLY
console.log("open index.html -a ,,Firefox Nightly,,")

//help or -h will bring up documentation from within the terminal, so do help [command name]
console.log("help help");
console.log("help rm");
console.log("help cd");
console.log("help ls");
console.log("etc...");

console.log("----------------------------------------------");
console.log("Modules or something:");

console.log("");
console.log("Modules help us...modulate code. This makes readability and subsequent debugging much easier.");
console.log("By having the code modulated and in clear blocks, when something breaks, we can isolate it.");

console.log("");
console.log("Local (we created), NPM (hosted on NPM), js files");
console.log("Calling a NPM hosted module: ");
console.log("const input = require('readline-sync');")
const input = require('readline-sync');
//npm install readline-sync
//npm install [npm hosted module name]
console.log("Calling locally hosted module: ");
console.log("const notesInfo = require('./notesmodule');");
const notesInfo = require("./notesmodule");

console.log(notesInfo);

/*modules are exported as key-value pairs - in other words, an object.
module.exports = {
    key: keyvalue
    key2: keyvalue2
    key3: keyvalue3
}

same directory input
console.log(cats.dogLovers("Gerard"));
*/

console.log("");
console.log("We covered more detailed movement and creation of module but I got distracted around 6:30 :)");
console.log("And also diff directory modules.");




