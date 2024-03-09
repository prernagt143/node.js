//Write a program to take value N from the user and print the following pattern based on the user input.
//array = [2, 3, 5, 2, 1]
//>>                        
//>>>                
//>>>>>
//>>                        
//>

let arr=[2,3,5,2,1];
for(i=0;i<arr.length;i++){
    let str=""
    for(let j=0;j<arr[i];j++){
      str+=">"
    }
    console.log(str)
}
