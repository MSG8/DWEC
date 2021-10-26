//curso.js
//Esto es un comentario
/*Esto es un comentario con
  muchas líneas
  */

'user strict' //Activo modo estricto

//Formas de salida
console.log('Hola Mundo') //Salida por consola
document.write('Adios mundo cruel') //Escribe en el documento

function getRandomInt(min, max) {
  alert(Math.floor(Math.random() * (max - min)) + min);
}

alert('Viva mi Profe de Programación ' ) //Alerta en el documento

// function prueba()
// {
	// //document.open();
	// document.write("<p>Hola mundo!</p>");
	// document.write("<p>Soy un pez</p>");
	// document.write("<p>El numero es 42</p>");
	// //document.close();
// }


//Formas de entrada
var num = prompt('Dime algo cariño:')
console.log(num)

//Declaración de variables
var num //Declaro la variable
num = 7 //Es tipo Number
num = 3.141592
num = 6.022E23 //6'022·10^23
texto = 'Zapato' //Es tipo String
var booleano = true //Es tipo booleano
var nulo = null //Es tipo null
var noSe= undefined //Es tipo undefined
const PI = 3.141592  //Esto es una constante

/*
 var fecha = 12
console.log(feca +5) //muestra el error por el modo estricto
*/
    //var (no lo usaremos)
var texto = 'Tacón alto' //Permite Redeclarar y Reasignar
var texto = 7 //Redeclaración
texto = true //Reasignaciónote
        //Alcance (scope) global/local (función)

console.log(texto)
function funcion1(){
  var texto
  console.log(texto)
  texto=78
  console.log(texto)
}
funcion1()
console.log(texto)

    //let
let var1 = 7  //Let permite Reasignar pero no Redeclarar
              //Alcance de bloque
var1 = 8 //Reasignar
//let var1 = 8 //Redeclarar, no se puede

function funcion2(){
  let var1 = 7
}

if (loquesea){
  let var1 = 7
  //...
}

for(let i=0; i<7; i++){
  //...
}

//const, constante
//const PI = 3.141592  //Esto es una constante
//No se puede Reasignar ni Redeclarar

//Decisones
haySol = true
if(haySol){
  console.log('¡Que calor!')
}else{
  console.log('Lleva paraguas')
}

let num1 = 16
switch (num1) {
  case 4:
    console.log('aaaaa')
    break;
  case 5:
    console.log('HOLA')
    break;
  case true:
    console.log('bbbbbb')
    break;
  default:

}

//Bucles
for (let i=0;i<7;i++){
  console.info('Salida ' + i)
}

let i=0
while(i < 10){
  console.error('PFFFFFFF');
  i++
}
