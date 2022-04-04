var flagBroked = false;
let lampMouse =  document.getElementById('idLamp');

function ligaDesliga(){

	let onOrOff =  document.getElementById('btnLd').innerHTML;
	let lamp = document.getElementById('idLamp');
	let randomNumber = Math.floor(Math.random() * 5);


	if(flagBroked != true){
			if(randomNumber == '3'){
				lamp.src ='./img/broked.jpg';
				flagBroked = true;
			}else{

				if(onOrOff == "Ligar"){
					document.getElementById('btnLd').innerHTML = "Desligar";
					lamp.src='./img/on.jpg';
				
				}else if(onOrOff == "Desligar"){
					document.getElementById('btnLd').innerHTML = "Ligar";
					lamp.src='./img/off.jpg';
				}else{
					alert("nada");
			}
		}
	}else{
		alert("Por favor arrume a Lâmpada. Clique em arrumar.");
	}

}

function arrumarLamp(){

	let lamp = document.getElementById('idLamp');
	flagBroked = false;
	document.getElementById('btnLd').innerHTML = "Ligar";
	lamp.src='./img/off.jpg';

}

