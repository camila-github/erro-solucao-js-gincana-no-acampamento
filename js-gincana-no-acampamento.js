//SOLUCAO 1
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


//SOLUCAO 2
quantAlunos = gets();
while (quantAlunos > 0) {
    listaAlunos = [];
    for (i = 1; i <= quantAlunos; i++) {
        arrayAux = gets().split(' ');
        listaAlunos.push({ nome: arrayAux[0], valor: parseInt(arrayAux[1]) });
    }
    contadorValorFicha = 0;
    valorFicha = listaAlunos[0].valor;

    while ((arrQuantAlunoPorGrupo = listaAlunos.length) > 1) {
        (valorFicha % 2 == 1) ?
        contadorValorFicha = (contadorValorFicha + valorFicha) % arrQuantAlunoPorGrupo:
            contadorValorFicha = (contadorValorFicha - (valorFicha % arrQuantAlunoPorGrupo)) % arrQuantAlunoPorGrupo;

        if (contadorValorFicha < 0) contadorValorFicha = arrQuantAlunoPorGrupo + contadorValorFicha;

        valorFicha = listaAlunos[contadorValorFicha].valor;
        listaAlunos.splice(contadorValorFicha, 1);

        if (valorFicha % 2 == 1) contadorValorFicha--;

        arrQuantAlunoPorGrupo--;
    }
    console.log("Vencedor(a): " + listaAlunos[0].nome);
    quantAlunos = gets();
}