"use strict"

var message = "Hello from external JavaScript!"

console.log(message)

alert("Welcome to my website!");

var favoriteColor = prompt("What is your favorite color?")

alert("Great, " + favoriteColor + " is my favorite color too!")

var littleMermaidRentLength = prompt("How many days do you want to rent the Little Mermaid?")
var brotherBearRentLength = prompt("How many days do you want to rent Brother Bear?")
var hercules = prompt("How many days do you want to rent Hercules?")
var rentalCostPerNight = 3
alert("Movies are 3 dollars a night to rent.")
var movieRentalTotalCost = (littleMermaidRentLength * 3) + (brotherBearRentLength * 3) + (hercules * 3)
console.log(alert("Great! Your total come out too $" + movieRentalTotalCost))

var googleHourlyRate = 400
var amazonHourlyRate = 380
var facebookHourlyRate = 350
var googleHoursWorked = parseFloat(prompt("How many hours did you work for Google?"))
var amazonHoursWorked = parseFloat(prompt("How many hours did you work for Amazon?"))
var facebookHoursWorked = parseFloat(prompt("How many hours did you work for Facebook?"))
var check = (googleHoursWorked * googleHourlyRate) + (amazonHoursWorked * amazonHourlyRate) + (facebookHoursWorked * facebookHourlyRate)

 console.log(alert("Total wages earned $" + check))

var canEnroll;
var classNotFull = true
var noConflict = true
 var confirm = confirm("Please confirm the class you wish to enroll in has an open spot and that it does not conflict ith your already scheduled classes. If both true Confirm, if not press cancel");
if (confirm == true) {
    canEnroll = "You can enroll!";
} else {
    canEnroll = "You cannot enroll. Sorry!"
}
console.log(alert(canEnroll))

var discount;
var premium = confirm("Are you a premium member?")
var atleastTwoItems = confirm("If not premium member do you have atleast 2 items? Two items needed to qualify for offer.")
var offerValid = confirm("Last but not least is the offer you are trying to use still available and not expired?")

if ((premium || atleastTwoItems == true) && offerValid == true) {
    discount = "Discount has been applied! Enjoy!";
} else {
    discount = "Discount requirements not met, and/or the discount is no longer valid! Sorry!"
}
console.log(alert(discount))


