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
sqr.addEventListener('click',square);
const cube = document.getElementById('cube');
cube.addEventListener('click',cuber);
const sqrt = document.getElementById('sqrt');
sqrt.addEventListener('click',squareRoot);
const factorial = document.getElementById('factorial');
factorial.addEventListener('click',facto)

//Equal button
const equal = document.getElementById('equal');
equal.addEventListener('click',equalsto);

//Deletion buttons
const AC = document.getElementById('AllClear');
AC.addEventListener('click',allclear);
const cleared = document.getElementById('clear');
cleared.addEventListener('click',oneclear)

//History button
const his = document.getElementById('history');
his.addEventListener('click',history);


//Floating point dot
const dot = document.getElementById('.');
dot.addEventListener('click',letteradd);

//Display
let display = document.getElementById('display');

//Answer
let answer;

// History to calculator button
let table2his= document.getElementById('history2');
table2his.addEventListener('click',history);

//Counter that will be used to know if the person is in calculator or history mode
let counter =0;
 
 //array to store the operations

let arr = []

let histable = document.getElementById('histable');

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
		jumboalert();
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
			if(checklength(answer)){
				display.innerHTML=answer;
				doublehistoryappend(digit1,digit2,operator);
			}
			else if(answer%1!==1){
				answer = answer.toFixed(9);
				display.innerHTML =answer;
				doublehistoryappend(digit1,digit2,operator);
			}
			else{
				jumboalert();
			}
			break;	
		

		case 'sub':
			answer = digit1-digit2;
			if(checklength(answer)){
				display.innerHTML=answer;
				doublehistoryappend(digit1,digit2,operator);
			}
			else if(answer%1!==1){
				answer = answer.toFixed(9);
				display.innerHTML =answer;
				doublehistoryappend(digit1,digit2,operator);
			}
			else{
				jumboalert();
			}
			break;
		


		case 'mul':
			answer = digit1*digit2;
			if(checklength(answer)){
				display.innerHTML=answer;
				doublehistoryappend(digit1,digit2,operator);
			}
			else if(answer%1!==1){
				answer = answer.toFixed(9);
				display.innerHTML =answer;
				doublehistoryappend(digit1,digit2,operator);
			}
			else{
				jumboalert();
			}
			break;
		

		case 'div':
			answer = digit1/digit2;
			if(checklength(answer)){
				display.innerHTML=answer;
				doublehistoryappend(digit1,digit2,operator);
			}
			else if(answer%1!==1){
				answer = answer.toFixed(9);
				console.log('hell');
				display.innerHTML =answer;
				doublehistoryappend(digit1,digit2,operator);
			}
			else{
				jumboalert();
			}
			break;
		

		case 'pow':
			answer = Math.pow(digit1,digit2);
			if(checklength(answer)){
				display.innerHTML=answer;
				doublehistoryappend(digit1,digit2,operator);
			}
			else if(answer%1!==1){
				answer = answer.toFixed(9);
				display.innerHTML =answer;
				doublehistoryappend(digit1,digit2,operator);
			}
			else{
				jumboalert();
			}
			break;
		
	}
	
}



//Square function -- Single Operand Function
function square(e){
	digit1 = display.innerHTML;
	answer = Math.pow(digit1,2);
	if(checklength(answer)){
		display.innerHTML=answer;
		singlehistoryappend(digit1,'Square');
	}
	else{
		jumboalert();
	}
}

//Cube function -- Single Operand Function 
function cuber(e){
	digit1 = display.innerHTML;
	answer = Math.pow(digit1,3);
	if(checklength(answer)){
		display.innerHTML = answer;
		singlehistoryappend(digit1,'Cube');
	}
	else if(answer%1!==1){
				answer = answer.toFixed(9);
				display.innerHTML =answer;
				singlehistoryappend(digit1,'Cube');
			}
	else{
			jumboalert();	
		}
}

//SquareRoot function -- Single Operand Function
function squareRoot(e){
	digit1= display.innerHTML;
	answer = Math.pow(digit1,0.5);
	if(answer.toString().length>9){
		answer = answer.toFixed(9);
		singlehistoryappend(digit1,'SquareRoot');
	}
	display.innerHTML=answer;
}

// Factorial function -- Single Operand Function
function facto(e){
	digit1 = display.innerHTML;
	let val=1;
	if(typeof(digit1)=='Floating'){
		alert("Floating value ain't no good for this operation, go with an integer!!");
		return false;
	}
	else if(digit1<1){
		alert("No value less than 1 please !")
	}
    for (let i = 2; i <= digit1; i++){
        val*=i;
    }
    if(checklength(val)){
    	answer = val;
    	display.innerHTML = answer;
    	singlehistoryappend(digit1,'Factorial');
    }
    else{
    	jumboalert();
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

// Single clear(C) function -- clears current display
function oneclear(e){
	display.innerHTML = 0;
}

//This function is used to check the history of last 10 operations
function history(){
	console.log('history here');
	let contain = document.getElementById('sub1'); //noraml Calculator
	let contain2 = document.getElementById('sub2'); // History 
	if(counter == 1){
		contain.style.visibility = 'visible';
		contain2.style.visibility = 'hidden';
		counter =0;
	}
	else{
		counter = 1;
		contain.style.visibility = 'hidden';
		showhistory();
		contain2.style.visibility='visible';
	}

	}

// Checks whether the length is more than 10
function checklength(e){
	if(e.toString().length>10){
		return false;
	}
	else{
		return true;
	}
}

// Alerts length is more than 10 digits
function jumboalert(){
	alert("Don't push me!! 10 digit limit only!!")
}


// Single operand history

function singlehistoryappend(d1,op){
	
	arr.unshift({'dig1':d1,'op':op, 'dig2' :"" ,'answer':answer});

	if(arr.length>10){
		arr.pop();
			}
	
	
/*	if(histable.rows.length>10){
		histable.rows.deleteRow(histable.rows.length);
		let rc=10;
		let lastrow = histable.insertRow(10);	
		lastrow = histable.rows[9];
		while(rc>2){
			histable.rows[rc]=histable.rows[rc-1];
		}
		let newrow = histable.rows[1];
			console.log(newrow);
			newrow.cells[0].innerHTML=histable.rows.length-1;
			newrow.cells[1].innerHTML= d1;
			newrow.cells[2].innerHTML=op;
			newrow.cells[3].innerHTML="";
			newrow.cells[4].innerHTML=answer;
	
		}

	else if(histable.rows.length == 1){
			let newrow = histable.insertRow(1);
			console.log(newrow);
			newrow.insertCell(0).innerHTML=histable.rows.length-1;
			newrow.insertCell(1).innerHTML= d1;
			newrow.insertCell(2).innerHTML=op;
			newrow.insertCell(3).innerHTML="";
			newrow.insertCell(4).innerHTML=answer;
	
		}
	else{
		let newrow = histable.insertRow(histable.rows.length);
							
			
			for(let rc=histable.rows.length;rc>=2;rc--){
				histable.rows[rc]=histable.rows[rc-1];

			}
			newrow = histable.rows[1];
			newrow.cells[0].innerHTML=histable.rows.length-1;
			newrow.cells[1].innerHTML= d1;
			newrow.cells[2].innerHTML=op;
			newrow.cells[3].innerHTML="";
			newrow.cells[4].innerHTML=answer;

		}*/

	}


	

	



// Multiple operand history
function doublehistoryappend(d1,d2,op){
	arr.unshift({'dig1':d1,'op':op, 'dig2':d2,'answer':answer});

	if(arr.length>10){
		arr.pop();}					

}

	
function showhistory(){
	for(let i=0;i<arr.length;i++){
		histable.rows[i+1].cells[1].innerHTML=arr[i]['dig1'];
		histable.rows[i+1].cells[2].innerHTML=arr[i]['op'];
		histable.rows[i+1].cells[3].innerHTML=arr[i]['dig2'];
		histable.rows[i+1].cells[4].innerHTML=arr[i]['answer'];
	}

	
}




