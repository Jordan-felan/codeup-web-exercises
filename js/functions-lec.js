
// Immediately Invoked Function Expression (IFFE's)
    (function () {
        "use strict"
getGlobalAndLogIt();

console.log(global);

console.log("Hello World.");

console.log(parseInt("17 dogs."));

var whatIsTheWord = prompt("What is your favorite, work appropiate, word?");

console.log(whatIsTheWord)

//lets define a function
function doTheThing(input) {
    return input +
    " was pulled into the function. Now it is the concatenated string.";

}

console.log(doTheThing("Hot Dog"));

function addStuff(x,y) {
    return x + y;
}
console.log(addStuff(17,18));

// Lets make a bad function

function logToConsole(info) {
    return info + " is something important to keep in mind. ";
}
var needThisForLater = logToConsole("Bengal tigers are endangered");

console.log(needThisForLater);

function addingToString(str) {
    var finalString = str + " is a string."
    finalString += " And if it wasn't originally a string it sure is now!";
    return finalString;

}
alert(addingToString("Antelope"));

// Global vs Local Variables

var global = "Earth";
var local = "Geoff";
console.log(global);

function getGlobalAndLogIt() {
    var local = "Neptune"
    console.log(global)
    console.log(local);
}

getGlobalAndLogIt();
console.log(local)

// Another way to define functions
var coolGuyFunction = function (string) {
    return string + ", but with sunglasses. B)";
}

console.log(coolGuyFunction("Skunk"));
})();