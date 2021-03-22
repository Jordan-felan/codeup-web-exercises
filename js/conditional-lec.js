'use strict';
// Conditionals: Code that runs when we meet certain requirements.

// Today we'll be covering if, if/else, if/else if/else statements, ternary expressions and switch statements.

// IF STATEMENTS - Code that runs when a condition is met.

// if (condition) {
//     this code will run if our condition is true;
// }

/** Consider the sentence: "When I run out of milk, I go to the store to get more." */
// Condition: When I run out of milk
// Action: I go to the store to get more.

// if (noMilk === true) {
//      goToStore();
// }



/** TO-DO: I want to make a block of code that logs a message to the console when a variable is set to the number 5. */

var isFive = 5;

if (isFive === 5) {
    console.log("Yep, that sure is five.");
}

// Experiment time

var isValid = false;

if (isValid) {
    console.log("That coupon on fish sticks is still good!");
}

// We can also use our conditional logic in functions.

/** TO-DO: I want to build a function that returns a string when I pass a number as an argument.*/

// function isItANumber(parameter) {
//     if (typeof parameter === "number") {
//         return "Yep, that sure was a number.";
//     }
// }

console.log(isItANumber(5));
console.log(isItANumber("sheep"));
console.log(isItANumber(true));


// IF/ELSE Statements: Code that runs when a condition is met, but will also run with a default state.

// if (condition) {
//     i run when the condition evaluates to true;
// } else {
//     otherwise i run;
// }

/** Consider the following sentence: "If I owned one, I'd get milk from my cow when I ran out. But since
 * I don't, I'll go to the store instead." */

// How would we write this as a if/else code block?

// if (hasCow) {
//      milkTheCow();
// } else {
//      goToStore();
// }



/** TO-DO: Let's expand our previous isItANumber function. Now I want to also return string when we aren't passed a number. How do I refactor our function? */

// function isItANumber(parameter) {
//     if (typeof parameter === "number") {
//         return "Yep, that sure was a number.";
//     } else {
//         return "Nope, that ain't a number.";
//     }
// }


// IF/ELSE IF/ELSE = A chain of if/else statements to give different results for different conditions.

// if (condition1) {
//     run this code;
// } else if (condition2) {
//     since the first condition wasn't met, and the second was, I run;
// } else {
//     since neither the first or second conditions were met, I run by default.
// }

/** Consider the following sentence: "If I owned a cow, I'd get milk from it when I ran out. If I owned a goat, I could get milk from it instead. If I didn't own either, I would go to the store, instead." */

// How would we write this as a if/else if/else code block?

var hasCow = true;
var hasGoat = true;

if (hasCow) {
    console.log("I'm milkin' Bessie!");
} else if (hasGoat) {
    console.log("I'm milkin' Gertrude!");
} else {
    console.log("I'm going to H-E-B!");
}


/** TO-DO: Let's make a function that takes in a number and will return three different strings dependant on whether the
 * argument passed is lesser than, greater than, or equal to 35. */

function isThisThirtyFive(parameter) {
    if (parameter === 35) {
        return "Yep, that's 35, alright.";
    } else if (parameter < 35) {
        return "Aw dang, " + parameter + " is less than 35...";
    } else if (parameter > 35) {
        return "Shoot, " + parameter + " is greater than 35...";
    } else {
        return "You didn't follow the instructions... " + parameter + " ain't no number.";
    }
}

console.log(isThisThirtyFive(34));
console.log(isThisThirtyFive(35));
console.log(isThisThirtyFive(36));
console.log(isThisThirtyFive("bananas"));

// TERNARY expression: A expression to set a value based on boolean evaluation.

// var message = (booleanValue) ? "Operation was true." : "Operation was false.";

/** Consider the following statement: "Are we out of milk? If we are: I'll head to the store, but if we
 * do have milk: I want to make a bowl of cereal." */

// How would we write this as a ternary expression?

// var action = (doWeHaveMilk) ? makePunchBowlOfCereal() : goToStore();

/** TO-DO: Let's look back at the if/else version of our isItANumber function. Let's refactor our if/else as a ternary expression. */

function isItANumber(parameter) {
    return (typeof parameter === "number") ? "Yep, that sure was a number." : "Nope, that ain't a number.";
}

var isGreater = (17 > 12) ? "That was in fact greater" : "No, that value was less";
console.log(isGreater);

// SWITCH STATEMENT: A statement with multiple conditions that will trigger based on the value of a variable.

// var color = prompt("What is your favorite color?").toLowerCase();
//
// switch(color) {
//     case "green":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "orange":
//         alert("That's my brother's favorite color!");
//         break;
//     default:
//         alert(color + " is a weird color, my dude.");
//         break;
// }

/** Consider the following sentence: "I don't have a cow, goat, or camel. I guess I'll have to go to the
 * store for milk." */

// How would we write this as a switch statement?

var animal = "dog";
switch (animal) {
    case "cow":
        console.log("Milkin' Betty!");
        break;
    case "goat":
        console.log("Milkin' Billie!");
        break;
    case "camel":
        console.log("Milkin' Delilah!");
        break;
    default:
        console.log("Go to Kroger.");
        break;
}



/** TO-DO: Let's make a switch statement with a prompt for the user to input their favorite sandwich meat. If they like 'olive loaf' we should return an alert to congratulate them on their bold choice, and if they choose 'brisket' we should return a different alert: this one for congratulating them on the 'right' answer. All other responses should trigger an alert stating apathy. */

// Let's work on the exercise!

var lunchMeat = prompt("Yo, what's your favorite lunch meat, my dude?").toLowerCase();

switch(lunchMeat) {
    case "olive loaf":
        alert("Bold choice! I am not a fan at all.");
        break;
    case "brisket":
        alert("Yeah, you are a Texan ain't ya'? Congrats on passing the test.");
        break;
    default:
        alert("I mean that's fine I guess. I just wouldn't say it is my favorite...");
        break;
}









