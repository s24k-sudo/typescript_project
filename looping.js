for (var i = 0; i < 10; i++) {
    console.log(i);
} //for loop
console.log("for loop ends here");
var count = 0;
while (count < 20) {
    console.log(count);
    count++;
}
console.log("while loop ends here ");
var number = 0;
do {
    console.log(number);
    number++;
} while (number <= 5);
console.log("do while loop ends here ");
var numbers = [10, 20, 30, 40];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    console.log(num);
}
console.log("for of loop with array ends here ");
var p = "Typescript";
for (var _a = 0, p_1 = p; _a < p_1.length; _a++) {
    var char = p_1[_a];
    console.log(char);
}
console.log("for of loop with string ends here ");
var arr = ["a", "b", "c", "d"];
for (var index in arr) {
    console.log(index), arr[index];
}
console.log("for in loop ends here");
for (var i = 0; i < 5; i++) {
    if (i == 3)
        break;
    console.log(i);
}
console.log("for break loop ends");
for (var j = 0; j < 5; j++) {
    if (j == 3)
        continue;
    console.log(j);
}
console.log("for continue loop ends here");
