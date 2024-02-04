/// Crear una función que muestre "¡Hola, mundo!" en la consola.
let mensaje = mostrarMensaje();

function mostrarMensaje() {
    let mensaje = "¡Hola, mundo!";
    return console.log(mensaje);
}

/// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
let saludo = mostrarSaludo();

function mostrarSaludo(saludo) {
    let nombre = "Julian";
    return console.log(`¡Hola, ${nombre}!`);
        
}

/// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
let numeroSimple = duplicarValor();

function duplicarValor() {
    let numeroSimple = parseInt(5);
    return console.log(numeroSimple*2);

}

/// Crear una función que reciba tres números como parámetros y devuelva su promedio.

let numerosParaValorar = valorPromedio();

function valorPromedio() {
    let numeroUno = parseInt(5);
    let numeroDos = parseInt(16);
    let numeroTres = parseInt(8);
    
    console.log(numeroUno+numeroDos+numeroTres/3);

    return; /// console.log(Math.floor(numeroUno+numeroDos+numeroTres/3));

}

/// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
let numeroMayor = buscarMayor();

function buscarMayor() {
    let numero1 = parseInt(37);
    let numero2 = parseInt(65);

    if (numero1 > numero2) {
        return console.log(numero1);
    } else {
        return console.log(numero2);
    }
  
}

/// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.