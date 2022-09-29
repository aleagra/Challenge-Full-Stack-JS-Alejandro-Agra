//Construir una función que sume los elementos de una lista de enteros recursivamente.

function sumarEnteros(array) {

  let suma = 0; // creamos una variable para guardar la suma del arreglo
  for(let i in array){ // for dentro del arreglo para poder recorrerlo
  suma += (array[i]);  // guardamos en otra variable la suma
  }
  return suma; // retornamos 
}
let numeros = [1,3,4,6,5,43]; // creamos el arreglo con la lista de numeros
document.write(sumarEnteros(numeros)); // mostramos por pantalla el resultado de la suma 