// 10. Pedir al usuario 3 numeros y asignarlos en un arreglo
// Bosquejo
// ENT: numero1(leer); numero2(leer); numero3(leer); arreglo(leer)
// PRO: let arreglo[numero1,numero2,numero3]
// SAL: mostrar el mensaje
const read = require('prompt-sync')();
numero1=read("Ingrese un numero")
numero2=read("Ingrese otro numero")
numero3=read("Ingrese otro numero")
let arreglo=[numero1,numero2,numero3]
console.log(arreglo)