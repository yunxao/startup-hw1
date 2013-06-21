#!/usr/bin/env node
var fs = require('fs');
var outputfile = "hello.txt";
var out = "A startup is a business built to grow rapidly.\n";
fs.writeFileSync(outputfile,out);
console.log("Script: " + __filename + "\nWrote: " + out + "\nTo: " + outputfile);
