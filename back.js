// a função abaixo obtem o personagem e a bandeira a partir do seu id contido no html. 
const jogador = document.getElementById('personagem');
const bandeira = document.getElementById('bandeira');
// as funções abaixem são responsáveis por pegar as bombas a partir do id delas
const bomba1 = document.getElementById('bomba1');
const bomba2 = document.getElementById('bomba2');
const bomba3 = document.getElementById('bomba3');
const bomba4 = document.getElementById('bomba4');
const bomba5 = document.getElementById('bomba5');
const bomba6 = document.getElementById('bomba6');
const bomba7 = document.getElementById('bomba7');
const bomba8 = document.getElementById('bomba8');
const bomba9 = document.getElementById('bomba9');
const bomba10 = document.getElementById('bomba10');
const bomba11 = document.getElementById('bomba11');
const bomba12 = document.getElementById('bomba12');
const CaixadeMensagem = document.getElementById('CaixadeMensagem')

/*a função "atualizarposicao" recebe x e y como parametros de coornedas e  utilizando o id fornecido no html do personagem serve
para atualizar a posição do jogador usando left e top para alterar as coordenadas acrescentando certo valor de px. De maneira semelhante, 
a função também é reponsável por atualizar a posição da bandeira. Por fim, na linha "bandeira.style.display = 'block';"a função é 
responsável por tornar a bandeira visível na tela.*/
const AtualizarPosicao = (x, y) => {
    jogador.style.left = x + 'px';
    jogador.style.top = y + 'px';
    bandeira.style.left = Bandeira.x + 'px';
    bandeira.style.top = Bandeira.y + 'px';
    bandeira.style.display = 'block';
    /* (Lauren) por enquando as bombas ficaram visíveis pois é necessário fazer a parte da colisão com as bombas e isso só é possível se 
    enxergarmos as bombas*/
    bomba1.style.left = Bomba1.x + 'px';
    bomba1.style.top = Bomba1.y + 'px';
    bomba1.style.display = 'block';

    bomba2.style.left = Bomba2.x + 'px';
    bomba2.style.top = Bomba2.y + 'px';
    bomba2.style.display = 'block';

    bomba3.style.left = Bomba3.x + 'px';
    bomba3.style.top = Bomba3.y + 'px';
    bomba3.style.display = 'block';

    bomba4.style.left = Bomba4.x + 'px';
    bomba4.style.top = Bomba4.y + 'px';
    bomba4.style.display = 'block';

    bomba5.style.left = Bomba5.x + 'px';
    bomba5.style.top = Bomba5.y + 'px';
    bomba5.style.display = 'block';

    bomba6.style.left = Bomba6.x + 'px';
    bomba6.style.top = Bomba6.y + 'px';
    bomba6.style.display = 'block';

    bomba7.style.left = Bomba7.x + 'px';
    bomba7.style.top = Bomba7.y + 'px';
    bomba7.style.display = 'block';

    bomba8.style.left = Bomba8.x + 'px';
    bomba8.style.top = Bomba8.y + 'px';
    bomba8.style.display = 'block';

    bomba9.style.left = Bomba9.x + 'px';
    bomba9.style.top = Bomba9.y + 'px';
    bomba9.style.display = 'block';

    bomba10.style.left = Bomba10.x + 'px';
    bomba10.style.top = Bomba10.y + 'px';
    bomba10.style.display = 'block';

    bomba11.style.left = Bomba11.x + 'px';
    bomba11.style.top = Bomba11.y + 'px';
    bomba11.style.display = 'block';

    bomba12.style.left = Bomba12.x + 'px';
    bomba12.style.top = Bomba12.y + 'px';
    bomba12.style.display = 'block';
};
//FUNÇÃO RESPONSAVEL POR FAZER A MENSAGEM APARECER NA TELA QUANDO UMA DAS CONDIÇÕES(VITORIA, DERROTA OU PISAR EM BOMBA) FOR SATISFEITA
const MensagemAparece = (mensagem) => {
    CaixadeMensagem.innerHTML = mensagem
    CaixadeMensagem.style.display = 'block'
}
//FUNCAO QUE DEIXA A MENSAGEM OCULTA ENQUANTO NÃO É CHAMADA
const MensagemOculta = () => {
    CaixadeMensagem.style.display = 'none'
}
//Função responsável por mostrar na tela o tempo que falta para o encerramento da partida de 20s até 0s. O encerramento ocasiana na perda.
//Utilizamos o let pois era necessário uma variável para controlar o estado do jogo
let jogoEmAndamento = false
let IntervalodoCronometro = null
let jogoContinua = true
const iniciarCronometro = () => {
    if (jogoEmAndamento) {
        return;
    }
    if (IntervalodoCronometro) {
        clearInterval(IntervalodoCronometro);
    }
    const tempoTotal = 30;
    const inicio = Date.now();

    const atualizarCronometro = () => {
        const tempocorrido = (Date.now() - inicio) / 1000;

        if (tempocorrido >= tempoTotal) {
            jogoContinua = false
            clearInterval(IntervalodoCronometro);
            MensagemAparece('Você demorou muito! Tente Novamente.');;
            setTimeout(MensagemOculta, 2000)
            mostrarBotaoReiniciar();
        } else {
            const tempoRestante = tempoTotal - tempocorrido;
            cronometro.textContent = tempoRestante.toFixed(1) + 's';
        }
    };

    const cronometro = document.getElementById('cronometro');
    atualizarCronometro();
    IntervalodoCronometro = setInterval(atualizarCronometro, 100); // Modificado para usar a variável global
};
/* as funções abaixo são resposáveis por determinar a posição inicial da bandeira e do jogador no inicio do jogo a partir das 
coordenadas apresentadas em x e y */
const PosicaoJogador = {
    x: 737,
    y: 600,
};

const Bandeira = {
    x: 737,
    y: 60,
};
/*(Lauren) As funções abaixo são responsáveis pela aleatoriedade do surgimento das bombas, assim, toda vez que a página for atualizada
as bombas estarão em uma posição diferente da que estavam anteriormente*/

const Bomba1 = {
    x: (Math.random() * 300) + 530,
    y: (Math.random() * 300) + 200,
    removida: false,
};

const Bomba2 = {
    x: (Math.random() * 300) + 650,
    y: (Math.random() * 300) + 200,
    removida: false,
};

const Bomba3 = {
    x: (Math.random() * 300) + 580,
    y: (Math.random() * 300) + 200,
    removida: false,
};

const Bomba4 = {
    x: (Math.random() * 300) + 670,
    y: (Math.random() * 300) + 200,
    removida: false,
};

const Bomba5 = {
    x: (Math.random() * 300) + 760,
    y: (Math.random() * 300) + 200,
    removida: false,
};

const Bomba6 = {
    x: (Math.random() * 300) + 509,
    y: (Math.random() * 300) + 400,
    removida: false,
};

const Bomba7 = {
    x: (Math.random() * 300) + 545,
    y: (Math.random() * 300) + 340,
    removida: false,
};

const Bomba8 = {
    x: (Math.random() * 300) + 550,
    y: (Math.random() * 300) + 320,
    removida: false,
};

const Bomba9 = {
    x: (Math.random() * 300) + 590,
    y: (Math.random() * 300) + 300,
    removida: false,
};

const Bomba10 = {
    x: (Math.random() * 300) + 576,
    y: (Math.random() * 300) + 400,
    removida: false,
};

const Bomba11 = {
    x: (Math.random() * 300) + 507,
    y: (Math.random() * 300) + 360,
    removida: false,
};

const Bomba12 = {
    x: (Math.random() * 300) + 556,
    y: (Math.random() * 300) + 300,
    removida: false,
};

//Essas são responsaveis por atualizar e posicionar jogador, bombas e bandeira no inicio do jogo.
AtualizarPosicao(PosicaoJogador.x, PosicaoJogador.y)
AtualizarPosicao(Bandeira.x, Bandeira.y)
AtualizarPosicao(Bomba1.x, Bomba1.y)
AtualizarPosicao(Bomba2.x, Bomba2.y)
AtualizarPosicao(Bomba3.x, Bomba3.y)
AtualizarPosicao(Bomba4.x, Bomba4.y)
AtualizarPosicao(Bomba5.x, Bomba5.y)
AtualizarPosicao(Bomba6.x, Bomba6.y)
AtualizarPosicao(Bomba7.x, Bomba7.y)
AtualizarPosicao(Bomba8.x, Bomba8.y)
AtualizarPosicao(Bomba9.x, Bomba9.y)
AtualizarPosicao(Bomba10.x, Bomba10.y)
AtualizarPosicao(Bomba11.x, Bomba11.y)
AtualizarPosicao(Bomba12.x, Bomba12.y)

//Essa função é responsável por fazer os cálculos para identificar colisão com a bomba, se assim for verificado, as consequências são feitas.
const verificarColisaoComBomba = (novoX, novoY, bomba) => {
    if (bomba.removida) {
        return false
    }

    const distanciaBomba = Math.sqrt((novoX - bomba.x) ** 2 + (novoY - bomba.y) ** 2);
    if (distanciaBomba < 20) {
        { PosicaoJogador.x = 737, PosicaoJogador.y = 600 };
        AtualizarPosicao(PosicaoJogador.x, PosicaoJogador.y);
        bomba.removida = true;
        return true;
    }
    return false;
}

//Essa é a função responsável por "explodir" a bomba (removê-la do jogo após a colisão com a mesma ter sido identificada).
const removerBomba = (bomba) => {
    if (bomba.parentNode) {
        bomba.parentNode.removeChild(bomba);
        verificarPerdaJogo();
    }
};
// FUNÇÃO RESPONSAVEL POR FAZER O BOTAO DE REINICIAR SER EXIBIDO APOS O JOGADOR PERDER A PARTIDA, PERMITINDO QUE O JOGADOR REINICIE O JOGO
const mostrarBotaoReiniciar = () => {
    const reiniciarJogoButton = document.getElementById('reiniciarJogo');
    reiniciarJogoButton.style.display = 'block';
    reiniciarJogoButton.addEventListener('click', reiniciarJogo); // Adicione esse manipulador de evento
}
// FUNÇÃO RESPONSAVEL POR VERIFICAR SE O JOGADOR PERDEU O JOGO POR COLIDIR COM 3 BOMBAS
const verificarPerdaJogo = () => {
    const bombasColididas = [Bomba1, Bomba2, Bomba3, Bomba4, Bomba5, Bomba6, Bomba7, Bomba8, Bomba9, Bomba10, Bomba11, Bomba12].filter(bomba => bomba.removida);

    if (bombasColididas.length >= 3) {
        jogoContinua = false
        MensagemAparece('Você pisou em bombas demais! Tente novamente.');;
        setTimeout(MensagemOculta, 2000)
        mostrarBotaoReiniciar()
        clearInterval(IntervalodoCronometro)
    }
}

/* Função para reiniciar o jogo quando o jogador perder, seja pelo tempo esgotado ou por colidir com 3 bombas
ela faz com que o estado incial do jogo retorne, a posição do jogador, das bombas e o cronometro. */
const reiniciarJogo = () => {
    PosicaoJogador.x = 737
    PosicaoJogador.y = 600
    Bandeira.x = 737;
    Bandeira.y = 60;
    jogoContinua = true

    Bomba1.removida = false;
    Bomba2.removida = false;
    Bomba3.removida = false;
    Bomba4.removida = false;
    Bomba5.removida = false;
    Bomba6.removida = false;
    Bomba7.removida = false;
    Bomba8.removida = false;
    Bomba9.removida = false;
    Bomba10.removida = false;
    Bomba11.removida = false;
    Bomba12.removida = false;

    Bomba1.x = (Math.random() * 300) + 530;
    Bomba1.y = (Math.random() * 300) + 200;

    Bomba2.x = (Math.random() * 300) + 650;
    Bomba2.y = (Math.random() * 300) + 200;

    Bomba3.x = (Math.random() * 300) + 580;
    Bomba3.y = (Math.random() * 300) + 200;

    Bomba4.x = (Math.random() * 300) + 670;
    Bomba4.y = (Math.random() * 300) + 200;

    Bomba5.x = (Math.random() * 300) + 760;
    Bomba5.y = (Math.random() * 300) + 200;

    Bomba6.x = (Math.random() * 300) + 509;
    Bomba6.y = (Math.random() * 300) + 430;

    Bomba7.x = (Math.random() * 300) + 545;
    Bomba7.y = (Math.random() * 300) + 340;

    Bomba8.x = (Math.random() * 300) + 550;
    Bomba8.y = (Math.random() * 300) + 320;

    Bomba9.x = (Math.random() * 300) + 590;
    Bomba9.y = (Math.random() * 300) + 300;

    Bomba10.x = (Math.random() * 300) + 500;
    Bomba10.y = (Math.random() * 300) + 450;

    Bomba11.x = (Math.random() * 300) + 570;
    Bomba11.y = (Math.random() * 300) + 430;

    Bomba12.x = (Math.random() * 300) + 580;
    Bomba12.y = (Math.random() * 300) + 300;


    Bomba1.removida = false;
    Bomba2.removida = false;
    Bomba3.removida = false;
    Bomba4.removida = false;
    Bomba5.removida = false;
    Bomba6.removida = false;
    Bomba7.removida = false;
    Bomba8.removida = false;
    Bomba9.removida = false;
    Bomba10.removida = false;
    Bomba11.removida = false;
    Bomba12.removida = false;

    AtualizarPosicao(Bandeira.x, Bandeira.y);
    AtualizarPosicao(Bomba1.x, Bomba1.y);
    AtualizarPosicao(Bomba2.x, Bomba2.y);
    AtualizarPosicao(Bomba3.x, Bomba3.y);
    AtualizarPosicao(Bomba4.x, Bomba4.y);
    AtualizarPosicao(Bomba5.x, Bomba5.y);
    AtualizarPosicao(Bomba6.x, Bomba6.y);
    AtualizarPosicao(Bomba7.x, Bomba7.y);
    AtualizarPosicao(Bomba8.x, Bomba8.y);
    AtualizarPosicao(Bomba9.x, Bomba9.y);
    AtualizarPosicao(Bomba10.x, Bomba10.y);
    AtualizarPosicao(Bomba11.x, Bomba11.y);
    AtualizarPosicao(Bomba12.x, Bomba12.y);
    iniciarCronometro();
    jogador.style.left = '740px';
    jogador.style.top = '600px';
    if (!jogoEmAndamento) { iniciarCronometro() }
    document.getElementById('reiniciarJogo').style.display = 'none';
}

/* A função abaixo é responsável por permitir a movimentação do jogador a partir do seu ID fornecido no html, utilizando um detector 
de eventos que identifica a tecla pressionada e retorna uma função de retorno que é acionada permitindo o movimento; a função apertartecla
reconhece qual tecla foi pressionada durante o evento e armazena. A seguir, o objeto PosicaoJogador é desestruturado para obter a nova
coordenada do jogador; A função novaPosicao recebe a tecla que foi apertada como um parametro e diz a nova posição do jogador com base na
tecla pressionada.*/
document.addEventListener('keydown', (evento) => {
    if (!jogoContinua) { return }
    const apertarTecla = evento.key;
    const { x, y } = PosicaoJogador;
    const novaPosicao = (tecla) => {

        /* a seguir, a partir da tecla pressionada, varias condições são verificadas e de acordo como evento, a coordenada do jogador será adicionada
        ou subtraida em 10px. */
        if (tecla === 'ArrowRight' || tecla === 'd' || tecla == 'D') {
            return { x: x + 20, y }
        }
        else if (tecla === 'ArrowLeft' || tecla === 'a' || tecla === 'A') {
            return { x: x - 20, y }
        }
        else if (tecla === 'ArrowUp' || tecla === 'w' || tecla === 'W') {
            return { x, y: y - 20 };
        }
        else if (tecla === 'ArrowDown' || tecla === 's' || tecla === 'S') {
            return { x, y: y + 20 };
        } else {
            return { x, y }
        }
    };

    const { x: novoX, y: novoY } = novaPosicao(apertarTecla);
    PosicaoJogador.x = novoX
    PosicaoJogador.y = novoY

    /*(Lauren) está parte do código é responsável por não deixar o jogador ultrapassar as "paredes do jogo". Nela foi definida os limites max e min
        do campo do jogo. O jogador só poderá se mover se a posição(x,y) dele estiver dentro dos limites, por isso foi definido um if, assim, quando 
        a posição atende a condição, a função "AtualizarPosicao" é chamada e o jogador se move */
    const limiteXMin = 300;
    const limiteXMax = 1140;
    const limiteYMin = 58;
    const limiteYMax = 608;

    if (
        novoX >= limiteXMin &&
        novoX <= limiteXMax &&
        novoY >= limiteYMin &&
        novoY <= limiteYMax
    ) { AtualizarPosicao(novoX, novoY) }


    /* a função a seguir é responsável por verificar a conddição da vitória do jogo. Se a distancia entre a coordenada da bandeira e do jogador for 
    menos que 30px, um alerta é emitido na tela de vitória. a primeira linha é responsavel por obter as novas coordenadas do jogador, a const distancia
    é responsavel por calcular a distancia euclidiana entre a bandeira e a bandeira e o jogador e uma condição é feita de que caso a distancia seja 
    menor que 30px,  um alerta de vitória será exibido. */
    const distanciaBandeira = Math.sqrt((novoX - Bandeira.x) ** 2 + (novoY - Bandeira.y) ** 2);
    if (distanciaBandeira < 30) {
        jogoContinua = false
        MensagemAparece("Você Venceu!");
        setTimeout(MensagemOculta, 2000)
        mostrarBotaoReiniciar();
        clearInterval(IntervalodoCronometro);
    }



    //Nessa parte está contida as consequências da explosão da bomba, o alerta e a função que "explode" as bombas
    if (verificarColisaoComBomba(novoX, novoY, Bomba1)) {
        MensagemAparece('Você pisou em uma bomba! Tente novamente.');
        setTimeout(MensagemOculta, 2000)
        removerBomba(bomba1);
    }
    if (verificarColisaoComBomba(novoX, novoY, Bomba2)) {
        MensagemAparece('Você pisou em uma bomba! Tente novamente.');
        setTimeout(MensagemOculta, 2000)
        removerBomba(bomba2);
    }
    if (verificarColisaoComBomba(novoX, novoY, Bomba3)) {
        MensagemAparece('Você pisou em uma bomba! Tente novamente.');
        setTimeout(MensagemOculta, 2000)
        removerBomba(bomba3);
    }
    if (verificarColisaoComBomba(novoX, novoY, Bomba4)) {
        MensagemAparece('Você pisou em uma bomba! Tente novamente.');
        setTimeout(MensagemOculta, 2000)
        removerBomba(bomba4);
    }
    if (verificarColisaoComBomba(novoX, novoY, Bomba5)) {
        MensagemAparece('Você pisou em uma bomba! Tente novamente.');
        setTimeout(MensagemOculta, 2000)
        removerBomba(bomba5);
    }
    if (verificarColisaoComBomba(novoX, novoY, Bomba6)) {
        MensagemAparece('Você pisou em uma bomba! Tente novamente.');
        setTimeout(MensagemOculta, 2000)
        removerBomba(bomba6);
    }
    if (verificarColisaoComBomba(novoX, novoY, Bomba7)) {
        MensagemAparece('Você pisou em uma bomba! Tente novamente.');
        setTimeout(MensagemOculta, 2000)
        removerBomba(bomba7);

    }
    if (verificarColisaoComBomba(novoX, novoY, Bomba8)) {
        MensagemAparece('Você pisou em uma bomba! Tente novamente.');
        setTimeout(MensagemOculta, 2000)
        removerBomba(bomba8);

    }
    if (verificarColisaoComBomba(novoX, novoY, Bomba9)) {
        MensagemAparece('Você pisou em uma bomba! Tente novamente.');
        setTimeout(MensagemOculta, 2000)
        removerBomba(bomba9);

    }
    if (verificarColisaoComBomba(novoX, novoY, Bomba10)) {
        MensagemAparece('Você pisou em uma bomba! Tente novamente.');
        setTimeout(MensagemOculta, 2000)
        removerBomba(bomba10);

    }
    if (verificarColisaoComBomba(novoX, novoY, Bomba5)) {
        MensagemAparece('Você pisou em uma bomba! Tente novamente.');
        setTimeout(MensagemOculta, 2000)
        removerBomba(bomba11);

    }
    if (verificarColisaoComBomba(novoX, novoY, Bomba12)) {
        MensagemAparece('Você pisou em uma bomba! Tente novamente.');
        setTimeout(MensagemOculta, 2000)
        removerBomba(bomba12);

    }
})


// (Lauren) Está parte é responsável por colocar o jogador na posição inicial toda vez que a página for atualizada
//Responsável também por inciar o cronometro assim que a pagina for atualizada.
window.addEventListener('load', function () {
    jogador.style.left = '740px';
    jogador.style.top = '600px';
    iniciarCronometro();
});