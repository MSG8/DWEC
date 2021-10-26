export class Arma //ESTE METODO ES EL PADRE Y EL DE POR DEFECTIO, AUNQUE UN HIJO CAMBIEVARIAS COSAS
{
  constructor()
  {
    this.cargador=0;
    this.balas=0;
    Arma.contador++; //Son atributos que pertenece4n a las clases, para llamarla llamas a su nombre y lo comparte toda la clase
  }

  cargar(balas)
  {
    this.balas += balas; // el += es un incrementador, suma y implementa como /= */ %= -=
    if (this.balas > this.cargador)
    {
      this.balas = this.cargador;
    }
  }

  disparar()
  {
    console.log('PUMMM!');
  }

  static getNumArma()  // Se hace un metodo estatico, que se hace con la palabra static y se crea dentro de la clase que tiene relacion
  {
    console.log(`El numero de arma es ${Arma.contador}`);
  }

  // getNumArma() // los metodos estan en los objetos, si quiero que pertenezca a la clase se hace estatico, de esta forma no tiene logica en la clase Arma
  // {
  //   console.log(`El numero de arma es ${Arma.contador}`);
  // }
}
Arma.contador = 0; // ATRIBUTO ESTATICO, ES DE UNA CLASE Y NO DE UN OBJETO, SE INICIALIZA A 0 Y ES COMO UNA VARIABLE GLOBAL
// Arma.getNumArmas = function()  // Asi lo llamas fuera de la clase pero no se usa por orden
// {
//   console.log(`El numero de arma es ${Arma.contador}`);
// }
// tienes que iniciarlo la clase antes de iniciar un atributo con la clase
