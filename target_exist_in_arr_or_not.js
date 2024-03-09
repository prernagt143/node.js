//Write a program to take size of array, array and target as input from the user and check whether the target exists in this array or not.

let n=prompt("enter size:");
let arr=[];
for(i=0;i<n;i++){
    num=prompt("enter number:");
    arr[i]=num;
}
k=prompt("enter target:");
for(i=0;i<n;i++){
    if(arr[i]==k){
        console.log("YES");
        break;
    }
}