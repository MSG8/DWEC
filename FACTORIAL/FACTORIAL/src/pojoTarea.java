
public class pojoTarea 
{
	private int valor;
	private int resultado;
	
	public int getValor() 
	{
		return valor;
	}
	public void setValor(int valor) 
	{
		this.valor = valor;
	}
	public int getResultado() 
	{
		return resultado;
	}
	public void setResultado(int resultado) 
	{
		this.resultado = resultado;
	}
	public pojoTarea(int valor, int resultado) 
	{
		super();
		this.valor = valor;
		this.resultado = resultado;
	}
	public pojoTarea() 
	{
		super();
	}
	
	public void calcularFactorial()
	{
		resultado=valor;
		
		while (valor > 1)
		{
			resultado=resultado*(valor-1); 
			valor=valor-1; 
		}
	}
}
