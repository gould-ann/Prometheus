	data = ["o-","5/20/1998",["G47.00","3/31/1999","184856791","5/10/2004"]];
	
	document.getElementById('medical_info').innerHTML += "<br>";

	document.getElementById('medical_info').innerHTML += "blood type: " + data[0];
	document.getElementById('medical_info').innerHTML += "<br>";
	document.getElementById('medical_info').innerHTML += "DOB: " + data[1];
	document.getElementById('medical_info').innerHTML += "<br>";
	for (var i = data[2].length - 1; i >= 0; i-=2) {
		document.getElementById('medical_info').innerHTML += data[2][i-1] + " " + data[2][i];
		document.getElementById('medical_info').innerHTML += "<br>";
	}