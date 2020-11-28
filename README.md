## Treinamento Digital Innovation One - Exercicio - Gincana no acampamento

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS - Ordenação e Filtro em JavaScript.
(https://digitalinnovation.one)

#### Descrição do Desafio:

Nas férias de Dezembro, várias escolas se organizam e levam seus alunos para um acampamento de férias por uma semana. Nestes acampamentos os alunos são divididos em cabanas coletivos por gênero e idade, sempre com um adulto que, além de dormir com o grupo no cabana, também são responsáveis por criar e executar várias atividades, como por exemplo jogos, excursões, Gincanas Noturnas, etc.
No primeiro dia foi realizada uma gincana em que a atividade constituia em agrupar os alunos em um círculo (organizado no sentido anti-horário) do qual seriam retiradas uma a uma até que sobrasse apenas um aluno, que seria o vencedor.
No momento em que entra no círculo, cada aluno recebe uma pequena ficha que contém um valor de 1 a 500. Depois que o círculo é formado, conta-se, iniciando no aluno que está ao lado da primeira que entrou no círculo, o número correspondente à ficha que o primeiro detém. O aluno onde o número contado cair, deve ser retirado do grupo, e a contagem inicia novamente segundo a ficha do aluno que acabou de ser eliminado. Para ficar mais interessante, quando o valor que consta na ficha é par, a contagem é feita no sentido horário e quando o valor que consta na ficha é ímpar, a contagem é feita no sentido anti-horário.
Desenvolva um programa para que no próximo evento o responsável pela brincadeira saiba previamente qual criança irá ser a vencedora de cada grupo, com base nas informações fornecidas.


#### Entrada:

A entrada contém vários casos de teste. A primeira linha de cada caso de teste contém um inteiro N (1 ≤ N ≤ 100), indicando a quantidade de alunos que farão parte de cada círculo. Em seguida, as N linhas de cada caso de teste conterão duas informações, o Nome e o Valor (1 ≤ Valor ≤ 500) que consta na ficha de cada aluno, separados por um espaço, na ordem de entrada na formação do círculo inicial.
OBS: O Nome de cada aluno não deverá ultrapassar 30 caracteres e contém apenas letras maiúsculas e minúsculas, sem acentos, e o caractere “_”.
O final da entrada é indicado pelo número zero.


#### Saída:

Para cada caso de teste, deve-se apresentar a mensagem Vencedor(a): xxxxxx, com um espaço após o sinal ":" indicando qual é o aluno do grupo que venceu a brincadeira.

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
3 | Vencedor(a): Fernanda
Fernanda 7 | Vencedor(a): Pedro
Fernando 9 | Vencedor(a): Pedro
Gustavo 11 |
5 |
Maria 7 |
Pedro 9 |
Joao_Vitor 5 |
Isabel 12 |
Laura 8 |
3 |
Maria 4 |
Pedro 3 |
Joao 2 |
0 |

```javascript
//SOLUCAO 1
//Sera lido a primeira linha de entrada dos dados, referente a quantidade de alunos do grupo*/
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


//SOLUCAO 2
/*Sera lido a primeira linha de entrada dos dados, referente a quantidade de alunos do grupo*/
quantAlunos = gets();
/*O loop while é para verificar os dados de cada grupo, e verificar qual aluno irá ganhar 
nesse grupo. Quando a leitura de dados do gets() for 0, o loop é finalizado*/
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
        /*Executara primeira opção se o valor da ficha for impar, senão executa a segunda opção par*/
        (valorFicha % 2 == 1) ?
        contadorValorFicha = (contadorValorFicha + valorFicha) % arrQuantAlunoPorGrupo:
            contadorValorFicha = (contadorValorFicha - (valorFicha % arrQuantAlunoPorGrupo)) % arrQuantAlunoPorGrupo;
        /*se o contadorValorFicha for menor que 0, soma arrQuantAlunoPorGrupo e contadorValorFicha*/
        if (contadorValorFicha < 0) contadorValorFicha = arrQuantAlunoPorGrupo + contadorValorFicha;
        /*a variavel valorFicha receberá o valor da fixa, de acordo com o valor do indice que esta na variavel contValorFicha*/
        valorFicha = listaAlunos[contadorValorFicha].valor;
        /*remove o aluno perdedor do array*/
        listaAlunos.splice(contadorValorFicha, 1);
        /*se o valorFicha for impar, diminuirá uma posição da variavel contador contValorFicha*/
        if (valorFicha % 2 == 1) contadorValorFicha--;
        /*Contador decrescente.Será verificado o proximo aluno do grupo, diminuiçao da lista para usar no while*/
        arrQuantAlunoPorGrupo--;
    }
    /*Será impresso o aluno vencedor do grupo*/
    console.log("Vencedor(a): " + listaAlunos[0].nome);
    /*Leitura do proximo grupo*/
    quantAlunos = gets();
}
```