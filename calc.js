const form = document.getElementById('form').addEventListener('submit', defineStuff);
let op;
function defineStuff(e){
	e.preventDefault();
	const d1 = document.getElementById('dig1').value;
	const d2 = document.getElementById('dig2').value;
	if(!d1){alert("d1 needed");}
	if(!d2){alert("d2 needed");}
	console.log(e);
}