// Implementar una función que recibe una lista de enteros L y un número entero n de forma
//que modifique la lista mediante el borrado de todos los elementos de la lista que tengan este
//valor.

function borrarElementos(i) { 
    let x = i.filter((item) => item != '2'); // filtra todos los numeros siempre y cuando no sean el 2
    return x; 
}
const L = ['1', '2', '45', '2', '5','4','2']; // array con numeros aleatorios
document.write(borrarElementos(L)) // se muestra en pantalla la lista sin los 2