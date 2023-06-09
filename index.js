// -------------------VARIABLES-------------------

// Crear variables de diferentes tipos de datos: número, cadena de texto, booleano e imprimir su valor por
// la pantalla del navegador y la consola.

let a = 5;
let b = 2;
let nombre = "Alba ";
let apellido = "Velasco";
let casada = false;

console.log(a, b , nombre, apellido, casada);
document.write(a, b, nombre, apellido,casada);

let createp =document.createElement("p");
createp.innerText = `${nombre}`;
document.querySelector("body").appendChild(createp);

// De las variables declaradas anteriormente, identifica las que son de tipo integer y realiza operaciones
// matemáticas básicas con las variables creadas anteriormente (suma, resta, multiplicación, división).
// Deberás imprimir el resultado por la pantalla del navegador y la consola.

console.log(a + b, a - b, a * b, a / b);
document.write(a + b, a - b, a * b, a / b);

// De las variables declaradas anteriormente, identifica las que son de tipo texto y concatena dichas
// cadenas de texto.Deberás imprimir el resultado por la pantalla del navegador y la consola.

let buenos = 'Buenos días';
let pregunta = '¿qué tal estás?';
let concatenacion = document.getElementById('principal');
let concatenacion2 = document.createElement("p");
concatenacion2.innerHTML = `${buenos} ${pregunta}`;
concatenacion.appendChild(concatenacion2);





