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
window.onload = iniciar;

function iniciar() 
{
    console.log(document.cookie);
    let fecha = new Date();
    fecha.setDate(fecha.getDate()+30);
    document.cookie = 'usuario=Manuel;expires='+fecha;
    document.cookie = 'usuario=;expires='+fecha; //lo modificas y esta vacia
}
