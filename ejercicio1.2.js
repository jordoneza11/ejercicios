// 2. Pedir al usuario dos numeros y mostrar cual es mayor
// Bosquejo
// ENT: numero1(leer); numero2(leer)
// PRO: Si numero1>numero2 Entonces
// Escribir "El" ,numero1, " es mayor"
// Sino
// Escribir "El" ,numero2, " es menor"
// FinSi
// SAL: mostrar el mensaje
const read = require('prompt-sync')();
numero1=read("Ingrese un numero")
numero2=read("Ingrese otro numero")
numero1=parseInt(numero1)
numero2=parseInt(numero2)
if (numero1>numero2){
    console.log("El" ,numero1, " es mayor")
}
else {
    console.log("El" ,numero2, " es menor")
}
