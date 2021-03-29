'use strict';

//Break and Continue exercise


var userInput;

while (true) {
    userInput = parseInt(prompt("Enter an odd number between 1 and 50."));
    if (userInput % 2 !== 0 && userInput < 50) {
        console.log("Number to skip is: " + userInput);
        break;
    }

}
for (var i = 0; i <= 100; ++i) {
    if (i === 50) {
        break;
    } else if (i === userInput) {
        console.log("Yikes! Skipping number: " + userInput);
    } else if (i % 2 === 0){
        continue;
    }
    if (i === userInput) {
        continue;
    }
    console.log("Here is an odd number: " + i);
}