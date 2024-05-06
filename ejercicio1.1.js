// 1. Pedir al usuario 3 numeros y mostrar re resultado de multiplicarlos
// Bosquejo
// ENT: numero1(leer); numero2(leer); numero3(leer); resultado(calcular)
// PRO: resultado=numero1*numero2*numero3
// Escribir "El resultado es " ,resultado
// SAL: mostrar el mensaje
const read = require('prompt-sync')();
numero1=read("Ingrese un numero")
numero2=read("Ingrese otro numero")
numero3=read("Ingrese otro numero")
numero1=parseInt(numero1)
numero2=parseInt(numero2)
numero3=parseInt(numero3)
resultado=numero1*numero2*numero3
console.log("El resultado es " ,resultado)