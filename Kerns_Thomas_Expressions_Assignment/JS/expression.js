/**
 * Thomas Kerns
 * SDI
 * 201503-02
 * Expressions assignment
  */

var woodPile = new Array(); // Identifies the new variable as an Array

woodPile[0] = prompt("please enter the amount of wood left");  // Array number 1
woodPile[1] = prompt("please enter the amount of wood left in pile two"); // Array number 2
woodPile[2] = prompt("please enter the amount of wood left in pile three"); // Array number 3

var total = Number(woodPile[0]) + Number(woodPile[1]) + Number(woodPile[2]); // adding all the numbers to get a total

var average = total/3; // takes the total and divides it by 3 for an average

console.log("You average wood per pile is " + average + " and " + total + " is your total wood left"); // output statement

/* I tested the program with an array of 100,200,300 and I got a total of 600 with an average of 200 per pile */