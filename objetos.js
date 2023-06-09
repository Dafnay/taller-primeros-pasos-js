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
    modelo: ["A1", 2002],
}
//-------funcion que devuelve la marca
function visualizarMarca(vehiculo){
    let marca = vehiculo.marca
    console.log(marca);
    return marca
}
visualizarMarca(carro);


  
//--------función que devuelve las puertas 
function visualizarPuertas(vehiculo){
    let puertas1 = vehiculo.puertas
    console.log(puertas1);
    return puertas1
}
visualizarPuertas(carro);


//---------función que devuelve un atributo del objeto anidado


function visualizarModelo(vehiculo){
    let modelo = vehiculo.modelo[0];
    console.log(modelo)
    return modelo
}

visualizarModelo(carro);