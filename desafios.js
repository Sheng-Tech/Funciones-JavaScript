/// Crear una función que muestre "¡Hola, mundo!" en la consola.

function mostrarMensaje() {
    let mensaje = ("¡Hola, mundo!");
    console.log(mensaje);
}

mostrarMensaje();


/// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
///let saludo = mostrarSaludo();

function mostrarSaludo() {
    let nombre = "Julian";
    console.log(`¡Hola, ${nombre}!`);
        
}

mostrarSaludo();


/// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function duplicarValor(numeroSimple) {
    
    return numeroSimple*2;

}

let valorDoble = duplicarValor(8);
console.log(valorDoble);

/// Crear una función que reciba tres números como parámetros y devuelva su promedio.

function valorPromedio(num1, num2, num3) {
    
    return (num1+num2+num3)/3;

}

let promedios = valorPromedio(6,13,77);
console.log(promedios);

/// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
let numeroMayor = buscarMayor(77,22);

function buscarMayor(numero1,numero2) {

    return numero1 > numero2 ? numero1 : numero2;
  
}

console.log(numeroMayor);

/// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function valorDuplicado(numeroInicial) {
    return numeroInicial * numeroInicial;
    
}
let solucion = valorDuplicado(5);
console.log(solucion);