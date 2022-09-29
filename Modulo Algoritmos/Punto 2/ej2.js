// Escribe una aplicación que solicite al usuario que ingrese una contraseña cualquiera.
// Después se le pedirá que ingrese nuevamente la contraseña, con 3 intentos. Cuando
// acierte ya no pedirá más la contraseña y mostrará un mensaje diciendo “Felicitaciones,
//recordás tu contraseña”. Si falla luego de 3 intentos se mostrará el mensaje “Tenes que
// ejercitar la memoria”. Los mensajes quedarán en pantalla a la espera que el usuario
// presione una tecla, luego de esto se cerrará el programa.

let contrasena = prompt("Escribe la contraseña"); // Pedimos una contrasena por pantalla
let intentos = 3; // Creamos una variable almacenando los intentos

for (let i = 0; i < 3; i++) { // ciclo repetitivo hasta 3 intentos 
    let intento = prompt("Repite la contraseña"); // pedimos que repita la contraseña
    if (contrasena === intento) { // condicion 
        alert("Felicitaciones, recordás tu contraseña"); 
        break; // Si las contrasenas son iguales se detiene el bucle
    }
    else {
        intentos--
        if(intentos === 0){
            alert("Tenes que ejercitar la memoria"); // si no son iguales se ejecuta 3 veces y te muestra este mensaje
        }
    }
}