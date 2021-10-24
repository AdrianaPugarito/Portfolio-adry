//texto animado//
const typed = new Typed('.typed', {
	strings: [
		'<i class="aprendizado">HTML</i>',
		'<i class="aprendizado">CSS</i>',
		'<i class="aprendizado">JavaScript</i>',
		'<i class="aprendizado">PYTHON</i>',
    '<i class="aprendizado">C#</i>'
	],

	//stringsElement: '#correntes-texto', // ID do elemento que contém correntes de texto a mostrar.
	typeSpeed: 75, // Velocidade em milisegundos para por uma letra,
	startDelay: 300, // Tempo de retrasso em iniciar a animação. Aplica também quando termina e volta a iniciar,
	backSpeed: 75, // Velocidade em milisegundos para apagar uma letra,
	smartBackspace: true, // Eliminar soamente as palavras que sejan novas em uma corrente de texto.
	shuffle: false, // Alterar o ordem em que escreve as palavras.
	backDelay: 1500, // Tempo de espera depois de que termina de escrever uma palavra.
	loop: true, // Repetir o array de strings
	loopCount: false, // Cantidade de vezes a repetir o array.  false = infinite
	showCursor: true, // Mostra o cursor palpitanto
	cursorChar: '|', // Caracter para o cursor
	contentType: 'html', // 'html' o 'null' para texto sem formato
});