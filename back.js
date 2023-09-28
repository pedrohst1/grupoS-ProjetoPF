// a função abaixo obtem o personagem e a bandeira a partir do seu id contido no html. 
const jogador = document.getElementById('personagem');
const bandeira = document.getElementById('bandeira')

 /*a função "atualizarposicao" recebe x e y como parametros de coornedas e  utilizando o id fornecido no html do personagem serve
para atualizar a posição do jogador usando left e top para alterar as coordenadas acrescentando certo valor de px. De maneira semelhante, 
a função também é reponsável por atualizar a posição da bandeira. Por fim, na linha "bandeira.style.display = 'block';"a função é 
responsável por tornar a bandeira visível na tela.*/
const AtualizarPosicao = (x, y) => {
    jogador.style.left = x + 'px';
    jogador.style.top = y + 'px';
    bandeira.style.left = Bandeira.x + 'px';
    bandeira.style.top = Bandeira.y + 'px'
    bandeira.style.display = 'block';
};

/* as funções abaixo são resposáveis por determinar a posição inicial da bandeira e do jogador no inicio do jogo a partir das 
coordenadas apresentadas em x e y */
const PosicaoJogador = {
    x: 700,
    y: 697,
};
const Bandeira = {
    x: 700,
    y: 40,
}
//Essas são responsaveis por atualizar e posicionar jogador e bandeira no inicio do jogo.
AtualizarPosicao(PosicaoJogador.x, PosicaoJogador.y)
AtualizarPosicao(Bandeira.x, Bandeira.y)

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
            return { x: x+10, y}
        }
        else if (tecla === 'ArrowLeft' || tecla === 'a' || tecla === 'A') {
            return { x: x-10, y}
        }
        else if (tecla === 'ArrowUp'|| tecla === 'w' || tecla === 'W') {
            return {x, y: y-10};
        } else {
             return {x,y} 
        }
    };

/* a função a seguir é responsável por verificar a conddição da vitória do jogo. Se a distancia entre a coordenada da bandeira e do jogador
for menos que 10px, um alerta é emitido na tela de vitória. a primeira linha é responsavel por obter as novas coordenadas do jogador, 
a const distancia é responsavel por calcular a distancia euclidiana entre a bandeira e a bandeira e o jogador e uma condição é feita de
que caso a distancia seja menor que 10p,  um alerta de vitória será exibido. */

    const { x: novoX, y: novoY } = novaPosicao (apertarTecla);
    PosicaoJogador.x = novoX
    PosicaoJogador.y = novoY
    AtualizarPosicao(novoX, novoY)

    const distancia = Math.sqrt((novoX - Bandeira.x)**2 + (novoY - Bandeira.y)**2);
    if (distancia<10) { alert ('Você Venceu!');
}
})