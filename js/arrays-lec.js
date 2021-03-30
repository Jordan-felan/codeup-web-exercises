'use strict';

// array is a collection of data. data held within an array is held in an order

// to make an array we use square brackets

var testArray = [];

//
// array has now been declared but it is an empty array.
//     To declare one with information inside of it you would do the following

var instructors = ["David", "Jay", "Javier", "Cody the Duck"];

// Our instructors variable has been assigned to an array with 4 elements inside of it
// all 4 elements are strings, but not all elements have to be of the same type of values
//

var falsyValues = [false, null, "", 0, undefined, NaN]

// our falsy array has been declared with many different types of values

// we can also count the length of our arrays

console.log(instructors.length);
console.log([].length)
console.log([1, 1,1,1,1,1,1,1,1,1].length)

// can also access the individual values in array by using its index

console.log(instructors[2])
// should console log javier
// if try to access index that is larger than what the array has will get undefined

var randomIndex = Math.floor(Math.random() * instructors.length)

// can use this to grab any random value inside of an array

// when you console.log an array you get back the array itself and the length of it will be infront of it in parentheses.

//iterating arrays

// for (var i = 0; i < instructors.length; i++) {
//     console.log("One of your instructors is named: " + instructors[i])
// }

//can also use for loops to create smething more complicated

// function testAllForFalsy(array) {
//     for (var j = 0; j < array.length; j++) {
//         if (array[j]) {   //equivalent to Boolean(array[j]) === true
//             alert("Truthy value detected at index: " + j);
//             return j
//         }
//     }
//     alert("All values of array are falsy.");
//     return -1

//}


//Why -1 tho?
// By using negative one you are saying its a value that will never be in the array
//If something doesnt exist inside the array and if you do indexOf a value that isnt there it will give you back a -1


//JavaScript arrays have a forEach method that can be used-
// -as an alternative to a for loop. For Each loops do not function like other loops

instructors.forEach(function(instructors, index, array){
    if (index % 2 !== 0) {
        console.log("Instructor #" + (index + 1) + " of " + array.length + " is named: " + instructors);
    }
})



var numbers = [17, 22, 34, 53, 6]

numbers.forEach(function(number,index) {
    if (index % 2 === 0) {
        console.log(number * 2);
    }
})


function testEachForFalsy(array) {
    var truthyFound;
    array.forEach(function(element, i) {
        if (element) {
            alert("Truthy value detected at index: " + 1);
            truthyFound = i
        }

    });

    if (truthyFound) {
        return truthyFound;
    }
    alert("All values of array are falsy.");
    return -1;
};

console.log(testEachForFalsy(falsyValues));
