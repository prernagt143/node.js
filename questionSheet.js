     //chapter 1

/*//ques 1:create an object called "product" to store information shown in picture.
const product={
    name:"Parker Jotter CT Ball Pen",Colour:"Black",rating:4,offer:"5%",price:270};
    console.log(product);
    console.log(typeof(product));
    //when string and a number is added the ouput will be string after concatinating the numbder
//ques 2:create a const object called "profile" to store information shown in the picture.
const profile={
    name:"Shraddha khapra",channel:"Apna College",post:"ex:Microsoft,DRDO", followers:"569K",following:4,post:195,purpose:"to educate"
} 
console.log(profile);

      //chapter 2
//ques3:get user to input a number using prompt("enter a number:").Check if the number is a multiple of 5 or not
let n=prompt("enter A number:");
console.log(n)
if(n%5===0){
    console.log(n,"is multiple of 5");
}
else{
    console.log(n,"is not a multiple of 5");
}*/

//ques4:Write a code which can give grades to the students to their scores:
/*80-100:A
70-89:B
60-69:C
50-59:D
0-49:F 
let marks=prompt("enter the marks:");
if(marks>=80){
    console.log("grade is A");
}
else if(marks>=70){
    console.log("grade is B");
}
else if(marks>=60){
    console.log("grade is C" );
}
else if(marks>=50){
    console.log("grade is D");
}
else{
    console.log("grade is F");
}


            //Chapter:3
//ques5:Print all even numbers from 0 to 100
//for(let i=0;i<=100;i+=2)
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log("even numbers:",i);
    }
}

//ques6:Createhma game were you start with any random number,Ask the user to keep guessing the game untill the user enters correct value
let gamenumber=50;
n=prompt("guess the game number??");
while(n!=gamenumber){     //we have to use single = here because we need to recognize a string although it is a number but by default in js it is string
    n=prompt("guessed the wrong number,try again");
}
console.log("congratulations",n + " is the correct number");
*/
