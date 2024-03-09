//Write a program to print the sum of odd numbers up to N.

let n=prompt("enter limit:");
let sum=0;
for(let i=1;i<n;i++){
    if(i%2!==0){
        sum+=i;
    }
}
console.log(sum);