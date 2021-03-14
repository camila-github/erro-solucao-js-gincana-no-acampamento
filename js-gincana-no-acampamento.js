//SOLUCAO 1
let quantAlunos = gets() ;
while (quantAlunos > 0){
    const resultadoListaAlunos = listarAlunos(quantAlunos);
    const resultadoAlunoGanhador = verificarAlunoGanhador(resultadoListaAlunos);
    console.log("Vencedor(a): " + resultadoAlunoGanhador);
    quantAlunos = gets(); 
};

function listarAlunos(quantidadeAlunos){
    let listaAlunos = [];
    while (quantidadeAlunos--)  {
        let [nomeAluno, valorDaFicha] = gets().split(' ');
        listaAlunos.push({nomeAluno: nomeAluno, valorDaFicha: parseInt(valorDaFicha)});
    }
    return listaAlunos;
}

function verificarAlunoGanhador(listaAlunos){
  let contadorValorDaFicha = 0;
  let valorDaFicha = listaAlunos[0].valorDaFicha;
  let arrQuantAlunoPorGrupo = listaAlunos.length;

  while (arrQuantAlunoPorGrupo > 1)
  { 
    (valorDaFicha % 2 == 1) ? 
    contadorValorDaFicha = (contadorValorDaFicha + valorDaFicha) % arrQuantAlunoPorGrupo : 
    contadorValorDaFicha = (contadorValorDaFicha - (valorDaFicha % arrQuantAlunoPorGrupo)) % arrQuantAlunoPorGrupo;
    if (contadorValorDaFicha < 0) contadorValorDaFicha = arrQuantAlunoPorGrupo + contadorValorDaFicha;
    valorDaFicha = listaAlunos[contadorValorDaFicha].valorDaFicha;
    listaAlunos.splice(contadorValorDaFicha, 1)
    if (valorDaFicha % 2 == 1) contadorValorDaFicha--;
    arrQuantAlunoPorGrupo--;
  }
  return listaAlunos[0].nomeAluno;
}



//SOLUCAO 2
var quantAlunos = gets();
while (quantAlunos > 0) {
    var listaAlunos = [];
    for (i = 1; i <= quantAlunos; i++) {
        let leitura = gets();
        let arrayAux = leitura.split(' ');
        listaAlunos.push({ nome: arrayAux[0], valor: parseInt(arrayAux[1]) });
    }
    let contValorFicha = 0;
    let valorFicha = listaAlunos[0].valor;
    let arrQuantAlunoPorGrupo = listaAlunos.length;
    while (arrQuantAlunoPorGrupo > 1) {
        if (valorFicha % 2 == 1) {
            contValorFicha = (contValorFicha + valorFicha) % arrQuantAlunoPorGrupo;
        } else {
            contValorFicha = (contValorFicha - (valorFicha % arrQuantAlunoPorGrupo)) % arrQuantAlunoPorGrupo;
            if (contValorFicha < 0) contValorFicha = arrQuantAlunoPorGrupo + contValorFicha;
        }
        valorFicha = listaAlunos[contValorFicha].valor;
        listaAlunos.splice(contValorFicha, 1);
        if (valorFicha % 2 == 1) contValorFicha--;
        arrQuantAlunoPorGrupo--;
    }
    console.log("Vencedor(a): " + listaAlunos[0].nome);
    quantAlunos = gets();
}
