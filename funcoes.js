// parâmetros/argumentos
// retorno

// funcao e um bloco de codigo que executa uma instrucao quando e chamada


// 1ª forma de trabalhar com funcao em javascript - declaracao de funcao
function exibeNomeEstudante() {
    console.log('Caroline'); // hard-coded: valor fixo no codigo
}
exibeNomeEstudante();

function exibeNomeEstudante2(nome) {
    console.log(nome);
}
exibeNomeEstudante2('João');

function exibeInfosEstudantes(nome, nota){
    console.log(`O nome é ${nome} e a nota é ${nota}`);
}
exibeInfosEstudantes('Joana', 10);

function exibeInfosEstudantes2(nome, nota){
    return `O nome é ${nome} e a nota é ${nota}`;
}
console.log(exibeInfosEstudantes2('Paulo', 10));


// hoisting - as funcoes declaradas e variaveis com var sao levantadas pro topo do arquivo, ou seja, voce consegue chamar a funcao antes dela ser declarada