//Write a program that takes a number from the user and prints the number that is formed by reversing the digits of the number.

let n=prompt("enter the number:");
let rev=0;
let num;
while(n>0){
    num=n%10;
    rev=rev*10+num;
    n=parseInt(n/10);
}
console.log(rev);