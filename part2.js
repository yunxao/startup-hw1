#!/usr/bin/env node
var fs = require('fs');
var cad = "";
var nPrimes = 0;
var primes = Array;
nPrimes[nPrimes] = 2;
var cad = "2";
var filename = "prime.txt";

for (var i = 3; i <= 100; i++){
	var prime = true;
	for (var j = 0; j <= nPrimes;j++){
		if (i % primes[j] == 0){
			prime = false;
			break;
		}
		
	}
	if (prime){
		primes[++nPrimes]  = i;
		cad += ","+i;
	}
}
fs.writeFileSync(filename,cad);
console.log("Script: " + __filename + "\nWrote: " + cad + "\nTo: " + filename);

