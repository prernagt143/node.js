//Write a program to take the basic salary of an employee and calculate its Gross salary according to the following: (Gross salary is the sum of basic salary, HRA, and DRA)
//Basic Salary <= 10000 : HRA = 20%, DA = 80%
//Basic Salary <= 20000 : HRA = 25%, DA = 90%
//Basic Salary > 20000 : HRA = 30%, DA = 95%

let b_salary=prompt("enter the salary:");
if(b_salary<=10000){
    HRA=(b_salary/100)*20;
    DA=(b_salary/100)*80;
}
else if(b_salary<=20000){
    HRA=(b_salary/100)*25;
    DA=(b_salary/100)*90;
}
else{
    HRA=(b_salary/100)*30;
    DA=(b_salary/100)*95;
}
console.log(HRA),console.log(DA);
let total_salary=parseInt(b_salary)+parseInt(HRA)+
parseInt(DA);
console.log(total_salary);