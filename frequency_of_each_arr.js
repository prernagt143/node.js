//Write a program to take N numbers from the user and print the frequency of every number.

let arr=[1,2,3,4,5,1,3,4,5,3,2,5,4];
let result={};
for(let i=0;i<arr.length;i++){
    if(arr[i] in result){
        result[arr[i]]=result[arr[i]]+1;
    }
    else{
        result[arr[i]]=1;
    }
}
console.log(result);
