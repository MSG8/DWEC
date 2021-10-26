import {Arma} from './arma.js';
export class Trabuco extends Arma //ES OBLIGATORIO LLAMAR AL CONSTRUCTOR DE LA CLASE PADRE
{
  constructor()
  {
    super(); //LLAMAMOS AL CONSTRUTOR PADRE, Y ASI TOMAMOS SU PARAMETROS, YA QUE AL PONER TU PROPIO CONSTRUTOR, NO LO LLAMA
    this.cargador = 1; // COMO EL TRABUCO TIENE SOLO 1 BALA EN EL CARGADOR, SE LOCAMBIAMOS
  }
  //CADA SUPER LLAMA A SU PADRE, POR EJEMPLO SI LLAMAS A super.cargador, llamas al atributo cargador de arma y no de trabuco, con los metodos tambien
  disparar()
  {
    console.log('PATA PUMMMM!');
  }
}
