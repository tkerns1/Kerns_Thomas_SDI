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
       for (var a = 0; a<=6; a++){
           var lottery = Math.round(Math.random() * (53 - 1) + 1);
           console.log (lottery);
       }
    }
    console.log ("your Florida Lottery numbers are: ")
    lottery();

}




//ELSE statement
 else {
    console.log("else statement")
}// powerball
//while
// function for powerball number
