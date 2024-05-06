// 8. Pedir al usuario 3 numeros y sumarlos entre si para luego multiplicarlos por 6
// Bosquejo
// ENT: numero1(leer); numero2(leer); numero3(leer); multiplicacion(calcular); suma(calcular)
// PRO: suma=numero1+numero2+numero3
// multiplicacion= suma*6
// Escribir "El resultado de esa operacion es" ,multiplicacion
// SAL: mostrar el mensaje
const read = require('prompt-sync')();
numero1=read("Ingrese un numero")
numero2=read("Ingrese otro numero")
numero3=read("Ingrese otro numero")
numero1=parseInt(numero1)
numero2=parseInt(numero2)
numero3=parseInt(numero3)
suma=numero1+numero2+numero3
multiplicacion=suma*6
console.log("El resultado de esta operacion es" ,multiplicacion)