//Write a program  to input electricity unit charges and calculate the total electricity bill according to the given condition:
//For the first 50 units Rs. 0.50/unit
//For the next 100 units Rs. 0.75/unit
//For the next 100 units Rs. 1.20/unit
//For units above 250 Rs. 1.50/unit
//An additional surcharge of 20% is added to the bill

let a=prompt("enter the unit charges:");
let b;
if(a<=50){
    b=(a*0.50)+((b/100)*20);
}
else if(a<=150){
    b=(50*0.50)+(a-50*0.75)+((b/100)*20);
}
else if(a<=250){
    b=(50*0.50)+((a-150)*1.20)+((b/100)*20);
}
else{
    b=(50*0.50)+(100*0.75)+(100*1.20)+((a-250)*1.5)+((b/100)*20);

}
console.log(parseInt(b));
