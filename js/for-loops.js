'use strict';



//For Loops



//
// var number = parseFloat(prompt("Enter a number to show its Multiplication table!"))
// var number1
// var multiplier
// function showMultiplicationTable (input) {
//
//
//     for (multiplier = 1; multiplier <= 10; multiplier = multiplier + 1) {
//         if (!isNaN(input)) {
//             number1 = input * multiplier
//             console.log(number1)
//         } else {
//             alert("Whatever was entered was not a number!")
//             break;
//
//         }
//
//     }
//
//
// }
// console.log(showMultiplicationTable(number))




//
// var randomNumber = Math.floor(Math.random() * 180) + 20;
// var count
// for(count = 0; count <= 10; count = count + 1){
//     var randomNumber = Math.floor(Math.random() * 181) + 20;
//     if(randomNumber % 2 == 0) {
//         console.log(randomNumber + " is Even")
//     } else {
//         console.log(randomNumber + " is Odd")
//     }
//
// }




var output = ""

for (var line = 1; line <= 9; line++) {
    for (var j = 1; j <= line; j++) {
        if (line === j){
            output += j + "";
        } else {
            output += line + "";
        }

        }
        console.log(output);
    output = "";
}

// var count
//
// for (count = 100; count >= 5; count = count - 5) {
//     console.log(count);
// }