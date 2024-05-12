if (1 > 0){
    //var estudante = "Caroline"; // esta variavel 
    let estudante = "Caroline";

    var global = "Igor";
    let local;
    console.log(estudante);
}
estudante = "Ana"; // esta aqui e uma variavel agora, pq quando nao colocamos nenhuma palavra chave para declara a variavel, por padrao o js coloca a palavra chave var

console.log(estudante);

console.log(global);
//console.log(local); // nao conseguimos acessara variavel local, pq como o proprio nome diz, let e uma variavel local