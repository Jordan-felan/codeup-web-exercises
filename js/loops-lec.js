'use strict';

// While Loops

// Pizza Loop

// var slices = 8
// while (slices > 0) {
//     console.log("I'll have a slice!");
//     slices = slices - 1;
//
//     if (slices > 1) {
//         console.log("Now there's " + slices + " slices left!");
//     } else {
//         console.log("Now there's " + slices + " slices left!");
//     }
//     if (slices <= 2) {
//         console.log("The pizza is almost out...");
//     }
//
// }
// console.log("No more pizza :(")

//Pseudocode

// Ask the user for input
//Get user input
//Declare a user input variable
//Store user input in the variable
//Declare a variable to store the total (accumalator)
//Add the cost of the new item to the total
//Keep storing the new totals in accumulator variable
//Tell user how to end the program (sentinal value)
//Loop back around and do it all again, over and over untill the user tells to stop

// var priceOfItem = parseFloat(prompt("Enter the price of your first item."));
// alert("The price of your item was $" + priceOfItem);
// var totalCost = priceOfItem;
// var userInput = "";
// // create a sentinal value
// while(userInput !== "STOP") {
//     userInput = prompt("Enter the price of your next item \r\n\ Enter STOP when you are done");
//
//     if (userInput === "STOP") {
//         alert("Ok, your final total is $" + totalCost)
//     } else {
//         priceOfItem = parseFloat(userInput);
//         totalCost = totalCost + priceOfItem;
//         alert("Your total is now $" + totalCost.toFixed(2));
//     }
// }


// var counter = 0;
// while (counter >= 0){
//     console.log(counter);
// counter = counter - 1
// }


//Do While Loop

// Guessing Game
// var number = Math.floor(Math.random() * 6) +1;
// var guess;
//
// do {
//     guess = parseInt(prompt("Enter a number between 1 and 6"));
// } while (guess !== number);
//
// alert("Your guess of " + guess + " matches the number " + number + "!");


//For Loops

// var count = 0;
// while (count <= 100) {
//     console.log(count);
//     count = count + 1;
//
//
var count

for (count = 0; count <= 100; count = count + 1){
    console.log(count);


// // short hand of one above
// for (i = 0; i <= 100; i++) {
//     console.log(i)
}

