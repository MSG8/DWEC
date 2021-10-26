/*
  eventos.css
  Autor: Manuel Solis Gomez
  Livencia: gp3


*/
'use strict'

console.log('cargador');

window.onload = iniciar // al cargar toda la pagina se pasa a la funcion iniciar
let mapa = null;

function iniciar() 
{
  mapa = document.getElementsByTagName('img')[0];
  mapa.onclick = ponerSetas; //solo permite poner 1 manejador
  mapa.oncontextmenu = quitarSetas;
  // let todasSetas = []; 
  // for (let index = 0; index < document.getElementsByClassName('setas').length; index++) 
  // {
  //   todasSetas[index] = document.getElementsByClassName('setas')[index];
  // }

 // img.addEventListener('click', manejarClick ) //puedo llamar varias funciones de onclick a la vez
  //img.addEventListener('click', manejarClick2 ) //son para librerias de terceros, usada por el cliente y propietario
}

function ponerSetas(evento) 
{
  console.log('poner la imagen');  
  console.log(evento);
  
  let div = document.getElementsByTagName('div')[0];

  // let seta = document.getElementsByClassName('setas')[0];
  let setaVarias = document.createElement('img');
  setaVarias.setAttribute('src', 'https://es.seaicons.com/wp-content/uploads/2015/07/Retro-Mushroom-Super-3-icon.png')
  setaVarias.classList.add('setas');
  // seta.style.left = `${evento.clientX-20}px`;
  // seta.style.top = `${evento.clientY-20}px`;
  setaVarias.style.left = `${evento.clientX-20}px`;
  setaVarias.style.top = `${evento.clientY-20}px`;
  div.appendChild(setaVarias);
  //body.insertBefore(setaVarias, mapa);
}

function quitarSetas() 
{
  let div = document.getElementsByTagName('div')[0];

  while (div.firstElementChild) // si tienes un elemento  
  {
    div.removeChild(div.firstElementChild); // eliminas el hijo (el hijo del primer niño)
  }
}