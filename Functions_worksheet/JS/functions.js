/**
 * Thomas Kerns
 * SDI
 * 201503-02
 * Function Worksheet
 */
// example area

function circom(){
    var radius = 5;// radius of the circle
    var circom = 2 * 3.14 * radius; //the formula for circomference of a circle
    console.log("The circumfrence of your circle is " + circom + " sq ft") //print out of the circumference
}
circom();// calling the function up

console.log("------------------Bee Stings-----------------------");

function beeStings(){
    var stingers = 8.666666667;
    var weight = 300;
    var tillDeath = stingers * weight;
    console.log("It takes " + tillDeath + " bee stings to kill an animal this size")
}
beeStings();