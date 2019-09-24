/**
 * Dado un numero calcular la cantidad 
 * de divisores del mismo Ejemplo:
 * 10 -> 4 (1,2,5,10)
 * 20 -> 5 (1,2,4,5,10)
 * 30 -> 8 (1,2,3,5,6,10,15,30)
 */
function calcularCantidadDivisores(numeros) {
    //Algoritmo 
    //paso 1
    var sumDivisores = 0;
    //paso 2
    for (var i = 1; i <= numeros; i = i + 1) {
    // i = 1,2,3,4,5,6,7,8,9,10
    //numero = 10
    //paso 3
        if(numeros % i == 0) {
            sumDivisores = sumDivisores + 1;
        }
    }
    return sumDivisores;
}
    //paso 4
    console.log('Cantidad de numeros divisores del numero 10: ',calcularCantidadDivisores(10));
    console.log('Cantidad de numeros divisores del numero 20: ',calcularCantidadDivisores(20));