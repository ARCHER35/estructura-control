//escribir un programa que llene un arreglo con los primeros numeros inpares y calcula su sumatoria
var numeros =[3,5,7,9,11,13,15,17,19,21,23,25];
var suma = 0;
for(var i= 0; i < numeros.length; i++) {
   suma = suma + numeros[i];
}
 console.log('la suma es: '+suma);
 console.log(numeros);
 