    const totalCasas = 25;
    const tabuleiro = document.getElementById('tabuleiro');

    let posicaoAtual = 0; // Começa fora do tabuleiro
    const quadrados = [];

    // Criar os quadrados dinamicamente
    for (let i = 1; i <= totalCasas; i++) {
      const div = document.createElement('div');
      div.classList.add('quadrado');
      div.innerText = i;
      tabuleiro.appendChild(div);
      quadrados.push(div);
    }

    // Criar o peão e adicionar ao primeiro quadrado
    const peao = document.createElement('div');
    peao.classList.add('peao');
    quadrados[posicaoAtual].appendChild(peao);

    function gerarNumero() {
      const n = Math.floor(Math.random() * 6) + 1;
      document.getElementById('numero').innerText = n;
      moverPeao(n);
    }

    function moverPeao(n) {
      // Remove o peão da posição atual
      quadrados[posicaoAtual].removeChild(peao);

      // Calcula nova posição (sem passar do último quadrado)
      posicaoAtual = Math.min(posicaoAtual + n, totalCasas - 1);

      // Adiciona o peão à nova posição
      quadrados[posicaoAtual].appendChild(peao);
    }