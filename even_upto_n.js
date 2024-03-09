//Take a number N from the user as input, and print even numbers up to N.

let n=prompt("enter the limit:");
for(let i=1;i<n;i++){
    if(i%2===0){
        console.log(i);
    }
}