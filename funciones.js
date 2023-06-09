// -----------------FUNCIONES--------------

// Crear una función que imprima por la pantalla del navegador y la consola el mensaje "Hola, [nombre]"
// con un parámetro para el nombre.

//1 ejemplo
function saludar(nombre) {
    const saludo = "Hola," + nombre;
    console.log(saludo);
  }
  saludar("Joel");



//2 ejemplo
function saludar1(nombre){
    return `Hola ${nombre}, que tal?`
}
console.log(saludar1("Joel"));



//3 ejemplo
function saludar_en_la_mañana(nombre){
    let saludo1= `Buenos días ${nombre}`
    console.log(saludo1)
}  

saludar_en_la_mañana("Joel");

// Crear función que reciba como parámetros dos números y que devuelva la suma de ellos. Deberás
// imprimir el resultado por la pantalla del navegador y la consola.
 
//1er ejemplo
  function addition(a, b) {
    let c = 8;
    let d = 5;
    const add = c + d;
    console.log(add);
    document.write(add);
    return add;
  }
  addition();


//2 ejemplo
  function sumar(num1, num2){
    const suma = num1+num2;
    return (suma)
  }

  console.log(sumar (3,5));

//----juntamos 2 funciones
  function operar_numeros(a,b){
    let resultado = sumar(a ,b)
    return resultado;
  }

  console.log(operar_numeros(6,5));


  // Crear función que determine si un número es par o impar. Deberás imprimir el resultado por la pantalla
  // del navegador y la consola.
  

  //1er ejemplo
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

  //2 ejemplo

  function saberParOimpar(number) {
    if(number % 2 == 0) {
      return `El ${number} es un número par`
    }else{
        return `El ${number} es un número impar`
    }

  }

  console.log(saberParOimpar(9));
  