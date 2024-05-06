// 4. Pedir al usuario dos nombres y mostrar si es mayor, menor o igual
// Bosquejo
// ENT: nombre1(leer); nombre2(leer)
// PRO: Si nombre1>nombre2 Entonces
// Escribir nombre1, "es mayor que" ,nombre2
// Sino Si nombre1<nombre2 Entonces
// Escribir nombre2, "es menor que" ,nombre1
// Sino
// Escribir "Su nombres son iguales"
// FinSi
// SAL: mostra el mensaje
const read = require('prompt-sync')();
nombre1=read("Ingrese un nombre")
nombre2=read("Ingrese otro nombre")
if (nombre1>nombre2) {
    console.log(nombre1, "es mayor que" ,nombre2)
}
else if (nombre1<nombre2){
    console.log(nombre2, "es menor que" ,nombre1)
}
else {
    console.log("Sus nombres son iguales")
}