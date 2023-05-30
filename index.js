// -------------------VARIABLES-------------------

// Crear variables de diferentes tipos de datos: número, cadena de texto, booleano e imprimir su valor por
// la pantalla del navegador y la consola.

let a = 5;
let b = 2;
let nombre = "Alba ";
let apellido = "Velasco";
let casada = false;

console.log(a);
console.log(b);
console.log(nombre);
console.log(apellido);
console.log(casada);
document.write(a);
document.write(b);
document.write(nombre);
document.write(apellido);
document.write(casada);

// De las variables declaradas anteriormente, identifica las que son de tipo integer y realiza operaciones
// matemáticas básicas con las variables creadas anteriormente (suma, resta, multiplicación, división).
// Deberás imprimir el resultado por la pantalla del navegador y la consola.

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

document.write(a + b);
document.write(a - b);
document.write(a * b);
document.write(a / b);

// De las variables declaradas anteriormente, identifica las que son de tipo texto y concatena dichas
// cadenas de texto.Deberás imprimir el resultado por la pantalla del navegador y la consola.

console.log(nombre + " " + apellido);
document.write(nombre + " " + apellido);

// -----------------FUNCIONES--------------

// Crear una función que imprima por la pantalla del navegador y la consola el mensaje "Hola, [nombre]"
// con un parámetro para el nombre.

function saludar(nombre) {
  const saludo = "Hola," + nombre;
  console.log(saludo);
  document.write(saludo);
  return saludo;
}
saludar("Alba");

// Crear función que reciba como parámetros dos números y que devuelva la suma de ellos. Deberás
// imprimir el resultado por la pantalla del navegador y la consola.

function addition(a, b) {
  let c = 8;
  let d = 5;
  const add = c + d;
  console.log(add);
  document.write(add);
  return add;
}
addition();

// Crear función que determine si un número es par o impar. Deberás imprimir el resultado por la pantalla
// del navegador y la consola.

function number(number) {
  if (number % 2 == 0) {
    console.log("El número es par");
    document.write("El número es par");
  } else {
    console.log("El número es impar");
    document.write("El número introducido es impar");
  }
}
number(9);

//  ------------OBJETOS------------
//  Todo lo que retorne cada función se debe imprimir el resultado por la pantalla del navegador y la consola.
//  ● Crear un objeto carro haciendo la abstracción de sus atributos y un objeto anidado.
//  ● Crear una función que devuelva la marca del carro.
//  ● Crear una función que devuelva la cantidad de puertas que tiene el carro.
//  ● Crear una función que devuelva un atributo del objeto anidado.

const carro = {
  marca: "Audi",
  puertas: 3,
  color: "negro",
  combustible: {
    tipo1: "gasolina",
    tipo2: "diesel",
  },
};

console.log(carro.marca);
document.write(carro.marca);

console.log(carro.puertas);
document.write(carro.puertas);
console.log(carro.combustible.tipo1);
document.write(carro.combustible.tipo1);

//     -------------ARRAYS--------------

// ● Crear un array de 10 números
const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(arrayNumber);

// ● Crear una función que imprima en consola todos los números de un array (Investigar ciclo for)

for (let i = 0; i < arrayNumber.length; i++) {
  console.log(arrayNumber[i]);
}

// ● Crear una función que añada un número al array
arrayNumber.push(22);
console.log(arrayNumber);

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

// ------------------MANIPULACIÓN DEL DOM---------------

// ● Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic.

let clickBtn = document.querySelector("#btnClick");

function showMessage() {
  alert("CONSEGUIDO");
}

clickBtn.addEventListener("click", showMessage);

// ● Cambiar el contenido de un elemento HTML mediante JavaScript.

let paragraph = document.querySelector("#changeP");
paragraph.innerHTML = "Este es el nuevo párrafo de texto";

// ● Ocultar y mostrar elementos HTML utilizando JavaScript.

let anotherParagraph = document.querySelector("#anotherParagraph");

// ● Crear un array de 10 nombres.

let names = [
  "Joel",
  "Ángel",
  "Lucía",
  "Aida",
  "Juan",
  "Leti",
  "Olaya",
  "Elena",
  "Jose",
  "Joaquín",
];

// ● Crear una función que imprima en pantalla una lista con los nombres del array de nombres.

function printNames(names) {
  let listNames = document.querySelector("#listNames");
  for (let i = 0; i < names.length; i++) {
    listNames.innerHTML += `<li>${names[i]}</li>`;
  }
}

printNames(names);

// ● Crear un array de números.

let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

// ● Crear una función que pinte en pantalla cuántos números tiene el array de números.

function countNumbers(array) {
  let countNumber = document.querySelector("#countNumber");
  return array.length;
}

console.log(`El array tiene ${countNumbers(numbers)} números.`);
countNumbers(numbers);

// ● Crea los nodos necesarios para imprimir un formulario.

// ● Crea array de objetos 10 objetos con su respectivos key:value. Cada objeto deberá tener las siguientestoy fuera
// keys:
// id, name, status, species, type, gender
// El value de cada key lo asignas tú
// ● Imprime cada elemento del objeto dentro de la tabla que creaste anteriormente.

const people = [
  {
    id: 1,
    name: "Joel",
    status: "soltero",
    species: "humano",
    type: "baby",
    gender: "male",
  },
  {
    id: 2,
    name: "Alba",
    status: "soltera",
    species: "humano",
    type: "adult",
    gender: "female",
  },
  {
    id: 3,
    name: "Juan",
    status: "soltero",
    species: "humano",
    type: "adult",
    gender: "male",
  },
  {
    id: 4,
    name: "Leti",
    status: "soltera",
    species: "humano",
    type: "adult",
    gender: "female",
  },
  {
    id: 5,
    name: "M.J",
    status: "soltera",
    species: "humano",
    type: "adult",
    gender: "female",
  },
  {
    id: 6,
    name: "Vicente",
    status: "soltero",
    species: "humano",
    type: "adult",
    gender: "male",
  },
  {
    id: 7,
    name: "Ángel",
    status: "soltero",
    species: "humano",
    type: "adult",
    gender: "male",
  },
  {
    id: 8,
    name: "Cintia",
    status: "soltera",
    species: "humano",
    type: "adult",
    gender: "female",
  },
  {
    id: 9,
    name: "Elena",
    status: "soltera",
    species: "humano",
    type: "baby",
    gender: "female",
  },
  {
    id: 10,
    name: "Olaya",
    status: "soltera",
    species: "humano",
    type: "baby",
    gender: "female",
  },
];

function createTable(elements) {
  // ● Crea los nodos necesarios para imprimir una tabla.
  // Crear la tabla
  const table = document.createElement("table");

  // Crear la fila de encabezados
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const header1 = document.createElement("th");
  header1.textContent = "Id";
  const header2 = document.createElement("th");
  header2.textContent = "Name";
  const header3 = document.createElement("th");
  header3.textContent = "Status";
  const header4 = document.createElement("th");
  header4.textContent = "Species";
  const header5 = document.createElement("th");
  header5.textContent = "Type";
  const header6 = document.createElement("th");
  header6.textContent = "Gender";
  headerRow.appendChild(header1);
  headerRow.appendChild(header2);
  headerRow.appendChild(header3);
  headerRow.appendChild(header4);
  headerRow.appendChild(header5);
  headerRow.appendChild(header6);
  thead.appendChild(headerRow);

  // Crear las filas de datos
  const tbody = document.createElement("tbody");

  people.forEach((person) => {
    // Creamos elementos
    const dataRow = document.createElement("tr");
    const data1 = document.createElement("td");
    const data2 = document.createElement("td");
    const data3 = document.createElement("td");
    const data4 = document.createElement("td");
    const data5 = document.createElement("td");
    const data6 = document.createElement("td");

    // Añadimos el valor a cada elemento
    data1.textContent = `${person.id}`;
    data2.textContent = `${person.name}`;
    data3.textContent = `${person.status}`;
    data4.textContent = `${person.species}`;
    data5.textContent = `${person.type}`;
    data6.textContent = `${person.gender}`;

    // Introducimos los elementos al elemento row
    dataRow.appendChild(data1);
    dataRow.appendChild(data2);
    dataRow.appendChild(data3);
    dataRow.appendChild(data4);
    dataRow.appendChild(data5);
    dataRow.appendChild(data6);

    // Introducimos el elemento row al tbody
    tbody.appendChild(dataRow);
  });

  // Añadimos elementos a la tabla
  table.appendChild(thead);
  table.appendChild(tbody);
  // Agregamos la tabla al elemento del DOM deseado, en este caso el body
  document.body.appendChild(table);
}

createTable(people);
