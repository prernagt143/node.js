//Write a program to take 5 numbers from the user and print the frequency of every number.

let num1= prompt("enter num 1:");
let num2 = prompt("enter num2:");
let num3 = prompt("enter num3:");
let num4 = prompt("enter num4:");
let num5 =prompt("enter num5:");
let data = [num1, num2, num3, num1, num2, num4, num5, num1, num3, num5];

let freq1 = 0, freq2 = 0, freq3 = 0, freq4 = 0, freq5 = 0;

console.log(num1 + ': ' + freq1);
console.log(num2 + ': ' + freq2);
console.log(num3 + ': ' + freq3);
console.log(num4 + ': ' + freq4);
console.log(num5 + ': ' + freq5);
for (let i = 0; i < data.length; i++) {
    if (data[i] === num1) freq1++;
    else if (data[i] === num2) freq2++;
    else if (data[i] === num3) freq3++;
    else if (data[i] === num4) freq4++;
    else if (data[i] === num5) freq5++;
}
console.log(num1 + ': ' + freq1);
console.log(num2 + ': ' + freq2);
console.log(num3 + ': ' + freq3);
console.log(num4 + ': ' + freq4);
console.log(num5 + ': ' + freq5);
