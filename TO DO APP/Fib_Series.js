let fibo=[1,2];
let number=30;
for(var i=2;i<=number;i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
}console.log(fibo);