/**
 * Thomas Kerns
 * SDI
 * 201503-02
 * Function Worksheet
 */
// example area

    var radius = 5;// radius of the circle
    //var circom = 2 * 3.14 * radius; //the formula for circomference of a circle
    var circomference = (2 * 3 * radius);
    console.log("The circumfrence of your circle is " + circomference + " sq ft"); //print out of the circumference

function circom(){
    return 2 * 3 * radius
}
// calling the function up

console.log("------------------Bee Stings-----------------------");


    var stingers = 8.666666667; // number of bee sting per pound needed to kill something
    var weight = 300;// weight of animal
    var tillDeath = (stingers * weight); // number of stingers times the weight of the animal
    console.log("It takes " + tillDeath + " bee stings to kill an animal this size") // print of of number of stingers

    function totalStingers(stingers, weight){ //declaring the function name
        return stingers * weight;// returning the value of the function
    }

console.log("--------------------example--------------------------");

var width = 5
var height = 6
var area = calculateArea(width, height);
console.log("the area of the retangle is " + area + " sq ft.");

function calculateArea(w, h){
    return w * h;
}