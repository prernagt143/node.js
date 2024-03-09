let n=prompt("enter the number:");
let fmax=0;
let smax=0;
let tmax=0;
for(let i=1;i<=n;i++){
    let a=prompt("enter the number:");
    if(fmax<a){
        tmax=smax;
        smax=fmax;
        fmax=a;
    }
    if(smax<a){
        smax=fmax;
        fmax=a;
    }
    if(tmax<a){
        fmax=a;
    }

}
console.log(tmax);
