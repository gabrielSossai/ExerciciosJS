/*Desenvolva uma aplicação em JavaScript para ler o nome, as três notas e o número de
faltas de um aluno e escrever qual a sua situação final: Aprovado, Reprovado por Falta
ou Reprovado por Média. A média para aprovação é 70 e o limite de faltas é 25% do
total de aulas. O número de aulas ministradas no semestre foi de 80. A reprovação por
falta sobrepõe a reprovação por Média.

*/

var nota1 = 70;
var nota2 = 70;
var nota3 = 70;
var media = (nota1 + nota2 + nota3) / 3
var faltas = 10

if (media >=70 && faltas < 20) {
     console.log ('Aprovado!');
} else if (media <70 && faltas > 20){
     console.log ('Reprovado por faltas!');
} else if (media >= 70 && faltas > 20) {
     console.log ('Reprovado por faltas!')
} else if (media <70 && faltas < 20) {
     console.log ('Reprovado por média!')
}