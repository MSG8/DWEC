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
    this.generadorPalabra = window.setInterval(this.generarPalabra.bind(this), 3000);
    this.animador = window.setInterval(this.vista.moverPalabra.bind(this.vista), 200);
    this.divPalabras = document.getElementById('divPrincipal');
    this.vista.div = this.divPalabras;
    window.onkeypress = this.pulsar.bind(this); //bind es cuando se ejecute pulsar es sobre que objeto funciona
  }

  pulsar(evento)
  {
    let letra = evento.key //implementa segun tu teclado
    console.log(`La letra pulsada es ${letra}`);
    let palabras = this.divPalabras.querySelectorAll('.palabra');
    for (let palabra of palabras) 
    {
      let span = palabra.children.item(0);
      let nodoTexto = palabra.childNodes[1];
      let textoRestante = nodoTexto.nodeValue;
      let primeraLetraTextoRestante = textoRestante.charAt(0);
      if (letra == primeraLetraTextoRestante) 
      {
        span.textContent += letra
        nodoTexto.nodeValue = nodoTexto.nodeValue.substr(1);
        console.log(nodoTexto);
        if (nodoTexto.nodeValue.length == 0) 
        {
          palabra.remove();
          this.vista.cantidadPuntos(this.modelo.puntuacion(100)); //usamos un metodo del modelo de datos pars que al desaparecer la palabra, de 100 puntos mas y de vista para mostrarlo
        } 
      }
      else
      {
        //queremos limpiar el span
        let limpiarFrase = span.textContent + textoRestante;
        span.textContent = '';
        nodoTexto.nodeValue = limpiarFrase;
      }
    }

  }

  generarPalabra()
  {
    //console.log('Generando palabras nuevas');
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
    let span = document.createElement('span');
    divPalabra.appendChild(span);
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
    this.cantidadPuntos(app.modelo.puntuacion(-50));
  }

  cantidadPuntos(puntos)
  {
    let h2 = document.getElementsByTagName('h2')[0];
    if (h2.textContent.length != 0) 
    {
      h2.firstChild.remove();
    }
    h2.appendChild(document.createTextNode(puntos))
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
    this.puntos = 0 //Iniciamos sin puntos
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
  /**
   * 
   * Metodo usado para sumar o restar puntos 
   * 
   */
  puntuacion(cambioPuntos)
  {
    this.puntos += cambioPuntos;
    return this.puntos;
  }
}

let app = new Juego(); //este es this 