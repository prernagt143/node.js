//Write a program to reverse the array and print the reversed array.
let n=prompt("enter size:");
let arr=[];
let temp;
for(let i=0;i<n;i++){
    num=prompt("enter number:");
    arr[i]=num;
}
j=n-1;
for(let i=0;i<j;i++){
    temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    j--;
}
for(let k=0;k<n;k++){
    console.log(arr[k]);
}