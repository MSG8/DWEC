/*
  juego.css
  @autor: Manuel Solis Gomez masogo008@gmail.com
  @license: gp3
*/
'use strict'
console.log('cargador');
/**
 * 
 * clase Juego, es el controlador
 * 
 */
class Juego 
{
  /**
   * 
   * inicia el programa
   * 
   */
  constructor()
  {
    this.vista = new Vista();
    this.modelo = new Modelo();
    this.animador = null;
    this.generadorPalabra = null;
    this.divPalabras = null;
    window.onload= this.iniciar.bind(this);
  }
  /**
   * 
   * metodo iniciar de Juego, sirve paraa llamar a las diferentex partes del programa
   * 
   */
  iniciar()
  {
    console.log('iniciando...');
    // console.log(this);
    this.generadorPalabra = window.setInterval(this.generarPalabra.bind(this), 1500);
    this.animador = window.setInterval(this.vista.moverPalabra.bind(this.vista), 200);
    this.divPalabras = document.getElementById('divPrincipal');
    this.vista.div = this.divPalabras;
  }
  generarPalabra()
  {
    console.log('Generando palabras nuevas');
    let nuevaPalabra = this.modelo.crearPalabra();
    this.vista.dibujar( nuevaPalabra);
  }
}
/**
 * 
 * Es la clase Vista y contiene los elementos visibles para el cliente
 * 
 */
class Vista
{

  constructor()
  {
    this.div = null;
  }
  /**
   * Dibuja el area de las pabras del juego
   * @param {*} divContenedor Contiene el elemento contenedor de las palabras
   * @param {*} nuevaPalabra Contiene la palabra que usaras
   */
  dibujar(nuevaPalabra)
  {
    let divPalabra = document.createElement('div');
    divPalabra.classList.add('palabra');
    divPalabra.appendChild(document.createTextNode(nuevaPalabra));
    this.div.appendChild(divPalabra);
    divPalabra.style.top= '0px';
    divPalabra.style.left= Math.floor(Math.random() * 85)+'%';
    divPalabra.style.backgroundColor= 'rgb('+Math.floor(Math.random() * 255)+','+Math.floor(Math.random() * 255)+','+Math.floor(Math.random() * 255)+')';
    console.log( divPalabra.style.left);
  }
  /**
   * 
   * Mueve las palbras del juego
   * 
   */
  moverPalabra()
  {
    //buscar todas las palabras del div
    let palabras = this.div.querySelectorAll('.palabra');

    //para cada palabra subes su atributo top
    for (const palabra of palabras) 
    {
      let top = parseFloat(palabra.style.top);
      top +=0.5;
      // si llega al suelo se va 
      if (top >= 51) 
      {
        this.matarme(palabra);  
      }
      palabra.style.top = `${top}em`;
    }

  }
  matarme(divSuicida) 
  {
    divSuicida.remove();
  }
}

/**
 * 
 * Clase Modelo, encargado del modelo de datos d ela apliucacion
 * 
 */
class Modelo
{
  /**
   * 
   * Lista de palabras
   * 
   */
  constructor()
  {
    this.lista = ['juan', 'amigo', 'adios', 'hola'];
  }
  /**
   * 
   * metodo que devuelve una palabra
   * 
   */
  crearPalabra()
  {
    return this.lista[Math.floor(Math.random() * this.lista.length)]
  }
}

let app = new Juego();