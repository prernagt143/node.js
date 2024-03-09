//Write a program to check if a number is a special type of number called a 'prime number'. 
//A prime number is a number that is only divisible by 1 and itself, and it doesn't have any other factors.

let num=prompt("enter the number:");
count=0;
for(let i=1;i<=num;i++){
    if(num%i==0){
        count++;
    }
}
if(count==2){
    console.log("YES,Prime number");
}
else{
    console.log("No,Not Prime Number");
}
