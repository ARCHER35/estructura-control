var cantidad = 100,j=3;
for(var i=2;i<cantidad;i++) {
    for(;j<cantidad;j++) {
        if(j%i==0 && (i==j || i==1)) {
            console.log(j);
        }
    }
}

var c = 100;
var j = 3;
var numerosPrimos = [];
var contNumPrimos = 0;
for (; j < c; j++) {
    if (primo(j)) {
        numerosPrimos.push(j);
        contNumPrimos++;
    }
}
console.log(numerosPrimos);
console.log('La cantidad de numeros primos es:', contNumPrimos);

function primo(numero) {
    for (var i = 3; i < numero; i++) {
        if(numero % i ===0) {
            return false;
        }
    }
    return numero !==1;
}