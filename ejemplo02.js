const prompt = require('prompt-sync')();

// 1. Sumar elementos de un array
function sumarElementosArray(array) {
  return array.reduce((acc, num) => acc + num, 0);
}

// 2. Número mayor y menor
function numeroMayorMenor(array) {
  let mayor = Math.max(...array);
  let menor = Math.min(...array);
  return { mayor, menor };
}

// 3. Contar elementos pares
function contarPares(array) {
  return array.filter(num => num % 2 === 0).length;
}

// 4. Ordenar un array sin usar .sort()
function ordenarArray(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

// 5. Buscar un elemento
function buscarElemento(array, nombre) {
  return array.indexOf(nombre);
}

// 6. Revertir un array
function revertirArray(array) {
  let inicio = 0;
  let fin = array.length - 1;
  while (inicio < fin) {
    [array[inicio], array[fin]] = [array[fin], array[inicio]];
    inicio++;
    fin--;
  }
  return array;
}

// 7. Convertir nombres a mayúsculas
function convertirAMayusculas(array) {
  return array.map(nombre => nombre.toUpperCase());
}

// 8. Sumar solo los números positivos
function sumarPositivos(array) {
  return array.filter(num => num > 0).reduce((acc, num) => acc + num, 0);
}

// 9. Obtener el primer múltiplo de 5
function primerMultiploDe5(array) {
  return array.find(num => num % 5 === 0);
}

// 10. Tabla de multiplicar
function tablaMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// 11. Generar una secuencia de Fibonacci
function fibonacci() {
  let fib = [0, 1];
  for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// 12. Adivinar un número
function adivinarNumero() {
  const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  let intento;
  do {
    intento = parseInt(prompt("Adivina el número del 1 al 10: "));
    if (intento === numeroSecreto) {
      console.log("¡Correcto! Adivinaste el número secreto 🎉");
    } else {
      console.log("Incorrecto, intenta de nuevo.");
    }
  } while (intento !== numeroSecreto);
}

// 13. Contar regresivamente desde un número
function cuentaRegresiva() {
  let numero = parseInt(prompt("Ingresa un número para iniciar la cuenta regresiva: "));
  while (numero >= 0) {
    console.log(numero);
    numero--;
  }
}

// 14. Validar entrada de usuario
function validarEntrada() {
  let numero;
  do {
    numero = parseInt(prompt("Ingresa un número mayor que 0: "));
  } while (isNaN(numero) || numero <= 0);
  console.log(`¡Gracias! Ingresaste el número válido: ${numero}`);
}

// 15. Mostrar menú hasta que el usuario salga
function mostrarMenu() {
  let opcion;
  do {
    opcion = prompt(
      "Menú de opciones:\n" +
      "1. Saludar\n" +
      "2. Mostrar fecha actual\n" +
      "3. Mostrar número aleatorio\n" +
      "4. Salir\n" +
      "Elige una opción (1-4): "
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
}

// 16. Sumar solo los números impares entre 1 y 50
function sumarImpares() {
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
}

// 17. Contador de intentos
function intentoLogin() {
  let intentos = 0;
  const usuarioCorrecto = "usuario123";
  const contrasenaCorrecta = "contrasena123";
  let usuario;
  let contrasena;

  while (intentos < 3) {
    usuario = prompt("Ingresa tu nombre de usuario: ");
    contrasena = prompt("Ingresa tu contraseña: ");

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
}

// 18. Sumar hasta que el usuario ingrese 0
function sumarHastaCero() {
  let suma = 0;
  let numero;
  do {
    numero = parseInt(prompt("Ingresa un número para sumar (ingresa 0 para salir): "));
    suma += numero;
  } while (numero !== 0);
  console.log("La suma total es:", suma);
}

// 19. Imprimir la serie de Fibonacci hasta que un número supere 100
function fibonacciHasta100() {
  let fib = [0, 1];
  while (fib[fib.length - 1] <= 100) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  console.log("Serie de Fibonacci hasta que un número supera 100:", fib);
}

// 20. Imprimir los múltiplos de 3 hasta 50
function imprimirMultiplosDe3() {
  let i = 3;
  while (i < 50) {
    console.log(i);
    i += 3;
  }
}

// Ejemplo de uso
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Suma de los elementos:", sumarElementosArray(numeros));
console.log("Mayor y menor:", numeroMayorMenor(numeros));
console.log("Cantidad de pares:", contarPares(numeros));
console.log("Array ordenado:", ordenarArray([...numeros]));
console.log("Buscar el nombre 'Juan':", buscarElemento(["Ana", "Juan", "Pedro"], "Juan"));
console.log("Array invertido:", revertirArray([...numeros]));
console.log("Nombres en mayúsculas:", convertirAMayusculas(["ana", "juan", "maria"]));
console.log("Suma de positivos:", sumarPositivos([-1, -2, 3, 4]));
console.log("Primer múltiplo de 5:", primerMultiploDe5([3, 7, 5, 10, 15]));
tablaMultiplicar(5);
console.log("Secuencia Fibonacci:", fibonacci());
adivinarNumero();
cuentaRegresiva();
validarEntrada();
mostrarMenu();
sumarImpares();
intentoLogin();
sumarHastaCero();
fibonacciHasta100();
imprimirMultiplosDe3();
