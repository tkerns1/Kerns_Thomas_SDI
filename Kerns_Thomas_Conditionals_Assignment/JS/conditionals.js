/**
 * Thomas Kerns
 * SDI
 * 201503-02
 * Conditionals assignment
 */

var height = prompt("enter the height of the box in inches: ");
var length = prompt ("enter the length of the box in inches:");
var width  = prompt("enter the width of the box in inches:");
var volume = Number(height) * Number(length) * Number(width);
var basePrice = 12.00;

(volume <1000) ? console.log("you can ship your box") : console.log("Your box is too big");

    if (volume <=1000){
        var newPrice = basePrice -3;
            console.log("your new price is $" +newPrice+ " to ship your box.")
    }
        else if (volume >=1000){
            var newPrice = basePrice +3;
                console.log("your new price is $" +newPrice+ " to ship your box.")
    }