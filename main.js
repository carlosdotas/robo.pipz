main.js

//10x.xxx.xxx.xxx
//2xx.xxx.xxx.xxx

//https://bo.pipz.com.br/qualificationPoints/transfer

//cpf: 2xx.xxx.xxx.xxx
//points: 1

//Teste 1
/*
let cfp = '2xx.xxx.xxx.xxx';
let pontos = 8;

for (var i = 0; i < 10; i++) {
	$.post( "https://bo.pipz.com.br/qualificationPoints/transfer", { cpf: cfp, points: pontos }, function( data ) {
		console.log(data);
	}, "json");
}
*/

//Teste 2
let cfp = '2xx.xxx.xxx.xxx';
let pontos = '2';
var ini = 1;
setInterval(function(){ 

	
	$.get( "http://127.0.0.1/teste.php", function( data ) {


		if(data=='1' && ini==1){
			console.log('foi');
			ini = 0;
			$.post( "https://bo.pipz.com.br/qualificationPoints/transfer", { cpf: cfp, points: pontos }, function( data ) {
				console.log(data);
				ini = 0;

			}, "json");
			
		}


	});
	
}, 10);

//Codigos em PHP
<?php
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');

	echo '0';
?>
