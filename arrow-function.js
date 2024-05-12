// 3ª forma - arrow function (expressao de funcao = funcao anonima)

// nao faz hoisting, ou seja, eu nao consigo chamar a funcao antes dela ser declarada
const estudanteReprovou = (notaFinal, faltas) => {
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

const exibeNome = (nome) => nome; // (nome) => {return nome};

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));

console.log(exibeNome("Caroline"));

// callback functions - funcoes dentro de funcoes