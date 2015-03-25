/**
 * Thomas Kerns
 * SDI
 * 201503-02
 * Functions Assignment
 *
 */

var userPrompt =prompt("Enter 1 for florida lottery or 2 for power ball");// creates a user prompt
while(userPrompt === ""){//validates the user prompt for empty responses

    userPrompt = prompt("Please enter a number");// validates
}
function lottery(max, min, num){
    var randomArray = [];// new array
    for (var a = 0; a < num; a++) {// number of runs based on num
        var myLotto = Math.round(Math.random() * (max - min) + min)// establishs the random number
        randomArray[a] = myLotto; //places the random number in the array
        console.log(myLotto); // prints out the random number
    }
}

function pbNumbers(max, min, num){
    var randomArray = [];// new array
    for (var a = 0; a < num; a++) {// number of runs
        var myPball = Math.round(Math.random() * (max - min) + min)//makes the random number
        randomArray[a] = myPball;// attaches the random number to the array
        console.log(myPball);// prints out the random number
    }
}

if (userPrompt == 1) {// option one for users too choose


    console.log("Your Florida Lottery numbers are: ");// output to the user
    lottery();// calls up the function lottery
    lottery(53, 1, 6); // sets up the number of runs and max and min
}
else {// second choice for the user to pick


    console.log("Your powerball numbers are: ");// output to the user
    pbNumbers(59, 1, 5); // sets up the number of runs
    pbNumbers();// calls up the function pbNumbers
    var powerBall = Math.round(Math.random() * (35 - 1) + 1);// generates a random number between 1-35
    console.log("Your powerball number is: " + powerBall) //displays the variable powerBall to the user

}