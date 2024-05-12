// 2ª forma - expressao de funcao (funcoes anonimas)

// nao faz hoisting, ou seja, eu nao consigo chamar a funcao antes dela ser declarada
const estudanteReprovou = function estudanteReprovou(notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));