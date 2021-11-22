/*
  validar.css
  Autor: Manuel Solis Gomez masogo008@gmail.com
  Livencia: gp3
*/
'use strict'
console.log('cargador');
window.onload = iniciar;
function iniciar() 
{
  document.getElementById('ip').onblur = comprobar;
}
function comprobar() 
{
  console.log('comprobar');
  let valIp = new RegExp(/^(\d{1,3}\.){3}\d{1,3}$/);

  if (document.getElementById('ip').value.match(valIp)) // Para el string
  {
    alert('valido');
  }
  else
  {
    alert('invalido');
  }

  console.log(fetch(datos.json));

  // if (valIp.test(document.getElementById('ip').value))  //Para la ExpReg
  // {
  //   alert('valido');
  // }
  // else
  // {
  //   alert('invalido');
  // }
}