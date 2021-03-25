var number = 2

while(number < 66000) {
    console.log(number)
    number = number * 2

}

// OR

var num = prompt("What number do you want to start with?");
var originalNumber = num;
var exponent = 2

while (exponent <= 16) {
    num = num * originalNumber
    console.log(originalNumber + " to the power of " + exponent + " = " + num)
    exponent = exponent + 1
}





