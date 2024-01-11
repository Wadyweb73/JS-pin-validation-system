var PIN = 1234;
var imgs = ['./imgs/locked.png', './imgs/unlocked.png']

function errorMessage(message) {
	document.querySelector('.mensagem').innerHTML = `<li>${message}</li>`;
}

function passedMessage(message) {
	document.querySelector('.mensagem').innerHTML = `<strong style="color: green;">${message} &check;</strong>`;
}

function verifica_proximidade_PIN(getPIN, digitos) {
	if(getPIN < PIN && digitos < 4) {
		if(getPIN > PIN - 100) {
			errorMessage(`TENTE UM PIN UM POUCO MAIOR. O PIN DEVE TER 4 DÍGITOS`);
		}
		else {
			errorMessage(`TENTE UM PIN MAIOR. O PIN DEVE TER 4 DÍGITOS`)
		}
	} 
	else if(getPIN > PIN && digitos > 4) {
		if(getPIN < PIN - 100) {
			errorMessage(`TENTE UM PIN UM POUCO MENOR. O PIN DEVE TER 4 DÍGITOS`);
		}
		else {
			errorMessage(`TENTE UM PIN MENOR. O PIN DEVE TER 4 DÍGITOS`)
		}
	}
	else {
		if(getPIN < PIN) {
			errorMessage(`TENTE UM PIN UM POUCO MAIOR.`);
		}
		else {
			errorMessage(`TENTE UM PIN UM POUCO MENOR. `)
		}
	}
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
					if(getPIN == PIN) {
						passedMessage(`PASSED`);
						document.querySelector('.main-result-field')
							.innerHTML = `<img class="locked-unlocked-icons" src="${imgs[1]}">Desbloqueado`;
					}
					else {
						verifica_proximidade_PIN(getPIN, digitos);
						document.querySelector('.main-result-field')
						.innerHTML = `<img class="locked-unlocked-icons" src="${imgs[0]}">Bloqueado`;
					}
			}
			else {
				verifica_proximidade_PIN(getPIN, digitos);
				document.querySelector('.main-result-field')
				.innerHTML = `<img class="locked-unlocked-icons" src="${imgs[0]}">Bloqueado`;
			}
		}
	})

