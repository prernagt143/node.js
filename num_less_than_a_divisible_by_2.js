//Write a program to take two numbers, A and B from the user.
// Your task is to find the largest number that is less than
// A and can be divided evenly by B. Can you figure out that number?

let a=prompt("enter the 1st number:");
let b=prompt("enter 2nd number:");
let c=parseInt(a/b)*b;
console.log(c);