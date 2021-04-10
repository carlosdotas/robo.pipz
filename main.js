main.js

//010.281.334.56
//005.387.021.25

//https://bo.pipz.com.br/qualificationPoints/transfer

//cpf: 005.387.021-25
//points: 1

//Teste 1
/*
let cfp = '005.387.021.25';
let pontos = 8;

for (var i = 0; i < 10; i++) {
	$.post( "https://bo.pipz.com.br/qualificationPoints/transfer", { cpf: cfp, points: pontos }, function( data ) {
		console.log(data);
	}, "json");
}
*/

//Teste 2
let cfp = '010.281.334.56';
let pontos = 16;
setInterval(function(){ 

	$.get( "http://127.0.0.1/teste.php", function( data ) {

		if(data=='1'){
			console.log('foi');
			$.post( "https://bo.pipz.com.br/qualificationPoints/transfer", { cpf: cfp, points: pontos }, function( data ) {
				console.log(data);
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