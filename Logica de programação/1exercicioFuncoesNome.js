
function escreverMeuNome(nome){
    return('Meu nome é ' + nome + '.');
}

function testarIdade(idade) {
    if (idade>= 18) {
        console.log(escreverMeuNome('Eric') + ' E eu sou maior de idade');
    } else {
        console.log(escreverMeuNome('Eric') +'E eu sou Menor de idade')
    }
}

testarIdade(31);


