const estudante = 'Fernando';
const estaAprovado = true;

if (estaAprovado) {
    console.log(`O aluno ${estudante} esta aprovado`);
} else {
    console.log(`Que pena`);
}

if (estudante === 'Fernando'){
    console.log(`ola ${estudante}`);
} else {
    console.log('quem e vc?');
}

const x = 5 == '5';
const y = 5 === '5';
const z = false == 'false';
console.log(x, y, z);