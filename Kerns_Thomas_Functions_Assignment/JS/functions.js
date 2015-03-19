/**
 * Thomas Kerns
 * SDI
 * 201503-02
 * Functions Assignment
 *
 */

//var prompt
var userPrompt = Number(prompt("Enter 1 for florida lottery or 2 for power ball"));
//IF statement
// florida lotto
if (userPrompt === 1) {
    for (var a = 0; a <= 5; a++)
    var florLotto = Math.floor(Math.random() * (53 - 1) + 1)
    console.log(florLotto)
}
// do while statement count down from 5



//ELSE statement
// powerball
//while
// function for powerball number
