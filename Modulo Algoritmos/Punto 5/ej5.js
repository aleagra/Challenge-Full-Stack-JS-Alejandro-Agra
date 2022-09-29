// 5. Pedir al usuario que ingrese un número repetidamente hasta que ingrese un -1 y en ese
// caso se terminará el programa.
// Al terminar, mostrará lo siguiente:
// a. – mayor número introducido
// b. – menor número introducido
// c. – suma de todos los números
// d. – suma de los números

let nums = [];
let total=0;
while(true) {   // ciclo repetitivo 
    let userNum = prompt("Ingresa un numero"); // pedimos un numero por pantalla pasar guardarlo en la variable
    nums.push(userNum); // seguimos un lugar en el array

    if (userNum == -1) {
        nums.pop()
        break; // con -1 se termina el bucle y con pop eliminamos este -1 de la lista 
    } 
}
let max = Math.max.apply(null,nums);    // creamos una variable para guardar el numero maximo
let min = Math.min.apply(null,nums);    // creamos una variable para guardar el numero minimo

document.write('mayor numero ingresado ', max , "<br>" ); // mostramos en pantalla el mayor numero ingresado
document.write('menor numero ingresado ', min , "<br>" ); // mostramos en pantalla el menor numero ingresado
console.log(nums);
"<br>"

for (let i = 0; i < nums.length; i++) {
   if(nums[i] > 0 ){
    total += nums[i];
   }
}
document.write('suma total de los numeros ingresados ', total); // muestra en pantalla los numeros ingresados