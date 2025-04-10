   /*ejemplo01*/

   let num1 = 5;
   let num2 = 10;
   let suma = num1 + num2;
   console.log("La suma es: " + suma);
   
   
       /*ejemplo02*/
   
       let numero = 7;
   
   if (numero % 2 === 0) {
       console.log("Es un número par");
   } else {
       console.log("Es un número impar");
   }
   
    /*ejemplo03*/
   for (let i = 1; i <= 5; i++) {
       console.log(i);
   }
   
   
    /*ejemplo04*/
   function celsiusAFahrenheit(celsius) {
       return (celsius * 9/5) + 32;
   }
   
   let grados = 25;
   console.log(grados + "°C son " + celsiusAFahrenheit(grados) + "°F");
   
    /*ejemplo05*/
   let hora = new Date().getHours();

   if (hora < 12) {
     console.log("¡Buenos días!");
   } else if (hora < 18) {
     console.log("¡Buenas tardes!");
   } else {
     console.log("¡Buenas noches!");
   }
      