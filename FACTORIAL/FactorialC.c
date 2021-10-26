#include <stdio.h>
#include <math.h>
#include <ctype.h>
#include <conio.h>

	//FUNCIONES
	
	int introducirValor (void);
	int calcularFactorial (int v);
	
main()
{
	int v;
	
	printf ("\n PROGRAMA PARA CALCULAR EL FACTORIAL DE UN NUMERO");
	
	v=introducirValor();
	
	printf("\n El resultado del factorial es = %d",calcularFactorial(v));
}

int introducirValor(void)
{
	int v;
	
	do
	{
		printf ("\n\n Numero entero a sacar factorial: ");
		scanf ("%d",&v);
		if (v <= 0)
		{
			printf ("\n Error en la entrada del valor a calcular");
		}
	} while (v<=0);
	
	return v;
}

int calcularFactorial (int v)
{
	
	int r=v; 
	
	while (v > 1)
	{
		r=r*(v-1); 
		v=v-1; 
	}
	
	return r;
}
