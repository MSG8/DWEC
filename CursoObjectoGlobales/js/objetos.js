'use strict'

console.log('cargado js');

let fecha1 = new Date();// fecha actual
// console.log(fecha);

let fecha2 = new Date(2021,8,29); // el mes empieza en 0
console.log(fecha2);
const meses = ['enero','febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const semana = [ 'domingo', 'lunes','martes', 'miercoles', 'jueves', 'viernes', 'sabado'];

let hoy = `hoy es ${fecha1.getDate()} del mes ${meses[fecha1.getMonth()+ 1]} y el dia ${semana[fecha1.getDay()]}` // coge los dias Date, coge el mes en numero y lo paso al array y tomo el dia de la semana y lo pasa al array
console.log(hoy);

let ms1 = fecha1.getTime(); // Pasas a milisegundos
console.log(`Desde los beatles han pasado ${ms1} ms`);

let dentro5Dias = ms1 + 5*24*60*60*1000; // calculo los ms que son
dentro5Dias = new Date(dentro5Dias); // pongo esos milisegundos en una date new Date()
console.log(`Dentro de 5 dias es ${dentro5Dias}`); // los muestro

let arrayEj = [];
let arrayEj2 = new Array();

let nombre1 = 'Ana';
let nombre2 = 'Ángel';
let nombre3 = 'Abel';

if (nombre2 > nombre3)
{
  console.log(`nombre ${nombre2} es mayor que ${nombre3}`);
}
else
{
  console.log(`nombre ${nombre3} es mayor que ${nombre2}`);
}

let texto = 'En un lugar de La Mancha, de cuyo nombre no quiero..'
console.log(texto.charAt(6));
console.log(texto.indexOf('l')); // un parametro te dice donde esta ese caracter

//la posicion de la primera e despues de la coma
console.log(texto.indexOf('e',texto.indexOf(','))); // dos parametros te dicen donde esta elk caracter y a partir de donde

console.log(texto.includes('La Mancha'));
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.substr(4,8)); //posicion inicial y longitud, corta un string

//CALCULADORA
// MIRAR LOS MATH
console.log(Math.floor(Math.PI));

//NUMBER
let entrada = '42zapato';

console.log(isNaN(entrada)); // si no es un numero NotANumber
console.log(Number.parseInt(entrada)); // lee el string y saca solo el nunmero en int
entrada = '3.1415PiñaColada';
console.log(Number.parseFloat(entrada));// lee el string y saca solo el nunmero en float

//Estructura avanzadas de datos
//Conjuntos - set
let amigos = new Set();
amigos.add('Ana');
amigos.add('Juan');
amigos.add('Conde Draco');
amigos.add('Conde Draco');

console.log(amigos);
console.log(amigos.size);

for (var amigo of amigos) //el forof es la forma de recorder el Set no es ordenado
{
  console.log(amigo);
}

amigos = [];
amigos.push('Ana');
amigos.push('Juan');
amigos.push('Conde Draco');
amigos.push('Conde Draco');

console.log(amigos);
console.log(amigos.length);

for (let i = 0; i < amigos.length; i++) //el for es la forma de recorder el Array ya que es ordenado
{
  console.log(amigos[i]);
}

//clear vacia el Set
//delete borra un elemento del Set

//MAPA
let coches = new Map()
coches.set('BA-9282-ZT', 'Porsche');
coches.set('TO-666-JO', 'Seat Ibiza');
coches.set('ABC-DEF', 'Tesla Turbo');

console.log(coches);

//SIMBOL
// SIRVE PARA GENERAR UN NUNMERO IDENTIFICADOR QUE SEA UNICO Y INMUTABLE
// PARA EL OBJETO USUARIO, LE PONGO UN IDENTIFICADOR A CADA TIPO DE USUARIO
Usuario.Admin = Symbol();
Usuario.Pringui = Symbol();
Usuario.Gestor = Symbol();

if (usuario1 = Usuario.Admin)
{
  console.log('Es un administrador');
}
