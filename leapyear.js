//Write a program to take a year from the user and output whether a given year is a leap year or not.
//Note: A year is said to be a leap year if it is either divisible by 400 or it should be divisible by 4 and not by 100.

let n=prompt("enter the year:");
if(n%4===0 && n%100!==0){
    console.log("This is leap year");
}
else{
    console.log("This is not leap year");
}