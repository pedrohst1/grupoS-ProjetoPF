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
};


//Função responsável por mostrar na tela o tempo que falta para o encerramento da partida de 10s até 0s.
const iniciarCronometro = () => {
    const tempoTotal = 10; 
    const inicio = Date.now();

    const atualizarCronometro = () => {
        const tempocorrido = (Date.now() - inicio) / 1000;

        if (tempocorrido >= tempoTotal) {
            clearInterval(IntervalodoCronometro);
            alert('Você perdeu!');
            mostrarBotaoReiniciar();
        } else {
            const tempoRestante = tempoTotal - tempocorrido;
            cronometro.textContent = tempoRestante.toFixed(1) + 's';
        }
    };

    const cronometro = document.getElementById('cronometro');
    atualizarCronometro();
    const IntervalodoCronometro = setInterval(atualizarCronometro, 100);
};
/* as funções abaixo são resposáveis por determinar a posição inicial da bandeira e do jogador no inicio do jogo a partir das 
coordenadas apresentadas em x e y */
const PosicaoJogador = {
    x: 700,
    y: 630,
};

const Bandeira = {
    x: 700,
    y: 40,
};
/*(Lauren) As funções abaixo são responsáveis pela aleatoriedade do surgimento das bombas, assim, toda vez que a página for atualizada
as bombas estarão em uma posição diferente da que estavam anteriormente*/

const Bomba1 = {
    x: (Math.random() * 300) + 200,
    y: (Math.random() * 300) + 200,
    removida: false,
};

const Bomba2 = {
    x: (Math.random() * 300) + 200,
    y: (Math.random() * 300) + 200,
    removida: false,
};

const Bomba3 = {
    x: (Math.random() * 300) + 200,
    y: (Math.random() * 300) + 200,
    removida: false,
};

const Bomba4 = {
    x: (Math.random() * 300) + 500,
    y: (Math.random() * 300) + 200,
    removida: false,
};

const Bomba5 = {
    x: (Math.random() * 300) + 500,
    y: (Math.random() * 300) + 200,
    removida: false,
};

const Bomba6 = {
    x: (Math.random() * 300) + 500,
    y: (Math.random() * 300) + 200,
    removida: false,
};

//Essas são responsaveis por atualizar e posicionar jogador e bandeira no inicio do jogo.
AtualizarPosicao(PosicaoJogador.x, PosicaoJogador.y)
AtualizarPosicao(Bandeira.x, Bandeira.y)
AtualizarPosicao(Bomba1.x, Bomba1.y)
AtualizarPosicao(Bomba2.x, Bomba2.y)
AtualizarPosicao(Bomba3.x, Bomba3.y)
AtualizarPosicao(Bomba4.x, Bomba4.y)
AtualizarPosicao(Bomba5.x, Bomba5.y)
AtualizarPosicao(Bomba6.x, Bomba6.y)

//Essa função é responsável por fazer os cálculos para identificar colisão com a bomba, se assim for verificado, as consequências são feitas.
const verificarColisaoComBomba = (novoX, novoY, bomba) => {
    if (bomba.removida) {
        return false
    }

    const distanciaBomba = Math.sqrt((novoX - bomba.x) ** 2 + (novoY - bomba.y) ** 2);
    if (distanciaBomba < 20) {
        {PosicaoJogador.x = 700, PosicaoJogador.y = 630};
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
// FUNÇÃO RESPONSAVEL POR FAZER O BOTAO DE REINICIAR SER EXIBIDO APOS O JOGADOR PERDER A PARTIDA
const mostrarBotaoReiniciar = () => {
    const reiniciarJogoButton = document.getElementById('reiniciarJogo');
    reiniciarJogoButton.style.display = 'block';
    reiniciarJogoButton.addEventListener('click', reiniciarJogo); // Adicione esse manipulador de evento
}
// FUNÇÃO RESPONSAVEL POR VERIFICAR SE O JOGADOR PERDEU O JOGO POR COLIDIR COM 3 BOMBAS
const verificarPerdaJogo = () => {
    const bombasColididas = [Bomba1, Bomba2, Bomba3, Bomba4, Bomba5, Bomba6].filter(bomba => bomba.removida);
  
    if (bombasColididas.length >= 3 ) {
      alert("Você perdeu o jogo!");
mostrarBotaoReiniciar()
    }
  }

  // Função para reiniciar o jogo quando o jogador perder, seja pelo tempo esgotado ou por colidir com 3 bombas.
  const reiniciarJogo = () => {
    PosicaoJogador.x = 700;
    PosicaoJogador.y = 630;
    Bandeira.x = 700;
    Bandeira.y = 40;

    Bomba1.removida = false;
    Bomba2.removida = false;
    Bomba3.removida = false;
    Bomba4.removida = false;
    Bomba5.removida = false;
    Bomba6.removida = false;

    Bomba1.x = (Math.random() * 300) + 200;
    Bomba1.y = (Math.random() * 300) + 200;

    Bomba2.x = (Math.random() * 300) + 200;
    Bomba2.y = (Math.random() * 300) + 200;

    Bomba3.x = (Math.random() * 300) + 200;
    Bomba3.y = (Math.random() * 300) + 200;

    Bomba4.x = (Math.random() * 300) + 500;
    Bomba4.y = (Math.random() * 300) + 200;

    Bomba5.x = (Math.random() * 300) + 500;
    Bomba5.y = (Math.random() * 300) + 200;

    Bomba6.x = (Math.random() * 300) + 500;
    Bomba6.y = (Math.random() * 300) + 200;

    Bomba1.removida = false;
    Bomba2.removida = false;
    Bomba3.removida = false;
    Bomba4.removida = false;
    Bomba5.removida = false;
    Bomba6.removida = false;

    AtualizarPosicao(PosicaoJogador.x, PosicaoJogador.y);
    AtualizarPosicao(Bandeira.x, Bandeira.y);
    AtualizarPosicao(Bomba1.x, Bomba1.y);
    AtualizarPosicao(Bomba2.x, Bomba2.y);
    AtualizarPosicao(Bomba3.x, Bomba3.y);
    AtualizarPosicao(Bomba4.x, Bomba4.y);
    AtualizarPosicao(Bomba5.x, Bomba5.y);
    AtualizarPosicao(Bomba6.x, Bomba6.y);
    iniciarCronometro();
    document.getElementById('reiniciarJogo').style.display = 'none';
}

/* A função abaixo é responsável por permitir a movimentação do jogador a partir do seu ID fornecido no html, utilizando um detector 
de eventos que identifica a tecla pressionada e retorna uma função de retorno que é acionada permitindo o movimento; a função apertartecla
reconhece qual tecla foi pressionada durante o evento e armazena. A seguir, o objeto PosicaoJogador é desestruturado para obter a nova
coordenada do jogador; A função novaPosicao recebe a tecla que foi apertada como um parametro e diz a nova posição do jogador com base na
tecla pressionada.*/
document.addEventListener('keydown', (evento) => {
    const apertarTecla = evento.key;
    const { x, y } = PosicaoJogador;
    const novaPosicao = (tecla) => {

        /* a seguir, a partir da tecla pressionada, varias condições são verificadas e de acordo como evento, a coordenada do jogador será adicionada
        ou subtraida em 10px. */
        if (tecla === 'ArrowRight' || tecla === 'd' || tecla == 'D') {
            return { x: x + 10, y }
        }
        else if (tecla === 'ArrowLeft' || tecla === 'a' || tecla === 'A') {
            return { x: x - 10, y }
        }
        else if (tecla === 'ArrowUp' || tecla === 'w' || tecla === 'W') {
            return { x, y: y - 10 };
        } else {
            return { x, y }
        }
    };

    /* a função a seguir é responsável por verificar a conddição da vitória do jogo. Se a distancia entre a coordenada da bandeira e do jogador for menos que 20px, um alerta é emitido na tela de vitória. a primeira linha é responsavel por obter as novas coordenadas do jogador, a const distancia é responsavel por calcular a distancia euclidiana entre a bandeira e a bandeira e o jogador e uma condição é feita de que caso a distancia seja menor que 20px,  um alerta de vitória será exibido. */
    const { x: novoX, y: novoY } = novaPosicao(apertarTecla);
    PosicaoJogador.x = novoX
    PosicaoJogador.y = novoY
    AtualizarPosicao(novoX, novoY)

    const distanciaBandeira = Math.sqrt((novoX - Bandeira.x) ** 2 + (novoY - Bandeira.y) ** 2);
        if (distanciaBandeira < 20) { alert('Você Venceu!');
    }

    //Nessa parte está contida as consequências da explosão da bomba, o alerta e a função que "explode" as bombas
    if (verificarColisaoComBomba(novoX, novoY, Bomba1)) {
        alert("Boom!");
        removerBomba(bomba1);
    }
    if (verificarColisaoComBomba(novoX, novoY, Bomba2)) {
        alert("Boom!");
        removerBomba(bomba2);
    }
    if (verificarColisaoComBomba(novoX, novoY, Bomba3)) {
        alert("Boom!");
        removerBomba(bomba3);
    }
    if (verificarColisaoComBomba(novoX, novoY, Bomba4)) {
        alert("Boom!");
        removerBomba(bomba4);
    }
    if (verificarColisaoComBomba(novoX, novoY, Bomba5)) {
        alert("Boom!");
        removerBomba(bomba5);
    }
    if (verificarColisaoComBomba(novoX, novoY, Bomba6)) {
        alert("Boom!");
        removerBomba(bomba6);
    }
})

// (Lauren) Está parte é responsável por colocar o jogador na posição inicial toda vez que a página for atualizada
//Responsável também por inciar o cronometro assim que a pagina for atualizada.
window.addEventListener('load', function () {
    jogador.style.left = '700px';
    jogador.style.top = '630px';
    iniciarCronometro();
});