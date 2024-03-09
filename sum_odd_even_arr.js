//Write a program to print the sum of all the odd numbers and even numbers in the given array.
//Note: In the output, you should print odd numbers sum and even numbers sum in this order only.

//Test Case1:
//Input:
// 23 45 32 25 46 33 71 90
// Output:
// 197
// 168

let n=prompt("enter size:");
let arr=[];
let a;
for(let i=0;i<n;i++){
    a=prompt("enter number:");
    a=parseInt(a); 
    arr[i]=a;
}
let odd=0,even=0;
for(let i=0;i<n;i++){
    if(arr[i]%2===0)
    {
        even+=arr[i];
    }
    else{
        odd+=arr[i];
    }
}
console.log("even sum:",(even));
console.log("odd sum:",(odd));
