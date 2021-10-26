import {Persona} from './persona.js'; //Si se usa modulo el modo stricto por defectp
import {Trabuco} from './trabuco.js';
import {M16} from './m16.js'; // con ./ ya que te dice que esta en el mismo directorio
import {Arma} from './arma.js';

//Llamada asincrona por estar en xampp, en local es sincrona
console.log('js cargado');
class App // Creamos la clase principal para que al iniciar este objeto, se carge todo de forma sincrona con el constructor y despues inicie bien lo demas
{
  constructor()
  {
    window.onload = this.iniciar.bind(this);
  }
  iniciar()
  {
    //DOS RELACIONES ENTRE CLASE, HERENCIA: LA CLASE TRABUCO EXTIENDE O HEREDA DE LA CLASE ARMA
    //Y LAS RELACIONES DE USO, QUE NO HEREDA DE NADIE Y USA OTRA CLASE
    let p1= new Persona('juan');
    let p2= new Persona('Ana');
    p1.arma1 = new Trabuco(); // MANTIENE LOS METODOS DE ARMA, RELACION DE USO, CREO UN METODO PARA UNA CLASE QUE USO Y NO HEREDO
    //EL P1.ARMA1 ES UN NOMBRE DE ATRIBUTO
    p1.arma1.disparar();
    p2.arma1 = new M16(); // ESTAMOS CREANDO ATRIBUTOS SIN DEFINIRLO
    p2.arma1.disparar();
    //p2.arma1.getNumArma(); //NO TIENE SENTIDO QUE ESTE EN UN ARMA, NO ES UNA PRIOPIEDAD DEL ARMA

    console.log(Arma.contador);
    document.write(Arma.contador);
    Arma.getNumArma();
    // SE USA LA HERENCIA PARA CREAR UNA CLASE QUE ES UN TIPO DE LA CLASE PADRE, EJEMPLO BALONCESTO HEREDANDODE DEPORTE

    //-----------------------------------------------------------------------------------------------------------------------------------

    let a1 = new Trabuco();
    let a2 = new M16();
    let a3 = new Trabuco();
    let a4 = new Persona();
  }
}

new App();
