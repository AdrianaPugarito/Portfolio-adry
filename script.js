const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nome: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  sobrenome: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefone: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	nome: false,
	email: false,
	telefone: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nome":
			validarCampo(expresiones.nome, e.target, 'nome');
		break;
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
		case "telefone":
			validarCampo(expresiones.telefone, e.target, 'telefone');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-incorreto');
		document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-correto');
		document.querySelector(`#grupo-${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo-${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo-${campo} .formulario--input-erro`).classList.remove('formulario--input-erro-ativo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo-${campo}`).classList.add('formulario-grupo-incorreto');
		document.getElementById(`grupo-${campo}`).classList.remove('formulario-grupo-correto');
		document.querySelector(`#grupo-${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo-${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo-${campo} .formulario--input-erro`).classList.add('formulario--input-erro-ativo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);/* keyup tecla para emcima, para comprovar que o usuario escreva o clique fora*/
  input.addEventListener('blur', validarFormulario);/*blur difuminado*/

});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();/*para que não envie ou o bottom não funcione*/

	const termos = document.getElementById('termos');
	if(campos.nome && campos.email && campos.telefone && termos.checked){
		formulario.reset();

		document.getElementById('formulario--menssagem-sucesso').classList.add('formulario--menssagem-sucesso-ativo');
		setTimeout(() => {
			document.getElementById('formulario--menssagem-sucesso').classList.remove('formulario--menssagem-sucesso');
		}, 5000);

		document.querySelectorAll('.formulario-grupo-correto').forEach((icono) => {
			icono.classList.remove('formulario-grupo-correto');
		});
	} else {
		document.getElementById('formulario--menssagem').classList.add('formulario--menssagem-ativo');
	}
});