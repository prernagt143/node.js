//Write a program to take two sorted arrays of size M, N from the user as input and
// merge them into a single sorted array of size M+N .

/*let m=prompt("enter size of 1st array:");
let arr1=[];
for(let i=0;i<m;i++){
    arr1[i]=prompt("enter element:");
}
arr1.parsInt(m);
let n=prompt("enter size of 2nd array:");
let arr2=[];
for(let i=0;i<n;i++){
    arr2[i]=prompt("enter element:");
}
arr2.parsInt(n);
let p=m+n;
let arr3=[];
for(let i=0;i<p-m;i++){
    arr3[i]=arr1[i];
}
for(let i=0;i<p;i++){
    arr3[i]=arr2[i];
}
arr3.parsInt(p)
//sort
let temp;
for(let i=0;i<p-1;i++){
    for(j=0;j<p-i-1;j++){
        if(arr3[j]<arr3[j+1]){
            temp=arr3[j];
            arr3[j]=arr3[j+1];
            arr3[j+1]=temp;
        }
    }
}
console.log("arr1:",arr1);
console.log("arr2:",arr2);
console.log("arr3:",arr3);*/

let arr1=[3,7,12,34,56,90];
let arr2=[20,30,40,50,100,1000];
let arr3=[];
for(i=0;i<arr1.length;i++){
    arr3[i]=arr1[i];
}
for(i=0;i<arr2.length;i++){
    arr3[arr1.length+i]=arr2[i];
}
console.log("merged array:",arr3);


