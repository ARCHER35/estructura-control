// Una funcion tiene un nombre 
//Parametro de entrada (>=0> datos para la funcion
//Cerpo de la funcion
//Parametro de retorno (1 u 0)
//Operadores Logicos / operadores aritmeticos
function esImpar(numero){
    var resultado = undefined;
    numero = 5;
    if (numero % 2 != 0) {
        //console.log('El numero es impar');
        resultado = true;
    }else {
        //console.log('El numero es par')
        resultado = false;

    }
    return resultado;
}
var resultadefuncion = esImpar(5);
console.log(resultadefuncion);