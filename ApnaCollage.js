              //Chapter:1(JS)
/*console.log("my self Prerna Gupta");
name="prerna";
console.log(name)
//variables in js: NN BB SS U
//primitive datatypes:number,null,boolean,BigInt,string,Symbol,
//js:Dynamically typed language
isFollow=true;
console.log(isFollow); //always try to write is this manner that the initial word starts with small letter and 2nd word with capital 
//to declare new variable: use let,const(don't use var in fresh code as it generates some bug in code and also it can be redeclare)
let person="megha";
console.log(person); //we cn't redeclare them,as it will give error
const age=18;
console.log(age); //for fixeed value

let a;
console.log(a); // by default its value is undefine if we'll print like that but after we can ive them a value and print it
//const b;
const b=8;
console.log(b); // but simple onst b will give eroor 
//var have global scope, but let and const have block scope
//Block
{
    let c=45;
  //  let c=4; we should not do it(will give error) 
    console.log(c);
    console.log(typeof(c));
}
//x=null   //will give u output as object
let x=BigInt("234");
console.log(x);
console.log(typeof(x))

//object
const student ={
  name:"prerna",age:20,isPass:true
};
  console.log(student);
  console.log(student.name);
  console.log(student["name"]);
  student["age"]=student["age"]+1;
  console.log(student["age"]);
  student["name"]="rahul sharma";
  console.log(student.name);

  //we can change the keys of object as  a constant,but cn't change the constant identifier.


           //Chapter:2(JS)
  //Arithmetic Operators
  let a=5;
  let b=6;

  console.log("a=",a);
  console.log("b=",b);
  
  console.log("a+b=",a+b);
  console.log("a-b=",a-b);
  console.log("a*b=",a*b);
  console.log("a/b=",a/b);
  console.log("a**b=",a**b);
  console.log("a%b=",a%b);

  //unary operators=[incremebts:++,Decrement:--] note:they need single operands
  console.log("a++=",a++); //post increment
  console.log(a);
  console.log("a--=",a--);  // //post decrement
  console.log(a);
  console.log("++a=",++a);  //pre increment
  console.log(a);
  console.log("--a=",--a);   //pre decrement
  console.log(a);


  console.log("b++=",b++); //post increment
  console.log(b);
  console.log("b--=",b--);  // //post decrement
  console.log(b);
  console.log("++b=",++b);  //pre increment
  console.log(b);
  console.log("--b=",--b);   //pre decrement
  console.log(b);


  //assignment operators:=.+=,-=,*=,%=,**=
  
  console.log("a+b",a+b);
  console.log("a-b?",a-b);
  console.log("a/=b=",a/=b);
  console.log("a**=b=",a**=b);
  console.log("a%=b=",a%=b);


  //Comparision Operators:==,!=,===,!==,>,<,<=,>=
  console.log("a==b?",a==b);  //here if we will comapare same values one with number and another wih string then will return true,for neglecting that we use ===
  console.log("a!=b?",a!=b);
  console.log("a===b?",a===b);  //equal to and type
  console.log("a!==b?",a!==b);  // not equal to and type
  console.log("a>b?",a>b);
  console.log("a<b?",a<b);
  console.log("a>=b?",a>=b);
  console.log("a<=b?",a<=b);


  //logical operators:&&:and,||:or,!:not
  let cond1=a<b;
  let cond2=a===5;
  console.log("cond1 && cond2=",cond1 && cond2); //all true means true else false
  console.log("cond1 || cond2",cond1 || cond2);
  console.log("!cond1",!cond1);
  console.log("!cond1",!cond2);

  //conditional statements
  //-if statement
  let age=14;
  if(age>=18){
    console.log("YES, You can vote");
  }
  if (age<18){
    console.log("you cn't vote now");
  }

  /*&let mode="light";
  let color;
  if(mode==="dark"){
    color="black"
  }
  if (mode==="light"){
    color="white"
  }
  console.log(color);

//-if else statement
let mode="light";
let color;
if(mode==="dark"){
  color="black"
}
else{
  color="white"
}
console.log(color);
//odd or even number
let n=10;
if(n%2===0){
  console.log(n,"is even");
}
else{
  console.log(n,"is odd");
}

//else statement

let age=23;
if(age<18){
  console.log("junior");
}
else if(age>60){
  console.log("senior");
}
else{
  console.log("middle");
}
    
//ternary operators:works on 3 operands[compact if else]
//symtax:
//condition?true output:false output
let age_person=12;
//age>=18?console.log("adult"):console.log("not adult");[don't prefer it]
let result=age_person>18?"adult":"not adult";
console.log(result);


//MDN Docs:to explore more about JS

//Switch Statement
//syntax:
switch(expression){
  case caseExpression1:
    statements
  case caseExpression2:
  //-
  case ExpressionN:
    statements
  default:
    statements 
}
const phone="i phone";
switch(phone){
  case "keypad":
    console.log("mobile is keypad");
    break;
  case "android":
    console.log("mobile is android");
    break;
  case "i phone":
    console.log("mobile is i phone");
    break;
  default:
    console.log(" A simple mobile phone");
    break;
}


              //Chapter 3:Loops and Strings in Js
//LOOPS:-
//For LOOP:-
//print the statement 5 times
for(let i=1;i<=5;i++){
  console.log("Prerna Gupta"); 
}
//print the sum of numbers till n.
let n=prompt("enter the number");
let sum=0;
for(i=0;i<=n;i++){
  sum+=i;
}
console.log("the sum is:",sum);


//in case it we'll declare i by var then if again we'll print it , will print the value of i outside
//but in cse of let we need to decalre i again using let
//Note:Don't use var anywere!!!

//Infinite LOOP(never ending loop):Never do it in a program

//while loop
let i=1;
while(i<=5){
  console.log("i=",i);
  i++;
}

//Do While loop:diff is the conditions checks at last i.e the lopp will run atleast 1 time
//semicolon is must in do while lopp after the conditional statement
let i=1;
do{
  console.log("i=",i);
  i++;
}while(i<=5);

//for-of Loop:helps to put loop over strings and arrays but cn't use them for objects
//here no need to write thee initialization updation and any stopping condition

let str="Prerna Gupta"

size=0;
for(let i of str){
  console.log("i=",i)
  size++;
}
console.log("siring size:",size);

//for objects as well as arrays we use:for-in Loop
let obj={
  name:"prerna",course:"Btech",section:"B",semester:"2nd",Roll_num:66,isPass:true
}
for(let i in obj){
 // console.log(i)   for keys only
  console.log("key:",i,"value:",obj[i]);
}*/

//for in loop:used  for accessing the key value pairs

let student={
  name:"prerna",age:18,cgpa:"9.5",isPass:true
};
for(let i in student){
  console.log("key:",i,"VALUE:",student[i]);
}


// //ARRAYS
// let marks=[97,48,77,47];
// console.log(marks);

// //property that gives a value and method that do some work
// console.log(marks.length);   //length is a propperty
// console.log(typeof marks);
// // array is a type of key value pair but the keys are in the form of index.
// //we can access the arrays:-
// console.log(marks[3]);
// console.log(marks[19]);
// //arrays are mutable
// marks[2]="prerna";
// console.log(marks);
// //we cn't change the index element in strings
// str="hello";
// str[0]=4;
// console.log(str); //strings are immutable


//Looping over an array:print all the elements of arrays
//let marks=[97,48,77,47];
//for(let i=0;i<marks.length;i++){
//  console.log(marks[i]);
//}
//using for in
//for(mark in marks){
  //console.log(marks[mark]);
//}

//STRINGS:sequence of character used to represent text;
//cretae string:
// let str="Students' name";
// //print asring
// console.log(str);
// //print string length:
// console.log(str.length);
// //print string indices:
// console.log(str[0],str[1],str[2]);

// let obj={item:"pen",price:10
// };
// console.log("The cost of",obj.item ," is " , obj.price, " rupees");
                                                                  
// //Template Literals  :using backtics i..e tedha code
// let specialString=`This is a Template Litral`;
// console.log(specialString);
// console.log(typeof specialString);

// let obj={item:"pen",price:10
// };
// let output= `the cost of ${obj.item} is ${obj.price} and ${1+2+6} will be extra charges`; //we can add expressions also here
// console.log(output);
//what are template literals?: A way to have embadded expresions in strings
//String Interpolation:to create strings by doing substitution of placeholders
//exp:`string text $(expression) string text    we have used backticks here;

//escape characters
//str="Apna\ncollege" //escape characters are to but we count them as 1 .
//console.log(str.length);
//console.log("Apna\ncollege");  //next line
//console.log("Apna\tcollege");  //tab space


//STRING MeTHODS IN JS: BUilt-in Functions used to manupulate the string
//let str="    Apna Collage    ";
//method1:str.toUpperCase()
//let newstr=str.toUpperCase(); //it won't change the old string value
//str=str.toUpperCase(); //untill we restore it
//console.log(str);

//method2:str.toLowerCase()
//str=str.toLowerCase();

//method3:str.trim():removes starting and ending whitespaces

//str=str.trim();
//console.log(str);

//method4:str.slice(start,end?):return part of stringnusing index



//method5:str1.concat(str2):join str2 with str1
//method6:str.replace(searchVal,newVal)
//method7:str.charAt(idx)


//NOTE:REMEMBER THAT ORIGINAL STRINGS ARE IMMUTABLE














