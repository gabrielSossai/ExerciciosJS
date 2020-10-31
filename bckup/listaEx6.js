/*Desenvolva uma aplicação em JavaScript para simular o lançamento de dois dados em
uma jogada de 10. A soma dos dois valores deve então ser calculada. Cada dado pode
mostrar um valor de 1 a 6, portanto a soma dos valores irá variar de 2 a 12. Imprima
quando o resultado da soma for par e quando for impar e também a quantidade total de
pares em impares ao final.
*/
let npar = 0
let nimpar = 0
let i = 0


while (i<10){
    var dado1 = Math.floor(Math.random() * 6 + 1);
    var dado2 = Math.floor(Math.random() * 6 + 1);
    var soma = dado1 + dado2;
    var conf = soma % 2;
if (conf == 0) {
    text = "O número é " + soma + " e é par!";
    npar = (npar + 1);
    console.log (text);
    i++
} else if (conf != 0){
    text = "O número é " + soma + " e é ímpar!" ;
    nimpar = (nimpar + 1);
    console.log (text);
    i++ 
}
}

console.log ("Há " + npar + " números pares");
console.log ("Há " + nimpar + " números ímpares");



 


