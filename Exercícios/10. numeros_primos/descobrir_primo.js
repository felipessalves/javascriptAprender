//Descobrir se um número é primo 

let n1 = 10
let divisível = 0

for(let i = n1; i <= n1 && i !== 0; i--){
    if (n1 % i  === 0){
        divisível += 1
    }            
}
if (divisível === 2){
    console.log('O número é primo!')    
}else{
    console.log('Como pode isso? O número não é primo!')
}



