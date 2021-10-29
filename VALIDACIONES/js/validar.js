/*
  validar.css
  Autor: Manuel Solis Gomez masogo008@gmail.com
  Livencia: gp3
*/
'use strict'
console.log('cargador');
window.onload = iniciar; //cuando se carge la pagina se abrira la funcion de iniciar
function iniciar() 
{
  let formulario = document.forms[0]; //Toma el formulario
  formulario.onsubmit = validar; //Si se envia el formualrio (onsubmit) se realizara la funcion dada
  let comunidades = document.getElementById('comunidades'); //Tomara el select de comunidades
  comunidades.onchange = extremadura; // Le añadimos que al cambiar el select realice la funcion dada
}
function validar(evento) 
{
  // return false // si se devuelve false no envia el formulario

  // if(!document.getElementById('cbox2').checked && !document.getElementById('cbox2').checked)
  // {
  //   console.log('marcadar check'); //nombre del error
  //   evento.preventDefault(); //no enviar el formulario por defecto
  // }
  // if (document.getElementById('nombre').value.length < 2) //largo del valor
  // {
  //   console.log('nombre corto'); //nombre del error
  //   evento.preventDefault(); //no enviar el formulario por defecto
  // }
  let numeroErrores = 0; // Variable que guardara el numero de errores de validacion
  borrarAvisos(); // Llama a la funcion que tomara y eliminara todos los avisos por pantalla
  document.getElementById('apellido').value = document.getElementById('apellido').value.trim(); // quitamos espacios del fin y de principio del string
  if (!document.getElementById('apellido').value.includes(' ')) //el valor es una cadena de caracteres, si esta no tiene un espacio no enviara 
  {
    numeroErrores += 1;
    mensajeError(2, 'Solo introducio un apellido'); //funcion para mandar el mensaje de error
  }
  if (!nif(document.getElementById('dni').value)) // si devuelve FALSE es que la validacion de la letra FALLO
  {
    numeroErrores += 1;
    mensajeError(0, 'DNI invalido, su letra no corresponde al numero'); //funcion para mandar el mensaje de error
  }
  if (document.getElementById('comunidades').value == 'vacio') // si se encuentra saleccionado la opcion por defecto fallara
  {
    numeroErrores += 1;
    mensajeError(6, 'Ninguna comunidad seleccionada'); //funcion para mandar el mensaje de error
  }
  if (!document.getElementById('radio1').checked && !document.getElementById('radio2').checked) // si se encuentra saleccionado la opcion por defecto fallara
  {
    numeroErrores += 1;
    mensajeError(7, 'Ninguna valor marcado'); //funcion para mandar el mensaje de error
  }
  if (document.getElementById('radio1').checked && document.getElementById('comunidades').value == 'asturia') // si se encuentra saleccionado la opcion por defecto fallara
  {
    numeroErrores += 1;
    mensajeError(7, 'Si eres Asturiano es imposible que te guste el brocoli'); //funcion para mandar el mensaje de error
  }
  if (document.getElementById('provincia')) // si se encuentra saleccionado la opcion por defecto fallara
  {
    if (document.getElementById('provincia').value == 'vacio') 
    {
      numeroErrores += 1;
      mensajeError(8, 'Ninguna provincia seleccionada'); //funcion para mandar el mensaje de error
    }
  }
  if (numeroErrores <= 0) // Si no tienes errores se enviara un mensaje de que se envio el formulario
  {
    alert('Formulario enviado');
  }
  else // Si tiene errores mandara un mensaje de formulario no enviado y no enviara el formulario
  {
    alert('Formulario no enviado, usted tiene '+numeroErrores+' errores');
    evento.preventDefault(); //no enviar el formulario por defecto
  }
}
function nif(dni) //validacion para dni, inspirado en https://donnierock.com/2011/11/05/validar-un-dni-con-javascript/
{
  let numero = parseInt(dni.substr(0,dni.length-1)); // tomamos la cadena desde su posicion de caracter 0 a la longitud dle dni(9) - 1(letra), la pasamos a entero
  let letra = dni.substr(dni.length-1,1); //tomo el ultimo caracter de la cadena
  let dniLetras= ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']; //array de cada letra que puede tomar
  numero = numero % 23; // dividimos el numero del dni entre 23 para obtener cual letra le pertenece al numero
  if (letra!=dniLetras[numero]) //si no coinciden dara un false
  {
    return false;
  }
  else
  {
    return true;
  }
}
function extremadura() 
{
  if (document.getElementById('comunidades').value == 'extremadura' )  //Si se encuentra el valor extremadura, creara el select
  {
    provincias(); //creamos el select
  }
  else
  {
    if (document.getElementById('borrar')) //si existe el select de las provincias y el select d ecomunidades no es extremadura
    {
      document.getElementById('borrar').remove(); //la borramos
    }
  }
}
function provincias() 
{
  console.log('provincias');
  //CREACION DE ELEMENTOS
  let div = document.createElement('div');
  let label = document.createElement('label');
  let select = document.createElement('select');
  let optionOculta = document.createElement('option');
  let optionBadajoz = document.createElement('option');
  let optionCaceres = document.createElement('option');
  //AÑADIR ATRIBUTOS A LOS ELEMENTOS
  div.setAttribute('id', 'borrar');
  label.setAttribute('for', 'provincia');
  select.setAttribute('name', 'provincia');
  select.setAttribute('id', 'provincia');
  optionOculta.setAttribute('selected', 'selected');
  optionOculta.setAttribute('hidden', 'hidden');
  optionOculta.setAttribute('value', 'vacio');
  optionBadajoz.setAttribute('value', 'badajoz');
  optionBadajoz.setAttribute('id', 'badajoz');
  optionCaceres.setAttribute('value', 'caceres');
  optionCaceres.setAttribute('id', 'caceres');
  //COLOCAR ELEMENTOS Y NODOS DE TEXTO
  div.appendChild(label);
  label.appendChild(document.createTextNode(' Provincia '));
  div.appendChild(select);
  select.appendChild(optionOculta);
  optionOculta.appendChild(document.createTextNode(' PROVINCIA '));
  select.appendChild(optionBadajoz);
  optionBadajoz.appendChild(document.createTextNode(' Badajoz '));
  select.appendChild(optionCaceres);
  optionCaceres.appendChild(document.createTextNode(' Caceres '));
  //COLOCAMOS EL BLOQUE
  let formulario = document.forms[0];
  let boton = document.getElementById('enviar');
  formulario.insertBefore(div, boton);
}
function mensajeError(posicionDiv, mensajeError) 
{
  let p = document.createElement('p'); //Creamos el elemento p que contendra nuestto mensaje
  p.classList.add('error'); //Añadimos la clase error, asi podremos identificarlos y colocar todos los estilos 
  let div = document.forms[0].getElementsByTagName('div')[posicionDiv]; //Tomamos el en el cual queremos añadir informacion
  p.appendChild(document.createTextNode(mensajeError)); //Metemos el mensaje de error de ese p
  div.appendChild(p); //Añadimos el p al div
  if (div.getElementsByTagName('input')[0]) //Si existe el input se cambiara el color de fondo
  {
    div.getElementsByTagName('input')[0].style.backgroundColor = '#F8CDC3';
  }
  else // Si no existe el input, se cambiara el color de fondo pero del select
  {
    div.getElementsByTagName('select')[0].style.backgroundColor = '#F8CDC3';
  }
}
function borrarAvisos() 
{
  let avisos = document.querySelectorAll('.error'); // Coge todos los elementos con la clase error
  for (let indice = 0; indice < avisos.length; indice++) 
  {
    avisos[indice].remove(); //Elimina todos los elementos
  }
  let input = document.getElementsByTagName('input');
  for (let indice = 0; indice < input.length; indice++) 
  {
    if (!input[indice].value == 'ENVIAR') 
    {
      input[indice].style.backgroundColor = 'white'; //Elimina todos los elementos
    }
  }
  let select = document.getElementsByTagName('select');
  for (let indice = 0; indice < select.length; indice++) 
  {
    select[indice].style.backgroundColor = 'white'; //Elimina todos los elementos
  }
}