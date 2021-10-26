import java.util.Scanner;

public class mantTarea 
{
		pojoTarea pojo = null;
		
		Scanner tecla = null;
		
	public mantTarea()
	{
		
		pojo = new pojoTarea();
		
		tecla = new Scanner(System.in);
		
		
		System.out.println("Sacar el factorial de un numero");
		
		do
		{
			System.out.print("\n\n Numero entero a sacar factorial: ");
			pojo.setValor(tecla.nextInt()); 
			if (pojo.getValor() <= 0)
			{
				System.out.print("\n Error en la entrada del valor a calcular");
			}
		} while (pojo.getValor() <=0);
		
		pojo.calcularFactorial();
		
		System.out.print("\n El resultado del factorial es = "+pojo.getResultado());
		
	}

}
