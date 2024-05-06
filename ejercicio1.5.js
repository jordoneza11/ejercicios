// 5. Pedir al usuario un numero y ver si es multiplo de 3
// Bosquejo
// ENT: numero(leer)
// PRO: Si numero%3===0 Entonces
// Escribir "Su numero es multiplo de 3"
// Sino
// Escribir "Su numero no es multiplo de 3"
// FinSi
// SAL: mostrar el mensaje
const read = require('prompt-sync')();
numero=read("Ingrese un numero")
if (numero%3===0){
    console.log("Su numero es multiplo de 3")
}
else {
    console.log("Su numero no es multiplo de 3")
}