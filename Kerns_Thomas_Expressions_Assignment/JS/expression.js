/**
 * Created by ThomasKerns on 3/6/15.
 */

var woodPile = new Array();

woodPile[0] = prompt("please enter the amount of wood left");
woodPile[1] = prompt("please enter the amount of wood left in pile two");
woodPile[2] = prompt("please enter the amount of wood left in pile three");

var total = Number(woodPile[0]) + Number(woodPile[1]) + Number(woodPile[2]);

var average = total/3;

console.log("You average wood per pile is " + average + " and " + total + " is your total wood left");