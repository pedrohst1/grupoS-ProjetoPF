<script type="module" src="back.js"></script>

//essa função é a responsável por designar a posição inicial do jogador, da bandeira(cuja posição é fixa) e das bombas utilizando as coordenadas 
//representadas por x e y. Além disso, é responsavel por definir a quantidade de corações/vidas que o player inicia tendo na partida e o estado inicial da pontuação que aumenta no decorrer do jogo.
// o tempo também foi definido nessa função, visto que ele é necessário para que aja o desafio na partida. a partida se inicia com 30s que decaem até o jogador pegar a bandeira ou o tempo ser 0s
const EstadoInicial = {
    jogador: { x:100, y: 100},
    bandeira: {x:700, y:600},
    vidadojogador: 3,
    pontuacao: 0,
    tempo: 30,
    bombas: [
        {x: 200, y:300},
        {x: 400, y:200},
        {x: 600, y: 400}
    ]
};

// essa função é a responsável por atualizar o "estado" do jogo a cada nova mmudança feita pelo jogador, seja a colisão com uma bomba, o ato de pegar a bandeira ou simplesmente o andar do personagem.
//a função moverjogador recebe como parametros o "estado", novox e novoy, que são as novas coodernadas que o jogador se encontra ao se mover. feito isso, ela retorna o estado atualizado do jogo.
// a atualização é feita através do operador spread que cria uma cópia do estado e o jogador atualiza suas coordenadas com o novox e novoy.
//!!!!!!!!!!!ainda será implementada novas funçoes resposaveis por movimentarem o personagem atraves do teclado a partir dessa!!!!!!!

const moverjogador = (estado, novoX, novoY) => ({...estado,
jogador: {x: novoX, y: novoY},
});

// essa função é reponsável por verificar se o personagem colidiu com uma bomba e se colidiu fará com que ele perca uma vida.
// a função usa a função de alta ordem filter para criar um array chamado colisaocombomba e esse outro array vai ter as bombas que o jogador colidiu.
// a colisão acontece caso a distancia da bomba e dos jogadores seja menor do que 10pixels
// se o array colisaocombomb for maior que 0(nao estiver vazio), ela retorna o estado atualizado da vida do jogador retirando uma de suas vidas.
const checarcolisaocombomba = (estado) => {
    const {jogador, bombas, vidajogador} = estado;
const colisaocombomba = bombas.filter((bomba) => Math.abs(jogador.x - bomba.x) <10 && Math.abs(jogador.y - bomba.y) <10);
if (colisaocombomba.length>0 && vidadojogador>0) { return {...estado,vidajogador: vidadojogador -1}
} else {
    return estado
}
}

//(Theo) Essa função é responsável por verificar se o personagem chegou até a bandeira, caso tenha chegado será exibida a mensagem "Parabéns, você venceu!" ao jogador.
const checarcolisaocombandeira = (novoX, novoY) => {
    if (novoX == 700 && novoY == 600) return 'Parabéns, você venceu!'
}