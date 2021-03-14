//SOLUCAO 1
/*Criado funções. Utilizado variaveis constantes (const). 
Ajustado nomenclatura das constantes e variaveis (Uso de conceitos CleanCode). 
Utilizado atribuição via desestruturação (destructuring assignment).*/
let quantAlunos = gets() ;
while (quantAlunos > 0){

  const resultadoListaAlunos = listarAlunos(quantAlunos);
  const resultadoAlunoGanhador = verificarAlunoGanhador(resultadoListaAlunos);
  console.log("Vencedor(a): " + resultadoAlunoGanhador);
  quantAlunos = gets(); 
};


function listarAlunos(quantidadeAlunos){
    /*para cada leitura do grupo, o array é zerado.*/
    let listaAlunos = [];
    /*Este loop, armazena os dados do grupo em um array*/
    while (quantidadeAlunos--)  {
      /*Leitura do nome do aluno e valor da ficha*/
      let [nomeAluno, valorDaFicha] = gets().split(' ');
      /*armazenado listagem do grupo de alunos em um array: nome e valor*/
      listaAlunos.push({nomeAluno: nomeAluno, valorDaFicha: parseInt(valorDaFicha)});
    }
    return listaAlunos;
}


function verificarAlunoGanhador(listaAlunos){
  let contadorValorDaFicha = 0;
  let valorDaFicha = listaAlunos[0].valorDaFicha;
  
  /*while verificará o aluno ganhador do grupo*/
  let arrQuantAlunoPorGrupo = listaAlunos.length;
  while (arrQuantAlunoPorGrupo > 1)
  { 
    /*Executara primeira opção se o valor da ficha for impar, senão executa a segunda opção par.*/
    (valorDaFicha % 2 == 1) ? 
    contadorValorDaFicha = (contadorValorDaFicha + valorDaFicha) % arrQuantAlunoPorGrupo : 
    contadorValorDaFicha = (contadorValorDaFicha - (valorDaFicha % arrQuantAlunoPorGrupo)) % arrQuantAlunoPorGrupo;
    /*se o contadorValorDaFicha for menor que 0, soma arrQuantAlunoPorGrupo e contadorValorDaFicha*/
    if (contadorValorDaFicha < 0) contadorValorDaFicha = arrQuantAlunoPorGrupo + contadorValorDaFicha;
    /*a variavel valorDaFicha receberá o valor da ficha, de acordo com o valor do indice que esta na variavel contadorValorDaFicha*/
    valorDaFicha = listaAlunos[contadorValorDaFicha].valorDaFicha;
    /*remove o aluno perdedor do array*/
    listaAlunos.splice(contadorValorDaFicha, 1)
    /*se o valorFicha for impar, diminuirá uma posição da variavel contadorValorDaFicha*/
    if (valorDaFicha % 2 == 1) contadorValorDaFicha--;
    /*Contador decrescente.Será verificado o proximo aluno do grupo, diminuiçao da lista para usar no while*/
    arrQuantAlunoPorGrupo--;
  }
  /*Será retornado o aluno vencedor do grupo.*/
  return listaAlunos[0].nomeAluno;
}




//SOLUCAO 2
/*Sera lido a primeira linha de entrada dos dados, referente a quantidade de alunos do grupo*/
var quantAlunos = gets();

/*O loop while é para verificar os dados de cada grupo, e verificar qual aluno irá ganhar nesse grupo.
Quando a leitura de dados do gets() for 0, o loop é finalizado.*/
while (quantAlunos > 0) {
    var listaAlunos = [];
    /*Este 'for', armazena os dados do grupo em um array*/
    for (i = 1; i <= quantAlunos; i++) {
        /*leitura da primeira linha em diante, referente cada grupo*/
        let leitura = gets();
        /*leitura referente nome do aluno e valor da ficha*/
        let arrayAux = leitura.split(' ');
        /*armazenado listagem do grupo de alunos em um array: nome e valor*/
        listaAlunos.push({ nome: arrayAux[0], valor: parseInt(arrayAux[1]) });
    }
    let contValorFicha = 0;
    let valorFicha = listaAlunos[0].valor;
    let arrQuantAlunoPorGrupo = listaAlunos.length;
    /*Este while irá verificar o aluno ganhador do grupo*/
    while (arrQuantAlunoPorGrupo > 1) {
        if (valorFicha % 2 == 1) {
            /*Executara o if se o valor da ficha do aluno for impar*/
            contValorFicha = (contValorFicha + valorFicha) % arrQuantAlunoPorGrupo;
        } else {
            /*Executara o else se o valor da ficha do aluno for par*/
            contValorFicha = (contValorFicha - (valorFicha % arrQuantAlunoPorGrupo)) % arrQuantAlunoPorGrupo;
            if (contValorFicha < 0) contValorFicha = arrQuantAlunoPorGrupo + contValorFicha;
        }
        valorFicha = listaAlunos[contValorFicha].valor;
        /*remove o aluno perdedor do array*/
        listaAlunos.splice(contValorFicha, 1);
        if (valorFicha % 2 == 1) contValorFicha--;
        /*Contador decrescente.Será verificado o proximo aluno do grupo, diminuiçao da lista para usar no while*/
        arrQuantAlunoPorGrupo--;
    }
    /*Será impresso o aluno vencedor do grupo*/
    console.log("Vencedor(a): " + listaAlunos[0].nome);
    /*Leitura do proximo grupo*/
    quantAlunos = gets();
}


