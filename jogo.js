
var altura, largura = 0
var vidas = 1

function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(altura, largura)

}

ajustaTamanhoPalcoJogo()

function posicaoRandomica(){

	//remover mosquito, caso exista
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()//remove o mosquito caso exista e caso tenha sido removido perde uma vida
		if (vidas > 3) {
			window.location.href = "fim_de_jogo.html"//redireciona pagina game over
		}else {
			document.getElementById('v'+ vidas).src = "imagens/coracao_vazio.png" // quantidade de corações de forma dinamica
			vidas++			
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) -90
	var posicaoY = Math.floor(Math.random() * altura ) -90
	console.log(posicaoX, posicaoY)

	//se a posição x for menor que 0 recebe 0 caso contrario recebe ela mesma
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

//criar mosquito elemento html utilizando o dom para criar o elemento img html com createElement
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png' //acessa o elemento img e seu atributo src para definir o caminho da imagem
mosquito.className = tamanhoRandomico() +' '+ ladoAleatorio()// acessando classe
mosquito.style.left = posicaoX + 'px' //acessa o style da tag e o elemento left dele atribui a pos e concatena px para que seja interpretado como pixel
mosquito.style.top = posicaoY + 'px' // para o top
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function(){
	this.remove()
}
document.body.appendChild(mosquito)//adicionando um filho para o body com o dom	



}
//função que definira uma das nossas tres classes para mosquito
function tamanhoRandomico(){
	var classe = Math.floor(Math.random()* 3)
	switch (classe) {
		case 0:
		return 'mosquito1'
		case 1:
		return 'mosquito2'
		case 2:
		return 'mosquito3'
	}
}

//função responsavel para qual lado o mosquito irá olhar
function ladoAleatorio(){
	var classe = Math.floor(Math.random()* 2)

	switch (classe) {
		case 0:
		return 'ladoA'
		case 1:
		return 'ladoB'
	}
}