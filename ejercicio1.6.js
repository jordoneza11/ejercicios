// 6. Pedir al usuario un numero y ver si es divisible para 5, 7 y 3
// Bosquejo
// ENT:: numero(leer)
// PRO: Si numero%5===0 o numero%7===0 o numero%3===0 Entoncfes
// Escribir "Su numero es es divisible para esos numeros"
// Sino
// Escribir "Su numero no es divisible para esos numeros"
// FinSi
const read = require('prompt-sync')();
numero=read("Ingrese un numero")
if (numero%5===0 || numero%7===0 || numero%3===0){
    console.log("Su numero es divisible para esos numeros")
}
else {
    console.log("Su numero no es divisible para esos numeros")
}