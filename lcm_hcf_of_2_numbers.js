let a=prompt("enter 1st number:");
let b=prompt("enter 2n number:");
if(a>b){
    num=b;
    den=a;
}
else{
    num=a;
    den=b;
}
let r=num%den;
while(r!==0){
    num=den;
    den=r;
    r=num%den;
}
let hcf=den;
let lcm=(a*b)/hcf;
console.log(hcf,lcm);
