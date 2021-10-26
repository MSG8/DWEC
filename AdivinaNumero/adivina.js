'user strict'
const max = 101; //Constantes para cambiar con facilidad el maximo y minimo del programa
const min = 0;
num = (Math.floor(Math.random() * (max - min)) + min);
fallos = 0; //inicializo los fallos a 0 como variables globales para usarlo
val = true;

function rendir() //Funcion encargada del dialogo de cuando se rinde
{
	alert(" Usted se ha rendido despues de "+fallos+" fallos");
	window.close();
}

function probar() //Funcion encargada de los dialogos de resultados
{
	val = true;
	
	document.getElementsByName("adivinar")[0].classList.remove('error');
	adi = document.getElementsByName("adivinar")[0].value;
	// alert(adi); Salida de dato para comprobar error
	
	validadNumero(adi);
	
	if (val == true)
	{
		if (num == adi )
		{
			alert(" Usted adivino el número, cuenta con "+fallos+" fallos");
			window.close();
		}
		else
		{
			fallos =  fallos+1;
			if (num < adi )
			{
				alert(" El numero es menor al propuesto");
			}
			else
			{
				alert(" El numero es mayor al propuesto");
			}
		}
	}
	
}

function validadNumero(valor) //Funcion encargada de validar que el numero se encunetre entre un maximo y un minimo
{
	if (valor < 0 || valor > 100)
	{
		val = false;
		document.getElementsByName("adivinar")[0].value=null;
		document.getElementsByName("adivinar")[0].classList.add('error');
	}
}