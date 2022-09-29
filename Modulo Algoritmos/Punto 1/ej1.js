// 1. Pide un número por teclado e indica si es un número primo o no. Un número primo es aquel que solo 
// puede dividirse entre 1 y sí mismo.
// Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.

let numeroPrimo =prompt("Ingresa un numero"); // Solicita numero por consola
let esnumeroPrimo= false; // Boleano para verificar el numero

for (let i=2; i<numeroPrimo; i++){ // El for recorre todos los numeros hasta el que ingresas anteriormente
    if(numeroPrimo % i === 0  ){ // Si el resto es 0 no es primo
    esnumeroPrimo=true; // al no ser primo el boleano cambia 
}
}

if(esnumeroPrimo === false){ // si se cumple esta condicion se mostrara por pantalla que es primo
   document.write("El numero ", numeroPrimo, " es Primo");
}else{
    document.write("El numero ", numeroPrimo, " no es primo"); // en caso de que no sea primo se mostrara este mensaje
}