// HEAD SECTION //

	alert('Seja bem-vindo ao Tabuleiro 2.3 \n * Aperte F11 para uma experiência melhor; \n * Clique no botão "jogar" para gerar um número aleatório; \n * Escolha uma peça e arraste para a casa correspondente ao número sorteado e clique duas vezes para liberar uma ação; \n Bom Jogo!');

	function allowDrop(ev) {
	ev.preventDefault();
	}

	function drag(ev) {
	ev.dataTransfer.setData("img",ev.target.id);
	}
	
	function drop(ev){
	ev.preventDefault();
	var data = ev.dataTransfer.getData("img");
	ev.target.appendChild(document.getElementById(data));
	}

//DADO//

	function dado() {
	document.getElementsByTagName('span')[0].innerHTML = Math.floor((Math.random() * 6) + 1 );
	}

//DESVIO 1//

	function des1() {
		document.getElementById('bl5li2').style.opacity = "1";	
		document.getElementById('bl9li2').style.opacity = "1";	

		document.getElementById('bl5li3').style.opacity = "1";	
		document.getElementById('bl6li3').style.opacity = "1";	
		document.getElementById('bl7li3').style.opacity = "1";	
		document.getElementById('bl8li3').style.opacity = "1";	
		document.getElementById('bl9li3').style.opacity = "1";

		document.getElementById('bl6').style.opacity = "0";	
		document.getElementById('bl7').style.opacity = "0";	
		document.getElementById('bl8').style.opacity = "0";	
	}

//TRANSPORTE 5//

	function T5() {
	document.getElementById('bl3').style.animationName = "transporte5";
	document.getElementById('bl9').style.animationName = "transporte51";

	document.getElementById('sep3').style.animationName = "transporte5";
	document.getElementById('sep9').style.animationName = "transporte51";
	}

//TRANSPORTE 1//

	function at1() {
	document.getElementById('bl7').style.animationName = "transporte";
	document.getElementById('bl13').style.animationName = "transporte11";

	document.getElementById('sep7').style.animationName = "transporte";
	document.getElementById('sep13').style.animationName = "transporte11";
	}

//TRANSPORTE 6//

	function T6() {
	document.getElementById('bl13').style.animationName = "transporte6";
	document.getElementById('bl14').style.animationName = "transporte61";

	document.getElementById('sep13').style.animationName = "transporte6";
	document.getElementById('sep14').style.animationName = "transporte61";
	}

//TRANSPORTE 7//

	function T7() {
	document.getElementById('bl16').style.animationName = "transporte7";
	document.getElementById('bl16li12').style.animationName = "transporte71";

	document.getElementById('sep16').style.animationName = "transporte7";
	document.getElementById('sep16li12').style.animationName = "transporte71";
	}

//ESTICAR 1//

	function at2() {
	document.getElementById('bl9li3').style.animationName = "esticar";
	document.getElementById('bl26li3').style.animationName = "sinalizar";
	}

//DESVIO 2//

	function loop1() {
	document.getElementById('bl12').style.opacity = "0";
	
	document.getElementById('bl11li2').style.opacity = "1";
	document.getElementById('bl11li3').style.opacity = "1";
	document.getElementById('bl10li3').style.opacity = "1";
	document.getElementById('bl9li3').style.opacity = "1";
	document.getElementById('bl9li2').style.opacity = "1";
	}

//TELEPORTE 1//

	function teletr1() {
	document.getElementById('bl10li2').style.opacity = "1";
	document.getElementById('bl10li2').style.background = "blue";

	document.getElementById('bl17li2').style.opacity = "1";
	document.getElementById('bl17li2').style.background = "blue";
	document.getElementById('bl17li2').style.animationName = "sinalizar2";
	}

//ESTICAR 2//

	function at3() {
	document.getElementById('bl26li5').style.animationName = "esticar2";
	
	document.getElementById('bl10li6').style.opacity = "1";
	document.getElementById('bl10li7').style.opacity = "1";
	document.getElementById('bl10li8').style.opacity = "1";
	document.getElementById('bl10li9').style.opacity = "1";
	document.getElementById('bl10li10').style.opacity = "1";
	document.getElementById('bl10li11').style.opacity = "1";

	document.getElementById('bl9li12').style.opacity = "0";
	}

// TRANSPORTE 2 //

	function at4() {
	document.getElementById('bl11li12').style.animationName = "transporte2";
	document.getElementById('bl7li12').style.animationName = "transporte21";

	document.getElementById('sep11li12').style.animationName = "transporte2";
	document.getElementById('sep7li12').style.animationName = "transporte21";
	}

// TRANSPORTE 3 //

	function at5() {
	document.getElementById('bl18li12').style.animationName = "transporte3";
	document.getElementById('bl5li12').style.animationName = "transporte31";

	document.getElementById('sep18li12').style.animationName = "transporte3";
	document.getElementById('sep5li12').style.animationName = "transporte31";
	}

// DESVIO 3//
	
	function at6() {
	document.getElementById('bl9li6').style.opacity = "1";
	document.getElementById('bl8li6').style.opacity = "1";
	document.getElementById('bl7li6').style.opacity = "1";
	document.getElementById('bl6li6').style.opacity = "1";
	document.getElementById('bl5li6').style.opacity = "1";
	document.getElementById('bl4li6').style.opacity = "1";
	document.getElementById('bl3li6').style.opacity = "1";
	document.getElementById('bl2li6').style.opacity = "1";
	}

// ESTICAR 3 //

	function at7() {
	document.getElementById('bl7li3').style.animationName = "esticar3";
	document.getElementById('bl7li6').style.animationName = "sinalizar";
	}

// CHAVE //

	function ch() {
	document.getElementById('bl9li12').style.opacity = "1";	
	document.getElementById('bl10li11').style.opacity = "0";	
	}

//CADEIA//

	function cad() {
	document.getElementById('bl1li5').style.animationName = "transporte4";
	}

// CHAVE 2//

	function ch2() {
	document.getElementById('bl10li11').style.opacity = "1";	
	document.getElementById('bl9li12').style.opacity = "0";	
	}

// MUDAR 1//

	function mudar() {
	document.getElementById('bl26li8').style.animationName = "mudar";
	document.getElementById('bl8').style.animationName = "mudar2";
	document.getElementById('bl10li12').style.animationName = "mudar3";
	document.getElementById('bl26li2').style.animationName = "mudar4";
	document.getElementById('bl20').style.animationName = "mudar5";
	document.getElementById('bl16li12').style.animationName = "mudar6";
	document.getElementById('bl14').style.animationName = "mudar7";
	document.getElementById('bl23li12').style.animationName = "mudar8";

	document.getElementById('sep26li8').style.animationName = "mudar";
	document.getElementById('sep8').style.animationName = "mudar2";
	document.getElementById('sep10li12').style.animationName = "mudar3";
	document.getElementById('sep26li2').style.animationName = "mudar4";
	document.getElementById('sep20').style.animationName = "mudar5";
	document.getElementById('sep16li12').style.animationName = "mudar6";
	document.getElementById('sep14').style.animationName = "mudar7";
	document.getElementById('sep23li12').style.animationName = "mudar8";
	}

// DESVIO 4//
	
	function at8() {
	document.getElementById('bl18li2').style.opacity = "1";
	document.getElementById('bl18li3').style.opacity = "1";
	document.getElementById('bl18li4').style.opacity = "1";
	document.getElementById('bl18li5').style.opacity = "1";
	document.getElementById('bl18li6').style.opacity = "1";
	document.getElementById('bl18li7').style.opacity = "1";
	document.getElementById('bl18li8').style.opacity = "1";
	document.getElementById('bl18li9').style.opacity = "1";
	document.getElementById('bl18li10').style.opacity = "1";
	document.getElementById('bl18li11').style.opacity = "1";
	document.getElementById('bl18li12').style.opacity = "1";
	}

//TELEPORTE 2//

	function teletr2() {
	document.getElementById('bl17li9').style.opacity = "1";
	document.getElementById('bl17li9').style.background = "blue";

	document.getElementById('bl24li2').style.opacity = "1";
	document.getElementById('bl24li2').style.background = "blue";
	document.getElementById('bl24li2').style.animationName = "sinalizar3";

	document.getElementById('bl18li10').style.opacity = "0";
	}

// DESVIO 5 //
	
	function at10() {
	document.getElementById('bl4li6').style.opacity = "0";

	document.getElementById('bl5li5').style.opacity = "1";
	document.getElementById('bl5li4').style.opacity = "1";
	document.getElementById('bl5li3').style.opacity = "1";
	document.getElementById('bl5li2').style.opacity = "1";
	}

//TROCA 1//

	function troca() {
	document.getElementById('p2').style.background = "deepskyblue"
	document.getElementById('p').style.background = "red"
	}

//TROCA 2//

	function troca2() {
	document.getElementById('p').style.background = "deepskyblue"
	document.getElementById('p2').style.background = "red"
	}

// CHAVE 3//

	function ch3() {
	document.getElementById('bl18li2').style.opacity = "0";	
	}

// DESVIO 6 //
	
	function at9() {
	document.getElementById('bl18li7').style.opacity = "1";
	document.getElementById('bl19li7').style.opacity = "1";
	document.getElementById('bl20li7').style.opacity = "1";
	document.getElementById('bl21li7').style.opacity = "1";
	document.getElementById('bl22li7').style.opacity = "1";
	document.getElementById('bl23li7').style.opacity = "1";
	document.getElementById('bl24li7').style.opacity = "1";
	document.getElementById('bl25li7').style.opacity = "1";
	document.getElementById('bl26li7').style.opacity = "1";

	document.getElementById('bl18li8').style.opacity = "0";	
	}

// CHAVE 4//

	function ch4() {
	document.getElementById('bl23li7').style.opacity = "0";
	document.getElementById('bl18li6').style.opacity = "0";

	document.getElementById('bl18li8').style.opacity = "1";	
	}

//FIM//

	function fim() {
	document.getElementsByTagName('body')[0].style.filter = "grayscale(100%)";
	var x =	document.getElementsByTagName('div');
	var i;
	for (i=0; i < x.length; i++) {
	x[i].style.background = "black";
	}
	}