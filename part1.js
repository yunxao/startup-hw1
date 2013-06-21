#!/usr/bin/env node
var fs = require('fs');
var outputfile = "hello.txt";
var out = "The Saint Roque's dog has not Rabbit because Ramon Ramirez has cut it out\n"
fs.writeFileSync(outputfile,out);
console.log("Script: " + __filename + "\nWrote: " + out + "\nTo: " + outputfile);
