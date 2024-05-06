// 9. Pedir al usuario sus 3 notas y ver si aprobo el año o no
// Bosquejo
// ENT: nota1(leer); nota2(leer); nota3(leer); notaFinal(calcular)
// PRO: notaFinal=nota1+nota2+nota3/3
// Si notaFinal>70 Entonces
// Escribir "Usted aprobo"
// Sino
// Escribir "Usted reprobo"
// FinSi
// SAL: mostrar el mensaje
const read = require('prompt-sync')();
nota1=read("Ingrese su 1ra nota")
nota2=read("Ingrese su 2da nota")
nota3=read("Ingrese su 3ra nota")
nota1=parseFloat(nota1)
nota2=parseFloat(nota2)
nota3=parseFloat(nota3)
notaFinal=nota1+nota2+nota3/3
if (notaFinal>7){
    console.log("Usted aprobo")
}
else {
    console.log("Usted no aprobo")
}