for (let i=0 ; i<10; i++){
    console.log(i);
} //for loop

console.log("for loop ends here");

let count :number =0;
while (count<20){
    console.log(count);
    count++;
}
console.log("while loop ends here ");

let number=0;
do{
    console.log(number);
    number++;
}while(number<=5);

console.log("do while loop ends here ");

let numbers :number []=[10,20,30,40];
for (let num of numbers ){
    console.log(num);
}
console.log("for of loop with array ends here ");

let p: string = "Typescript";
for (let char of p){
    console.log(char);
}
console.log("for of loop with string ends here ")

let arr:string[]=["a","b","c","d"];

for (let index in arr){
    console.log(index),arr[index];
}

console.log("for in loop ends here");

for (let i=0;i<5;i++){
    if (i==3)break;
    console.log(i);
}

console.log("for break loop ends");


for (let j=0;j<5;j++){
    if (j==3)continue;
    console.log(j);
}

console.log("for continue loop ends here");
