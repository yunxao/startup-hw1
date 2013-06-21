#!/usr/bin/env node
var fs = require('fs');
var cad = "";
var primes = Array();
primes.push(2);
var cad = "2";
var filename = "prime.txt";
var num = 3;
// 0 - 99
while (primes.length < 100) {
	
//for (var i = 3; i <= 100; i++){
	if (test(num,primes)) {
		primes.push(num);
		cad += ","+num;
	}
	num++;

}
fs.writeFileSync(filename,cad);
//console.log("nPrimos = "+nPrimes);
console.log("Script: " + __filename + "\nWrote: " + cad + "\nTo: " + filename);
function test (num, primes){
//	console.log("length="+primes.length);
	for (var i = 0; i < primes.length; i++){
		if (num % primes[i] == 0)
			return false;
	}
	return true;

}


