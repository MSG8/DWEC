'use strict';
let personas=[];
const numeroPersona = 5;
let sueldoTotal=0;

for (let indice = 0; indice < numeroPersona; indice++)
{

  let sueldo=prompt(`Sueldo del empleado ${indice} : `);
  while (isNaN(sueldo) || sueldo < 100 || sueldo > 500)
  {
    sueldo=prompt(`Fallo en el tipo de valor, repita el sueldo del empleado ${indice} : `);
  }
  personas[indice]=sueldo;
}

for (let indice = 0; indice < numeroPersona; indice++)
{
  if (personas[indice] >= 100 && personas[indice] <= 300)
  {
    alert(`El empleado ${indice} tiene un sueldo entre 100$ y 300$`);
  }

  if (personas[indice] >= 300)
  {
    alert(`El empleado ${indice} tiene un sueldo mayor a 300$`);
  }
}

for (let sueldo of personas)
{
  sueldoTotal = sueldoTotal + Number(sueldo);
  console.log(sueldo);
}
alert(`Los gastos totales del sueldo es : ${sueldoTotal}`);
