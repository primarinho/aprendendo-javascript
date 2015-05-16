/* 
	Criando a função (cumprimentar), recebendo dois parâmetros (nome, sobrenome).
	Criando a variável (frase) que está rebendo os dois parâmetros como variáveis.
	Criando a closure (cumprimentarConsole) que exibe o conteúdo da variável (frase).
	Fazendo a chamada da function (cumprimentarConsole).
	Fazendo a chamada da function (cumprimentar) fornecendo os argumentos.
*/
function cumprimentar(nome, sobrenome) {
	var frase = 'Olá ' + nome + ' ' + sobrenome + '! ';

	var cumprimentarConsole = function() {
    console.log(frase);
	}

	cumprimentarConsole();
}

cumprimentar('Priscila', 'Marinho');