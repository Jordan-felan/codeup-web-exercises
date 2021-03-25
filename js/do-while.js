//
// The output should be similar to the following:
//
//     5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones


var allCones = Math.floor(Math.random() * 50) + 50;
// var conesBought = Math.floor(Math.random() * 5) + 1;

do {
    var conesBought = Math.floor(Math.random() * 5) + 1;
   allCones = allCones - conesBought
    console.log(conesBought + " cones sold.");
    console.log(allCones + " cones left");
    // console.log(conesBought + " cones sold!");
} while (conesBought <= allCones);

if (allCones === conesBought) {
    console.log(conesBought + " cones sold." );

} else if (allCones === 0) {
    console.log("Yay all cones sold!");
} else {
    console.log("I dont have enough cones, i can sell " + allCones)

}