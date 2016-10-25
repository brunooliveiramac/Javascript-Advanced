var campos = [
	document.querySelector('#data'),
	document.querySelector('#quantidade'),
	document.querySelector('#valor')
];

var tdBody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){ //<-- CallBack Function

	event.preventDefault(); // <-- Don't submit form 
	var tr = document.createElement('tr');

	campos.forEach(function(campo){

		var td = document.createElement('td');
		td.textContent = campo.value;
		tr.appendChild(td);
	});

	var tdVolume = document.createElement('td');
	tdVolume.textContent = campos[1].value * campos[2].value;
	tr.appendChild(tdVolume);

	//Include tr on table
	tdBody.appendChild(tr);

	//clean
	campos[0].value = '';
	campos[1].value = 1;
	campos[2].value = 0;

	campos[0].focus();

});