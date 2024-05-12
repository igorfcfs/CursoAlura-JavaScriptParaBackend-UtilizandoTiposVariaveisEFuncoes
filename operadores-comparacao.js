const estaAprovado = true;

if (estaAprovado === true) {
    console.log("Aprovado");
}

if ('0' == 0){
    console.log("Passou na comparação");
} else {
    console.log("Não passou na comparação");
}

// sempre use os 3 iguais em qualquer comparacao para garantir que o seu codigo nao de bugs
if ('0' === 0){
    console.log("Passou na comparação");
} else {
    console.log("Não passou na comparação");
}