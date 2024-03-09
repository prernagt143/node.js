//Write a program to take two integers M, and N and print the sum of numbers in the range M to N.

let m=prompt("enter initial point:");
let n=prompt("enter final point:");
let sum=0;
for(let i=m;i<=n;i++){
    sum+=parseInt(i);
}
console.log(sum);