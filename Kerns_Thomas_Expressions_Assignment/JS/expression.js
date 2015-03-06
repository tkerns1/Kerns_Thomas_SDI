/**
 * Created by ThomasKerns on 3/6/15.
 */

var woodPile = New Array()

woodPile[0] = prompt("please enter the amount of wood left");
woodPile[1] = prompt("please enter the amount of wood left in pile two")
woodPile[2] = prompt("please enter the amount of wood left in pile three")

var total = number(woodPile[0]) + number(woodPile[1]) + number(woodPile[2]);

var avarage = total/3;

console.log("")