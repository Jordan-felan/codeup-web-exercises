
//FIZZBUZZ FUNCTION
function fizzBuzz(num) {
    for (let i = 1; i < num; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
        ;


    }
    ;
};
console.log(fizzBuzz(100))

//RETURN 7 FUNCTION
function returnSeven (num) {
    return 7
}

console.log(returnSeven(1));

const timesFive = num => typeof num ==="number" ? num * 5 : 0;

console.log(timesFive("hello"));