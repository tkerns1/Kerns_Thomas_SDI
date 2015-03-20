/**
 * Thomas Kerns
 * SDI
 * 201503-02
 * Functions Assignment
 *
 */

//var prompt
var userPrompt = Number(prompt("Enter 1 for florida lottery or 2 for power ball"));
while(userPrompt === ""){
    userPrompt = prompt("Please enter a number");
}
//IF statement
// florida lotto
if (userPrompt === 1){

    function lottery() {
       for (var a = 0; a<=5; a++){
           var lottery = Math.round(Math.random() * (53 - 1) + 1);
           console.log (lottery);
       }
    }
    console.log ("your Florida Lottery numbers are: ")
    lottery();

}




//ELSE statement
 else {
    function pbNumbers(){
        for (var b = 0; b<=4; b++){
            var pbNumbers = Math.round(Math.random() * (59 - 1) + 1);
            console.log(pbNumbers);
        }
    }
    console.log ("Your powerball numbers are: ");
    pbNumbers();
    var powerBall = Math.round(Math.random() * (35 - 1) + 1);
    console.log("Your powerball number is: " + powerBall)
}// powerball
//while
// function for powerball number
