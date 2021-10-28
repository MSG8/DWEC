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
  let formulario = document.forms[0];
  formulario.onsubmit = validar; //si se envia el formualrio (onsubmit) se realizara la funcion dada
  let comunidades = document.getElementById('comunidades');
  comunidades.onchange = extremadura;
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

  document.getElementById('apellido').value = document.getElementById('apellido').value.trim(); // quitamos espacios del fin y de principio del string
  if (!document.getElementById('apellido').value.includes(' ')) //el valor es una cadena de caracteres, si esta no tiene un espacio no enviara 
  {
    console.log('solo tiene un apellido'); //nombre del error
    evento.preventDefault(); //no enviar el formulario por defecto
  }

  if (!nif(document.getElementById('dni').value)) // si devuelve FALSE es que la validacion de la letra FALLO
  {
    console.log('letra del dni erronea'); //nombre del error
    evento.preventDefault(); //no enviar el formulario por defecto
  }

  if (document.getElementById('comunidades').value == 'vacio') // si se encuentra saleccionado la opcion por defecto fallara
  {
    console.log('comunidad no seleccionada'); //nombre del error
    evento.preventDefault(); //no enviar el formulario por defecto
  }

  if (document.getElementById('provincia').value == 'vacio') // si se encuentra saleccionado la opcion por defecto fallara
  {
    console.log('provincia no seleccionada'); //nombre del error
    evento.preventDefault(); //no enviar el formulario por defecto
  }

  if (!document.getElementById('radio1').checked && !document.getElementById('radio2').checked) // si se encuentra saleccionado la opcion por defecto fallara
  {
    console.log('gusto por el brocoli no seleccionado'); //nombre del error
    evento.preventDefault(); //no enviar el formulario por defecto
  }

  if (document.getElementById('radio1').checked && document.getElementById('comunidades').value == 'asturia') // si se encuentra saleccionado la opcion por defecto fallara
  {
    console.log('imposible que seas Asturiano y te guste el brocoli'); //nombre del error
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
  if (document.getElementById('comunidades').value == 'extremadura' ) 
  {
    provincias();
  }
  else
  {
    if (document.getElementById('borrar')) //si este elemento existe, lo borramos
    {
      document.getElementById('borrar').remove();
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