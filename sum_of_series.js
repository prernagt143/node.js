//Write a program to calculate the sum of the following series where N is input from the user.
// 1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/N

let n=prompt("enter limit:");
let sum=0;
for(let i=1;i<=n;i++){
    sum+=(1/i);
}
console.log(sum);
