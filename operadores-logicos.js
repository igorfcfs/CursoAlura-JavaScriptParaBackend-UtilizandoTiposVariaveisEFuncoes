const notaFinal = 6;
const faltas = 2;
const advertencias = 0;

// || - or
// && - and
if (notaFinal < 7 || faltas > 4) {
    console.log("Reprovado");
} else {
    console.log("Não foi reprovado por falta");
}

if (faltas <= 2 && !advertencias){
    console.log("Recebeou bônus");
} else {
    console.log("Não recebeu bônus");
}

