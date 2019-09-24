var ladoA= 5;
var ladoB= 7;
var ladoC= 7;
/**
 * Dado los lados A,B,C de un triangulo 
 * diga si es escaleno,equilatero,isosceles,
 */
// ladoA = parseInt(pronpt("5") );
// ladoB = parseInt(pronpt("7") );
// ladoC = parseInt(pronpt("7") );

if(ladoA == ladoB && ladoB == ladoC)
    console.log("Los lados corresponden a un triangulo equilatero");
else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC)
    console.log("Los lados corresponden a un triangulo isosceles");
 else 
    console.log("Los lados corresponde a un triangulo escaleno");
