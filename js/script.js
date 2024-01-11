var PIN = 1234;

function errorMessage(message) {
	document.querySelector('.mensagem').innerHTML = `<li>${message}</li>`;
}

document.querySelector('.submit-pin-button').
	addEventListener('click', ()=> {
		var getPIN_input = document.querySelector('.input-set-pin');
		var getPIN = Number(getPIN_input.value);

		if(getPIN_input.value === '') {
			errorMessage('ESTE ESPACO NÃO PODE ESTAR VAZIO');
		}
		else {
			let num = getPIN;
			let digitos = 0; 

			while(num > 1) {
				num = num / 10;
				console.log(num);
				digitos++;
			} 

			if(digitos == 4) {
				console.log('O pin informado tem 4 digitos!');
			}
			else {
				if(getPIN < PIN && digitos < 4) {
					errorMessage(`TENTE UM PIN MAIOR. O PIN DEVE TER 4 DÍGITOS`);
				} 
			  else if(getPIN > PIN && digitos > 4) {
					errorMessage(`TENTE UM PIN MENOR. O PIN DEVE TER 4 DÍGITOS`)
				}
			}
		}
	})

