import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name ',
    (answer)=>{console.log(answer); rl.close();
    console.log("The input entered succesfully.....")});



