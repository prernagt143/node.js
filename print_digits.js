//Write a program to take a number from the user and print the number of digits in the given number. (can you do it without  loop O(1) )

let n=prompt("enter the number:");
let count=0;
while(n>0){
    count++;
    n=parseInt(n/10);
}
console.log(count);