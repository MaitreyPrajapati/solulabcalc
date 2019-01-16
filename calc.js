/*const form = document.getElementById('form').addEventListener('submit', defineStuff);
let op;
function defineStuff(e){
	e.preventDefault();
	const d1 = document.getElementById('dig1').value;
	const d2 = document.getElementById('dig2').value;
	if(!d1){alert("d1 needed");}
	if(!d2){alert("d2 needed");}
	console.log(e);
}
*/
let digit1,digit2;
let operator;

const cV = document.getElementById('digit');

//Digits buttons
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const ten = document.getElementById('ten');

//Operators buttons
const add= document.getElementById("add");
const sub= document.getElementById("sub");
const mul= document.getElementById("mul");
const div= document.getElementById("div");
const pow= document.getElementById("pow");

//Operation buttons
const sqr = document.getElementById('sqr');
const cube = document.getElementById('cube');
const sqrt = document.getElementById('sqrt');
const equal = document.getElementById('equal');
const factorial = document.getElementById('factorial');

//Deletion buttons
const AC = document.getElementById('allclear');
const clear = document.getElementById('clear');
const del = document.getElementById('delete');

//Floating point dot
const dot = document.getElementById('dot');


btn = document.querySelector('.btn-circle');
btn.addEventListener('click',f1);
one.addEventListener('click',f1);
function f1(e){
	console.log("QW");
console.log(e);
}