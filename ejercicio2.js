// 2.1
const jedi = {nombre: "Luke Skywalker", edad: 19};

jedi.edad = 25;

// 2.2
let nombre = "Leia";
let apellido = "Organa";
let edad = 20;
console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.");

// 2.3
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

let total;
total = sable1.precio + sable2.precio;
console.log("El total a pagar es de " + total + " creditos galacticos.");

// 2.4
let precioBaseGlobal = 10000;

precioBaseGlobal = 25000;

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioFinal = precioBaseGlobal + nave1.precioBase;
nave2.precioFinal = precioBaseGlobal + nave2.precioBase;

console.log(`El precio final del ${nave1.nombre} es de ${nave1.precioFinal} creditos galacticos.`);
console.log(`El precio final del ${nave2.nombre} es de ${nave2.precioFinal} creditos galacticos.`);