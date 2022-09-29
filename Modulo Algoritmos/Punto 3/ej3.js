// Por teclado se ingresa el valor hora de un empleado. Posteriormente se ingresa el
// nombre del empleado, la antigüedad y la cantidad de horas trabajadas en el mes. Se
// pide calcular el importe a cobrar teniendo en cuenta que al total que resulta de
// multiplicar el valor hora por la cantidad de horas trabajadas. Además, si el empleado
// tiene más de 10 años de antigüedad hay que sumarle la cantidad de años trabajados
// multiplicados por $30. Imprimir en pantalla el nombre, la antigüedad y el total a cobrar.

let valorHora = prompt("Ingresa el valor de la hora"); // pedimos ingresar los datos de la consigna
let nombre = prompt("Ingresa tu nombre"); 
let antiguedad = prompt("Ingresa la antiguedad"); 
let cantidadHoras = prompt("Ingresa la cantidad de horas trabajadas");  
let salario; // guardamos el salario total en una variable 
let agregado; // guardamos el agregado por antiguedad

salario = valorHora*cantidadHoras; // calculo del salario

if (antiguedad > 10) {  // en caso que supere la antiguedad se multiplica por 30 y se guarda en el agregado para luego
    agregado = antiguedad *30; 
    salario += agregado; // ser sumado al salario total
}

document.write("Nombre : ", nombre,  "<br>", // mostramos por pantalla los datos 
               "Antiguedad : ", antiguedad, "<br>",
               "A cobrar : ", salario)