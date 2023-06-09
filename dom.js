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
