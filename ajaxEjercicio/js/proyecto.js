/**
 *   Pruebas cookies
 *   Probaremos los atributos  de las cookies y como colocarlas
 *   @author Miguel Jaque <masogo008@gmail.com>
 *   @license GPL-3.0-or-later
 *   Ref: https://spdx.org/licenses/
 *
 *   Ref JSDoc: https://jsdoc.app/
 */
'use strict'
console.log('Cargado JS');
window.onload = carga;
function carga()
{
    document.getElementById('boton3').onclick = ejer3;
    document.getElementById('boton4').onclick = ejer4;
}
function ejer3()
{
    let ruta = 'https://www.omdbapi.com/?i=tt3896198&apikey=f02e43b0&t=';
    let titulo = document.getElementById('titulo').value;

    fetch(ruta+titulo) //hago una promesa de la api
        .then(respuesta => respuesta.json()) //responde un objeto json y no un text0
        .then(objeto => document.getElementById('ver3').textContent=objeto.Director)
        .catch(error => console.log('hemos tenido el error '+error));
}

function ejer4()
{
    let mes=document.getElementById('mes').value
    fetch('datosTiempo.json') //hago una promesa del json
        .then(respuesta => respuesta.json()) //responde un objeto json y no un text0
        .then(objeto => document.getElementById('ver4').textContent=objeto.mes)
        .catch(error => console.log('hemos tenido el error '+error));
}