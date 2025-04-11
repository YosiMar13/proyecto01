// Ejemplo 01 - Suma de elementos

const prompt = require('prompt-sync')();

// Función para sumar los elementos de un array
function sumarElementosArray(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  return suma;
}

// Función para solicitar números al usuario
function solicitarNumeros() {
  let numeros = [];
  let cantidad = parseInt(prompt("¿Cuántos números deseas ingresar?"));

  while (isNaN(cantidad) || cantidad <= 0) {
    console.log("Por favor, ingresa un número válido.");
    cantidad = parseInt(prompt("¿Cuántos números deseas ingresar?"));
  }

  for (let i = 0; i < cantidad; i++) {
    let numero = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
    while (isNaN(numero)) {
      console.log("Por favor, ingresa un número válido.");
      numero = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
    }
    numeros.push(numero);
  }

  return numeros;
}


let numerosUsuario1 = solicitarNumeros();
let resultadoSuma1 = sumarElementosArray(numerosUsuario1);
console.log("Los números ingresados son:", numerosUsuario1);
console.log("La suma de los elementos es:", resultadoSuma1);

// Ejemplo 02 - Mayor y menor de un array
function encontrarMayorMenor(array) {
  let mayor = array[0];
  let menor = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    } else if (array[i] < menor) {
      menor = array[i];
    }
  }

  return { mayor, menor };
}

let numerosUsuario2 = solicitarNumeros();
let resultado = encontrarMayorMenor(numerosUsuario2);
console.log("Los números ingresados son:", numerosUsuario2);
console.log("El número mayor es:", resultado.mayor);
console.log("El número menor es:", resultado.menor);

// Ejemplo 03 - Contar números pares
function contarPares(array) {
  let totalPares = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      totalPares++;
    }
  }
  return totalPares;
}

let numerosUsuario3 = solicitarNumeros();
let totalPares = contarPares(numerosUsuario3);
console.log("Los números ingresados son:", numerosUsuario3);
console.log("La cantidad de números pares es:", totalPares);

// Ejemplo 04 - Sumar elementos del array
let numerosUsuario4 = solicitarNumeros();
let resultadoSuma4 = sumarElementosArray(numerosUsuario4);
console.log("Los números ingresados son:", numerosUsuario4);
console.log("La suma de los elementos es:", resultadoSuma4);

// Ejemplo 05 - Buscar nombre en una lista
function buscarNombre(array, nombre) {
  return array.indexOf(nombre);
}

function solicitarNombres() {
  let nombres = [];
  let cantidad = parseInt(prompt("¿Cuántos nombres deseas ingresar?"));

  for (let i = 0; i < cantidad; i++) {
    let nombre = prompt(`Ingresa el nombre ${i + 1}:`);
    nombres.push(nombre);
  }

  return nombres;
}

function solicitarNombreABuscar() {
  return prompt("Ingresa el nombre que deseas buscar:");
}

let nombresUsuario5 = solicitarNombres();
let nombreABuscar = solicitarNombreABuscar();
let posicion = buscarNombre(nombresUsuario5, nombreABuscar);
console.log("Los nombres ingresados son:", nombresUsuario5);
console.log(`El nombre "${nombreABuscar}" se encuentra en la posición ${posicion}.`);

// Ejemplo 06 - Invertir un array
function invertirArray(array) {
  let inicio = 0;
  let fin = array.length - 1;

  while (inicio < fin) {
    // Intercambiamos los elementos
    [array[inicio], array[fin]] = [array[fin], array[inicio]];
    inicio++;
    fin--;
  }

  return array;
}

let numerosUsuario6 = solicitarNumeros();
let arrayInvertido = invertirArray(numerosUsuario6);
console.log("El array original es:", numerosUsuario6);
console.log("El array invertido es:", arrayInvertido);

// Ejemplo 07 - Convertir nombres a mayúsculas
const nombres = ["ana", "juan", "maría", "pedro"];
const nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());
console.log(nombresMayusculas);

// Ejemplo 08 - Sumar solo los números positivos
const numeros8 = [5, -3, 8, -1, 12, -7];
const sumaPositivos = numeros8
  .filter(num => num > 0)
  .reduce((acum, num) => acum + num, 0);
console.log("Suma de positivos:", sumaPositivos);

// Ejemplo 09 - Encontrar el primer múltiplo de 5
const numeros9 = [3, 7, 12, 18, 20, 25, 30];
const primerMultiploDe5 = numeros9.find(num => num % 5 === 0);
console.log("Primer múltiplo de 5:", primerMultiploDe5);

// Ejemplo 10 - Mostrar tabla de multiplicar
const numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));
console.log(`Tabla de multiplicar del ${numero}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

// Ejemplo 11 - Serie Fibonacci
let fib = [0, 1];
for (let i = 2; i < 10; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
console.log("Los primeros 10 números de la serie de Fibonacci:");
console.log(fib);

// Ejemplo 12 - Adivina el número
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento;
while (intento !== numeroSecreto) {
  intento = parseInt(prompt("Adivina el número del 1 al 10:"));
  if (intento === numeroSecreto) {
    console.log("¡Correcto! Adivinaste el número secreto 🎉");
  } else {
    console.log("Incorrecto, intenta de nuevo.");
  }
}

// Ejemplo 13 - Cuenta regresiva
let numero13 = parseInt(prompt("Ingresa un número para iniciar la cuenta regresiva:"));
while (numero13 >= 0) {
  console.log(numero13);
  numero13--;
}

// Ejemplo 14 - Solicitar un número mayor que 0
let numero14;
do {
  numero14 = parseInt(prompt("Ingresa un número mayor que 0:"));
} while (isNaN(numero14) || numero14 <= 0);
console.log(`¡Gracias! Ingresaste el número válido: ${numero14}`);

// Ejemplo 15 - Menú de opciones
let opcion;
do {
  opcion = prompt(
    "Menú de opciones:\n" +
    "1. Saludar\n" +
    "2. Mostrar fecha actual\n" +
    "3. Mostrar número aleatorio\n" +
    "4. Salir\n" +
    "Elige una opción (1-4):"
  );

  switch (opcion) {
    case "1":
      console.log("¡Hola! 👋");
      break;
    case "2":
      console.log("Fecha actual: " + new Date().toLocaleString());
      break;
    case "3":
      console.log("Número aleatorio: " + Math.floor(Math.random() * 100));
      break;
    case "4":
      console.log("¡Hasta luego!");
      break;
    default:
      console.log("Opción no válida. Intenta de nuevo.");
  }
} while (opcion !== "4");

// Ejemplo 16 - Sumar números impares hasta que la suma sea mayor a 500
let suma = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    suma += i;
  }

  if (suma > 500) {
    console.log("La suma ha superado 500. Deteniendo el proceso.");
    break;
  }
}
console.log("Suma de números impares entre 1 y 50:", suma);

// Ejemplo 17 - Intentos de login
let intentos = 0;
const usuarioCorrecto = "usuario123";
const contrasenaCorrecta = "contrasena123";
let usuario = "";
let contrasena = "";
while (intentos < 3) {
  usuario = prompt("Ingresa tu nombre de usuario:");
  contrasena = prompt("Ingresa tu contraseña:");

  if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
    console.log("¡Login exitoso!");
    break;
  } else {
    intentos++;
    if (intentos < 3) {
      console.log(`Datos incorrectos. Te quedan ${3 - intentos} intentos.`);
    } else {
      console.log("Número máximo de intentos alcanzado. Acceso denegado.");
    }
  }
}

// Ejemplo 18 - Sumar números hasta ingresar 0
let suma18 = 0;
let numero18;
do {
  numero18 = parseInt(prompt("Ingresa un número para sumar (ingresa 0 para salir):"));
  suma18 += numero18;
} while (numero18 !== 0);
console.log("La suma total es: " + suma18);


//ejemplo 19

let a = 0, b = 1;

while (b <= 100) {
  console.log(b);
  let temp = b;
  b = a + b;
  a = temp;
}

//ejemplo 20

let numero20 = 3;

while (numero20 < 50) {
  console.log(numero20);
  numero20+= 3;
}
