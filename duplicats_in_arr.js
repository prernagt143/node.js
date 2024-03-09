//Write a program to take N numbers from a user as input and then print the duplicates in those N numbers.
// Also, take N as an input from the user.

/*let arr=[2,4,6,3,3,2,3];
dup=[];
for(let i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j] && dup.indexOf(arr[i]==-1)){
            dup.push(arr[i]);
        }
    }
}
if(dup.length>0){
    console.log("duplicates:",dup);
}
else{
    console.log("No duplicates found");

}*/

const myArray = [1, 2, 3, 4, 2, 5, 6, 7,6, 8, 8];
let duplicates = [];

for (let i = 0; i < myArray.length; i++)
  for (let j = i + 1; j < myArray.length; j++)
    if (myArray[i] == myArray[j] && duplicates.indexOf(myArray[i]) == -1)  //indexOf:to know index of any element in array
      duplicates.push(myArray[i]);

if (duplicates.length) {
  console.log("Duplicates:", duplicates);
} else {
  console.log("No duplicates found.");
}
  



