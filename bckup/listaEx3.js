/*Desenvolva uma aplicação em JavaScript para ler um salário e atualizá-lo de acordo
com a tabela abaixo.
Faixa salárial    /   Aumento
até 1.045,00          30%
1.045,01 a 1.500,00   25%
1.500,01 a 2.600,00   20%
2.600,01 a 3.550,00   15%
Acima de 3.550,00     10%
*/

var SALARIO = 3550.01;

if (SALARIO <= 1045.00) {
    SALARIO = SALARIO + (SALARIO * (30 / 100))
} else if (SALARIO <= 1500.01) {
    SALARIO = SALARIO + (SALARIO * (25 / 100))
} else if (SALARIO <= 2600.01) {
    SALARIO = SALARIO + (SALARIO * (20 / 100))
} else if (SALARIO <= 3500.00) {
    SALARIO = SALARIO + (SALARIO * (15 / 100))
} else {
    SALARIO = SALARIO + (SALARIO * (10 / 100))
}

console.log (SALARIO.toFixed(1));

