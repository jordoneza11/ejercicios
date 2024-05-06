// 7. Pedir al usuario el precio de su producto y calcular el precio final de ese producto con un descuento de 12%
// Bosquejo
// ENT: numero(leer;) precioProducto(leer); descuentoProducto(calcular); precioFinal(calcular)
// PRO: Escribir "Ingrese el precio se su producto"
// Leer precioProducto
// descuentoProducto= precioProducto*0.12
// precioFinal= precioProducto-descuentoProducto
// Escribir "El precio final de su producto es " ,precioFinal
// SAL: mostrar el mensaje
const read = require('prompt-sync')();
precioProducto=read("Ingrese el precio de su producto")
precioProducto=parseFloat(precioProducto)
descuentoProducto=precioProducto*0.12
precioFinal=precioProducto-descuentoProducto
console.log("El precio final de su producto es" ,precioFinal)