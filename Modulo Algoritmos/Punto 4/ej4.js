// 4. Generar un número aleatorio comprendido entre 0 y 1000. Pedir, a continuación, al
// usuario adivinar el número escogido por el ordenador. Para ello, debe introducir un
// número comprendido entre 0 y 1000. Se compara el número introducido con el
// calculado por el ordenador y se muestra en la consola "es mayor" o "es menor" en
// función del caso. Se repite la operación hasta que el usuario encuentra el número.

var max=1000; // creamos una variable con el maximo
var min =0;  // creamos una variable con el minimo

var numerom = Math.random()*(max-min) + min;  // se genera un numero aleatorio entre esas variables
numerom = parseInt(numerom);

  var num;
  while(true){  // hasta que no se adivine el numero se repite el bucle
      num = prompt("Ingrese un número por favor: ");  // pedimos adivinar el numero
      if (num == numerom){
        alert("Número igual"); // alerta para decirte que es igual
        break; // el break detiene el blucle 
      }else if(num > numerom){ // si el numero es menor te lo dira por pantalla
        alert("el numero es menor");
      }
      else if(num < numerom){
        alert("el numero es mayor"); // si el numero es mayor te lo dira por pantalla
      }
  }