let fact = 1;
let i = 1;
// Bucle while con bifurcación if y sentencia break para calcular el factorial de 10
while(true){
    fact = fact * i;
    i++;
    if(i > 10){
        break
    }
}

console.log(fact)