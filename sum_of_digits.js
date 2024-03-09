//Write a program to take a number from the user and print the sum of the digits of the given number.

let n=prompt("enter the number:");
let sum=0;
while(n>0){
    num=n%10;
    sum+=num;
    n=parseInt(n/10);
}
console.log(sum);
