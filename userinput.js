"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter your name ', function (answer) { console.log(answer); rl.close(); console.log("The input entered succesfully....."); });
