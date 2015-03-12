/**
 * Thomas Kerns
 * SDI
 * 201503-02
 * Conditionals assignment
 */

var height = prompt("enter the height of the box in inches: ");// gets the height variable
var length = prompt ("enter the length of the box in inches:");// gets the length variable
var width  = prompt("enter the width of the box in inches:");  // gets the width variable
var volume = Number(height) * Number(length) * Number(width); // formula for volume
var basePrice = 12.00;// identifies the base price to ship

(volume <1000 && height <=15) ? console.log("you can ship your box") : console.log("Your box is too big");// determines the size of the box

    if (volume <=1000 && height <=15){ // if statement for small box statement
        var newPrice = basePrice -3;// new price due to box size
            console.log("your new price is $" +newPrice+ " to ship your box."); // output statement
    }
        else if (volume >=1000 || height >15){ // if statement for large boxes
            var newPrice = basePrice +3; // new price due to box size
                console.log("your new price is $" +newPrice+ " to ship your box."); //output statement
    }

// I tested the code with 16x3x3 and it told me my box was too big and gave me the $15 price
// I tested the code with 12x6x6 and it told me I can ship my box at the $9 price