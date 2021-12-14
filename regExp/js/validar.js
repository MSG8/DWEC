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
  document.getElementById('ip').onblur = comprobarIP;
  document.getElementById('matricula').onblur = comprobarMat;
  document.getElementById('matriculaVie').onblur = comprobarMatVie;
  document.getElementById('dni').onblur = comprobarDni;
  document.getElementById('fecha').onblur = comprobarFecha;
  document.getElementById('postal').onblur = comprobarPostal;
  document.getElementById('correo').onblur = comprobarCorreo;
  document.getElementById('url').onblur = comprobarUrl;
}
function comprobarIP() 
{
  console.log('comprobar');
  let valIp = new RegExp(/^(\d{1,3}\.){3}\d{1,3}$/);

  if (document.getElementById('ip').value.match(valIp)) // Para el string
  {
    alert('valido IP');
  }
  else
  {
    alert('invalido IP');
  }
}
function comprobarMat() 
{
  let valMat = new RegExp (/^\d{4}[A-Z]{3}$/);

  if (valMat.test(document.getElementById('matricula').value)) 
  {
    alert('matricula valido ');
  } 
  else 
  {
    alert('matricula no valida');
  }
}
function comprobarMatVie() 
{
  let valMatAnt = new RegExp (/^[A-Z]{1,2}\d{4,5}[A-Z]{0,2}$/);

  if (valMatAnt.test(document.getElementById('matriculaVie').value)) 
  {
    alert('matricula valido ');
  }
  else 
  {
    alert('matricula no valida');
  }
}
function comprobarDni() 
{
  let valDni = new RegExp (/^\d{8}[TRWAGMYFPDXBNJZSQVHLCKE]{1}$/);

  if (valDni.test(document.getElementById('dni').value)) 
  {
    alert('dni valido ');
  }
  else 
  {
    alert('dni no valida');
  }
}
function comprobarFecha() 
{
  let valFecha = new RegExp (/^\d{1,2}\/\d{1,2}\/\d{4}$/);

  if (valFecha.test(document.getElementById('fecha').value)) 
  {
    alert('fecha valido ');
  }
  else 
  {
    alert('fecha no valida');
  }
}
function comprobarPostal() 
{
  let valPostal = new RegExp (/^\d{5}$/);

  if (valPostal.test(document.getElementById('postal').value)) 
  {
    alert('postal valido ');
  }
  else 
  {
    alert('postal no valida');
  }
}
function comprobarCorreo() 
{
  let valCorreo = new RegExp (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);

  if (valCorreo.test(document.getElementById('correo').value)) 
  {
    alert('correo valido ');
  }
  else 
  {
    alert('correo no valida');
  }
}
function comprobarUrl() 
{
  let valUrl = new RegExp (/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/i);

  if (valUrl.test(document.getElementById('url').value)) 
  {
    alert('url valido ');
  }
  else 
  {
    alert('url no valida');
  }
}