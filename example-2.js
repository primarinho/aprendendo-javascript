function cumprimentar(nome, sobrenome) {
	var frase = 'Olá ' + nome + ' ' + sobrenome + '! ';

	var cumprimentarConsole = function() {
    console.log(frase);
	}

	cumprimentarConsole();
}

cumprimentar('Priscila', 'Marinho');