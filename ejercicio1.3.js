// 3. Pedir al usuario un numero y ver si es divisible para 5
// Bosquejo
// ENT: numero(leer)
// PRO: Si numero%5===0 Entonces
// Escribir "Su numero es divisible para 5"
// Sino
// Escribir "Su numero no es divisible para 5"
// SAL: mostra el mensaje
const read = require('prompt-sync')();
numero=read("Ingrese un numero")
numero=parseInt(numero)
if (numero%5===0){
    console.log("Su numero es divisible para 5")
}
else {
    console.log("Su numero no es divisible para 5")
}
