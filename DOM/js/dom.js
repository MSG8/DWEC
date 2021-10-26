/*
  dom.js
  creador= Manuel SOlis Gomez
  licencia= zero
*/
'use strict'

console.log('cargador');

function ejecutar()
{
  console.log('funciona ejecutar'); // comprobamos la funcion
  // let input = document.getElementById('iNombre'); //envia por puhntero a la variable que se hara un objeto la informacion de html input
  // console.log(input.value); //seleccionamos el atributo del objeto input que queremos

  let nombre = document.getElementsByTagName('input'); // los elementos cuyo nombre
  console.log(nombre[0].value, nombre[1].value, nombre[2].value);

  let p = document.querySelector('.c1') //Selector css por la clase, el primero solo
  // console.log(p.innerHTML);// innerHTML dices la parte HTML del documento con la clase c1
  console.log(p.outerHTML);//outherHTML dices la parte HTML del documento con la clase c1, incluyendo ese elemento

  let spans = document.querySelectorAll('.c1 span');
  console.log(spans);
  console.log(spans[1].outerHTML);

  //document.getElementsByClassName('c1');

  //MODIFICACION DEL DOM
  spans[1].innerHTML = '¡Viva la pepa!'; // Son atributos o metodos del objeto, aqui cambias el valor del atributo

  //MODIFICA ATRIBUTOS DEL ESTILO
  spans[0].style.color = 'blue';
  spans[0].style.fontSize = '20pt';

}


function mover()
{
  setInterval(movimiento, 10)
}

let posicion = 0;
let direccion = 1;
function movimiento()
{
  let p2 = document.querySelector('.c2');
  if(direccion==1)
  {
    p2.style.backgroundColor = 'blue';
    posicion += 5;
  }
  else
  {
    p2.style.backgroundColor = 'red';
    posicion -= 5; 
  }
  
  p2.style.left = `${posicion}px`;
  if(p2.style.left =='1200px' )
  {
    direccion = 0;
  }

  if(p2.style.left =='0px' )
  {
    direccion = 1;
  }
}

function construir()
{
  console.log('Construir');

  let div = document.getElementsByClassName('borde')[0];
  // console.log(div);
  // div.innerHTML = `<p>Este es un texto <span class="negrita">en negrita</span></p>`; //Este metodo no es eficaz para interfaz grafico, ya que no es eficaz, bien pa chapucillas

  let p = document.createElement('p'); // creas el elemento que quieras, solo se encuentra en el dom es decir en el documneto js
  div.appendChild(p) // Ahora lo metemos en su padre, cada vez que pulse el boton se añadara un p
  let nodoTexto = document.createTextNode('Esto es un texto...');
  p.appendChild(nodoTexto);
  let span = document.createElement('span'); // ELEMENT_NODE
  p.appendChild(span)
  console.log(span);
  span.classList.add('negrita');
  span.classList.add('borde');
  let nodoTextoSpan = document.createTextNode('Esto es un negrita...'); // TEXT_NODE
  span.appendChild(nodoTextoSpan);
  // ELEMENT_NODE Y TEXT_NODE

  let img = document.createElement('img');
  div.insertBefore(img, p);
  img.setAttribute('src', 'https://pajarokakariki.com/wp-content/uploads/2020/08/consejos-como-cuidar-cacatuas.jpg')


}

function destruirP() 
{
  console.log('destruir'); 
  // let div = document.getElementsByClassName('borde')[0];
  // console.log(div.innerHTML); 
  // let p = div.getElementsByTagName('p')[0];
  let p = document.querySelector('.borde p');
  // console.log(p.innerHTML);
  p.remove();
}

function destruirImg() 
{
  console.log('destruir'); 
  let img = document.querySelector('.borde img');
  img.remove();
}

function destruirTotal() 
{
  console.log('destruirTOTAL'); 
  let div = document.getElementsByClassName('borde')[0];
  while (div.firstElementChild) // si tienes un elemento  
  {
    div.removeChild(div.firstElementChild); // eliminas el hijo (el hijo del primer niño)
  }
  // div.remove()
}