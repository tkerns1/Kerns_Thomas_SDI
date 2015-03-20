/**
 * Thomas Kerns
 * SDI
 * 201503-02
 * Functions Assignment
 *
 */

//var prompt
var userPrompt =prompt("Enter 1 for florida lottery or 2 for power ball");// creates a user prompt
    while(userPrompt === ""){//validates the user prompt for empty responses

        userPrompt = prompt("Please enter a number");// validates
    }
function pbNumbers() { // creates a function for powerball lotto
    for (var b = 0; b <= 4; b++) { // sets the amount of times it will run
        var pbNumbers = Math.round(Math.random() * (59 - 1) + 1); //creates a rounded off random number
        console.log(pbNumbers);// outputs a number per run
    }
}
function lottery() { //creates a function called lottery
    for (var a = 0; a<=5; a++){// determines how many times it will run
        var lottery = Math.round(Math.random() * (53 - 1) + 1); //creates a rounded off random number between 1 - 53
        console.log (lottery);// outputs a number per run
    }
}

//IF statement
if (userPrompt == 1){// option one for users too choose


    console.log ("Your Florida Lottery numbers are: ");// output to the user
    lottery();// calls up the function lottery

}

//ELSE statement
 else {// second choice for the user to pick


    console.log("Your powerball numbers are: ");// output to the user
    pbNumbers();// calls up the function pbNumbers
    var powerBall = Math.round(Math.random() * (35 - 1) + 1);// generates a random number between 1-35
    console.log("Your powerball number is: " + powerBall) //displays the variable powerBall to the user

}