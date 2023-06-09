//     -------------ARRAYS--------------

// ● Crear un array de 10 números
const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(arrayNumber);

// ● Crear una función que imprima en consola todos los números de un array (Investigar ciclo for)

function recorrerArray(array) {
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}}
recorrerArray(arrayNumber)


// ● Crear una función que añada un número al array

function añadirArray(array, numero) {
    array.push(numero);
}
añadirArray(arrayNumber,43)
console.log(arrayNumber)

//---------------

// function añadirNumero (array, numero){
//     let numeroNuevo = array.push(numero);
//     console.log(numeroNuevo);
// }
  
//   añadirNumero(arrayNumber)

// ● Crear una función que elimine los números pares de ese array.


const newArrayNumber = arrayNumber.filter((element) => element % 2 !== 0);
console.log(newArrayNumber);

//   ------------------

function notPair(arrayNumber) {
  for (var i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] % 2 === 0) {
      arrayNumber.splice(i, 1); // borra desde la posición i, x posiciones;
      i--; // ajusta i, restando una posición si eliminó un par.
    }
  }
}
notPair(arrayNumber);

console.log(arrayNumber);
document.write(arrayNumber);

// ● Crear una función que devuelva el número mayor de un array.

console.log(Math.max(...arrayNumber));

// ● Crear una función que devuelva el número menor de un array.
console.log(Math.min(...arrayNumber));

// ● Crear un función que convierta en minúsculas todas las letras de un texto.
let hi = "HOLAAAAAAA";
console.log(hi.toLowerCase());

// ● Crear una función que convierta en mayúsculas todas las letras de un texto.

let bye = "adios";
console.log(bye.toUpperCase());

// ● Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en
// mayúscula.

const arrayNames = ["alba", "joel", "juan", "ángel"];

function capitalizeFirstLetter(names = []) {
  // le doy un valor a names por defecto, por si se ejecuta la función y no se le pasa nada, js no explote.
  let capitalizedNames = []; // declaramos variable la cual almacenará el resultado
  names.forEach((name) => {
    // el método forEach itera sobre cada elemento de un array y ejecuta el código que contiene
    capitalizedNames.push(name.charAt(0).toUpperCase() + name.slice(1)); // Obtenemos la primera letra de cada nombre con charAt la pasamos a mayúsculas con toUppercase, cortamos el resto del nombre con el slice y lo concatenamos.
  });
  console.log(capitalizedNames);
  return capitalizedNames; // retornamos el array con los nombres ya con la 1 en mayúsculas
}

capitalizeFirstLetter(arrayNames); // llamamos a la función y le pasamos el array de nombres