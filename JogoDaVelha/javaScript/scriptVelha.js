//Inicializa as casas com nove para sabermos que não foi clicado

var casas = [9, 9, 9, 9, 9, 9, 9, 9, 9];

//Indica a vez do jogador - (1) xis (-1) bola

var vez = 1;

//Conta quantos cliques foram dados durante o jogo

var contaclique = 0;

//Placar

var iPontosX = 0;
var iPontosO = 0;
var iPontosV = 0;
var sResposta = "";

// ***************************************************************

//Função que verifica as jogadas

function verifica(casa) {

    //Verifica se a casa não foi clicada.

    if (casas[casa] == 9) {

        //Modifica de 9 para o valor do jogador da vez

        casas[casa] = vez;

        //Se o jogador da vez for 1, coloca o desenho do xis

        if (vez == 1) {
            document.getElementById("img" + casa).src = "image/x.png";

            //Se o jogador for -1, coloca o desenho da bola

        } else {
            document.getElementById("img" + casa).src = "image/o.png";

        }

        //inverte o jogador da vez

        vez *= -1;
        contaclique++;

        //Confere se houve vencedor

        confere();
    }
}

//Funçãp qie testa se houve vencedor

function confere() {
    var i;

    //Variável que mara se houve ganhador

    var lGanhou = false;

    //Variável que marca se o jogo acabou (todas casas clicadas)

    var lAcabou = true;

    //Percorre todas as casas para verificar se ainda existe alguma não clicada

    for (i = 0; i < casas.length; i++) {
        if (casas[i] == 9) {

            //Se houver, sabemos que ainda não deu velha

            lAcabou = false;
        }
    }

    //Se a quantidade de cliques foram 9, o jogo acabou

    if (contaclique == 9) {
        lAcabou = true;
    }

    //Realiza a soma de cada coluna, linha e diagonal e coloca o valor num vetor

    var Soma = [];
    Soma[0] = casas[0] + casas[1] + casas[2]; //Linha 1

    Soma[1] = casas[3] + casas[4] + casas[5]; //Linha 2

    Soma[2] = casas[6] + casas[7] + casas[8]; //Linha 3

    Soma[3] = casas[0] + casas[3] + casas[6]; //Coluna 1

    Soma[4] = casas[1] + casas[4] + casas[7]; //Coluna 2

    Soma[5] = casas[2] + casas[5] + casas[8]; //Coluna 3

    Soma[6] = casas[0] + casas[4] + casas[8]; //Diagonal 1

    Soma[7] = casas[2] + casas[4] + casas[6]; //Diagonal 2

    //Percorre todos os valores de soma
    for (i = 0; i < Soma.length; i++) {

        //Se achou uma soma (-3) é porque a bola ganhou

        if (Soma[i] == -3) {
            lGanhou = true;
            sResposta = "Bolinha GANHOU!!!";
            iPontosO++;
            document.getElementById("bola").innerHTML = "Pontos O: " + iPontosO;
            break;

            //Se achou uma soma (3) é porque a xis ganhou

        } else if (Soma[i] == 3) {
            lGanhou = true;
            sResposta = "Xis GANHOU!!!";
            iPontosX++;
            document.getElementById("xis").innerHTML = "PONTOS X: " + iPontosX;
            break;
        }
    }

    //Se bola e nem xis Ganharam, mas o jogo acabou, é porque deu velha

    if (lGanhou == false && lAcabou == true) {
        sResposta = "Deu VELHA!!!";
        iPontosV++;
        document.getElementById("velha").innerHTML = "VELHA . . . : " + iPontosV;
    }

    //Se alguem ganhou ou o jogo acabou

    if (lGanhou || lAcabou) {

        //Desabilita todas as casas para não serem mais clicadas

        for (i = 0; i < casas.length; i++) {
            document.getElementById("casa" + i).disable = true;
            casas[i] = 0;
        }

        //Exibe o resultado

        document.getElementById("resposta").innerHTML = sResposta;

        //Muda cor da letra

        document.getElementById("resposta").style.cor = "#ffc400";

        //Muda tamanho do texto

        document.getElementById("resposta").style.fontSize = "xx-large";

        //Window.confirm(sResposta);
    }
}

// ***************************************************************

//Função que recomeça todo o jogo

function recomeca(){
    for(i = 0; i < casas.length; i++){

        //Não permite arrastar a imagem

        document.getElementById("img"+i).ondragstart = function() { return false;};

        //Habilita as casas

        document.getElementById("casa"+i).disable=false;

        //Remove as imagens

        document.getElementById("img"+i).src="";

        //volta a Configuração original

        document.getElementById("resposta").innerHTML = "RESULTADO:"

        document.getElementById("resposta").style.color = "#f5ff00";

        document.getElementById("resposta").style.fontSize = "Large:";

        //Restaura os 9 das casas

        casas[i] = 9;
        lGanhou = false;
        lAcabou = true;
        contaclique = 0;
        vez = 1;
    }
}