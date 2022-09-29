

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