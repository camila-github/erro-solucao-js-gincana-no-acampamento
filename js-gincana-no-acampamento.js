//SOLUÇÃO 1
//Sera lido a primeira linha de entrada dos dados, referente a quantidade de alunos do grupo
var quantAlunos = gets();

/*O loop while é para verificar os dados de cada grupo, e verificar qual aluno irá ganhar nesse grupo.
Quando a leitura de dados do gets() for 0, o loop é finalizado.*/
while (quantAlunos > 0) {
    var listaAlunos = [];
    // Este 'for', armazena os dados do grupo em um array
    for (i = 1; i <= quantAlunos; i++) {
        // leitura da primeira linha em diante, referente cada grupo 
        let leitura = gets();
        //leitura referente nome do aluno e valor da ficha
        let arrayAux = leitura.split(' ');
        //armazenado listagem do grupo de alunos em um array: nome e valor
        listaAlunos.push({ nome: arrayAux[0], valor: parseInt(arrayAux[1]) });
    }
    let contValorFicha = 0;
    let valorFicha = listaAlunos[0].valor;
    let arrQuantAlunoPorGrupo = listaAlunos.length;
    // Este while irá verificar o aluno ganhador do grupo
    while (arrQuantAlunoPorGrupo > 1) {
        if (valorFicha % 2 == 1) {
            //Executara o if se o valor da ficha do aluno for impar
            contValorFicha = (contValorFicha + valorFicha) % arrQuantAlunoPorGrupo;
        } else {
            //Executara o else se o valor da ficha do aluno for par
            contValorFicha = (contValorFicha - (valorFicha % arrQuantAlunoPorGrupo)) % arrQuantAlunoPorGrupo;
            if (contValorFicha < 0) contValorFicha = arrQuantAlunoPorGrupo + contValorFicha;
        }
        valorFicha = listaAlunos[contValorFicha].valor;
        //remove o aluno perdedor do array
        listaAlunos.splice(contValorFicha, 1);
        if (valorFicha % 2 == 1) contValorFicha--;
        //Contador decrescente.Será verificado o proximo aluno do grupo, diminuiçao da lista para usar no while
        arrQuantAlunoPorGrupo--;
    }
    //Será impresso o aluno vencedor do grupo.
    console.log("Vencedor(a): " + listaAlunos[0].nome);
    //Leitura do proximo grupo
    quantAlunos = gets();
}


//SOLUÇÃO 2
/*Sera lido a primeira linha de entrada dos dados, referente a quantidade de alunos do grupo*/
quantAlunos = gets();
/*O loop while é para verificar os dados de cada grupo, e verificar qual aluno irá ganhar 
nesse grupo. Quando a leitura de dados do gets() for 0, o loop é finalizado.*/
while (quantAlunos > 0) {
    /*para cada leitura do grupo, o array é zerado.*/
    listaAlunos = [];
    /*Este 'for', armazena os dados do grupo em um array*/
    for (i = 1; i <= quantAlunos; i++) {
        /*Leitura nome do aluno e valor da ficha*/
        arrayAux = gets().split(' ');
        /*armazenado listagem do grupo de alunos em um array: nome e valor*/
        listaAlunos.push({ nome: arrayAux[0], valor: parseInt(arrayAux[1]) });
    }
    contadorValorFicha = 0;
    valorFicha = listaAlunos[0].valor;
    /*Este while irá verificar o aluno ganhador do grupo*/
    while ((arrQuantAlunoPorGrupo = listaAlunos.length) > 1) {
        /*Executara primeira opção se o valor da ficha for impar, senão executa a segunda opção par.*/
        (valorFicha % 2 == 1) ?
        contadorValorFicha = (contadorValorFicha + valorFicha) % arrQuantAlunoPorGrupo:
            contadorValorFicha = (contadorValorFicha - (valorFicha % arrQuantAlunoPorGrupo)) % arrQuantAlunoPorGrupo;
        /*se o contadorValorFicha for menor que 0, soma arrQuantAlunoPorGrupo e contadorValorFicha*/
        if (contadorValorFicha < 0) contadorValorFicha = arrQuantAlunoPorGrupo + contadorValorFicha;
        //a variavel valorFicha receberá o valor da fixa, de acordo com o valor do indice que esta na variavel contValorFicha
        valorFicha = listaAlunos[contadorValorFicha].valor;
        //remove o aluno perdedor do array
        listaAlunos.splice(contadorValorFicha, 1);
        //se o valorFicha for impar, diminuirá uma posição da variavel contador contValorFicha
        if (valorFicha % 2 == 1) contadorValorFicha--;
        //Contador decrescente.Será verificado o proximo aluno do grupo, diminuiçao da lista para usar no while
        arrQuantAlunoPorGrupo--;
    }
    //Será impresso o aluno vencedor do grupo.
    console.log("Vencedor(a): " + listaAlunos[0].nome);
    //Leitura do proximo grupo
    quantAlunos = gets();
}