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
const one = document.getElementById('1');
one.addEventListener('click',letteradd);
const two = document.getElementById('2');
two.addEventListener('click',letteradd);
const three = document.getElementById('3');
three.addEventListener('click',letteradd);
const four = document.getElementById('4');
four.addEventListener('click',letteradd);
const five = document.getElementById('5');
five.addEventListener('click',letteradd);
const six = document.getElementById('6');
six.addEventListener('click',letteradd);
const seven = document.getElementById('7');
seven.addEventListener('click',letteradd);
const eight = document.getElementById('8');
eight.addEventListener('click',letteradd);
const nine = document.getElementById('9');
nine.addEventListener('click',letteradd);
const zero = document.getElementById('0');
zero.addEventListener('click',letteradd);

//Two operands Operators buttons
const add= document.getElementById("add");
add.addEventListener('click',operations);
const sub= document.getElementById("sub");
sub.addEventListener('click',operations);
const mul= document.getElementById("mul");
mul.addEventListener('click',operations);
const div= document.getElementById("div");
div.addEventListener('click',operations);
const pow= document.getElementById("pow");
pow.addEventListener('click',operations);

//Single operand Operation buttons
const sqr = document.getElementById('sqr');
const cube = document.getElementById('cube');
const sqrt = document.getElementById('sqrt');
const factorial = document.getElementById('factorial');

//Equal button
const equal = document.getElementById('equal');
equal.addEventListener('click',equalsto);

//Deletion buttons
const AC = document.getElementById('AllClear');
AC.addEventListener('click',allclear);
const cleared = document.getElementById('clear');
cleared.addEventListener('click',oneclear)
const del = document.getElementById('delete');

//Floating point dot
const dot = document.getElementById('dot');

//Display
let display = document.getElementById('display');

//Answer
let answer;

//Display of letters and their conditions
function letteradd(e){
	let btn_clicked = e.path[0].id;
	console.log(display.innerHTML);
	console.log(typeof(display.innerHTML));	

	//to check if the length is ok and it's not the first digit
	if(display.innerHTML!=0 && (display.innerHTML).length<=9){
		display.innerHTML+=btn_clicked;
	}
	//if the length reaches 10 digits
	else if((display.innerHTML).length>=10){
		alert("10 digits only");
	}
	//normal
	else{
		display.innerHTML=btn_clicked;
	}
		
}
//deciding operator. Also if answer exists and another operator is clicked, answer becomes digit1 for the operation.
function operations(e){
	let op = e.path[0].id;
	operator=op;
	if(answer){
		digit1 =answer;
		display.innerHTML=0;
	}
	else if(display.innerHTML!=0){
		digit1 = display.innerHTML;
		display.innerHTML = 0;	
	}

	

}

//Two operannd operations performed
function equalsto(){
	console.log("digit1",digit1);
	digit2 = display.innerHTML;
	console.log("digit2: ",digit2);
	digit1= parseInt(digit1);
	digit2= parseInt(digit2);
	console.log(operator);
	console.log(typeof(digit1),typeof(digit2));

	switch(operator){
		case 'add':
			answer = digit1+digit2;
			display.innerHTML= answer;
			console.log(answer);
			break;	
		

		case 'sub':
			answer = digit1-digit2;
			display.innerHTML= answer;
			break;
		


		case 'mul':
			answer = digit1*digit2;
			display.innerHTML= answer;
			break;
		

		case 'div':
			answer = digit1/digit2;
			display.innerHTML=answer;
			break;
		

		case 'pow':
			answer = Math.pow(digit1,digit2);
			display.innerHTML=answer;
			break;
		
	}
	
}

// Clearing all the data when AllClear(AC) button is clicked
function allclear(e){
	digit1 =0;
	digit2 =0;
	answer =0;
	operator="";
	display.innerHTML=0;
}

function oneclear(e){
	display.innerHTML = 0;
}




	


