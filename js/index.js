const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");
const divPlayers = document.getElementById("players");
let vez = document.getElementById("vez");
const board = document.getElementById("board");
const btnIniciar = document.getElementById("btnIniciar");
board.style.display = "none";

const btnReiniciar = document.getElementById("btnReiniciar");
btnReiniciar.style.display = "none";

btnIniciar.addEventListener("click", function (ev) {
  if (player1.value == "" || player2.value == "") {
    alert("Nome de um dos jogadores não foi informado!");
  } else {
    divPlayers.style.display = "none";
    board.style.display = "flex";
    btnReiniciar.style.display = "flex";
    vez.textContent = `Vez do jogador ${player1.value}! - X`;
  }
});

const cell = document.querySelectorAll(".cell");
let jogadas = 0;
let vencedor = "";
const mensagemVencedor = document.getElementById("vencedor");

cell.forEach(function (el) {
  el.addEventListener("click", function (ev) {
    if (ev.target.textContent == "") {
      // Verifica se é par ou impar para saber qual jogador está jogando
      if (jogadas % 2 == 0) {
        ev.target.textContent = "X";
        vez.textContent = `Vez do jogador ${player2.value}! - O`;
      } else {
        ev.target.textContent = "O";
        vez.textContent = `Vez do jogador ${player1.value}! - X`;
      }
      jogadas++;
      vencedor = verificaVencedor();
      console.log(vencedor);
      if (vencedor != "") {
        mensagemVencedor.textContent = `O jogador ${vencedor} venceu!`;
        // Desabilita o click nas celulas para não serem mais acionadas
        cell.forEach(function (el) {
          el.style.pointerEvents = "none";
        });
      } else {
        if (jogadas == 9) {
          mensagemVencedor.textContent = `Deu velha!`;
          cell.forEach(function (el) {
            el.style.pointerEvents = "none";
          });
        }
      }
    }
  });
});

function verificaVencedor() {
  // Verifica se o jogador 1 venceu
  if (
    cell[0].textContent == "X" &&
    cell[1].textContent == "X" &&
    cell[2].textContent == "X"
  ) {
    cell[0].style.backgroundColor = "#green";
    cell[1].style.backgroundColor = "green";
    cell[2].style.backgroundColor = "green";
    return player1.value;
  } else if (
    cell[3].textContent == "X" &&
    cell[4].textContent == "X" &&
    cell[5].textContent == "X"
  ) {
    cell[3].style.backgroundColor = "green";
    cell[4].style.backgroundColor = "green";
    cell[5].style.backgroundColor = "green";
    return player1.value;
  } else if (
    cell[6].textContent == "X" &&
    cell[7].textContent == "X" &&
    cell[8].textContent == "X"
  ) {
    cell[6].style.backgroundColor = "green";
    cell[7].style.backgroundColor = "green";
    cell[8].style.backgroundColor = "green";
    return player1.value;
  } else if (
    cell[0].textContent == "X" &&
    cell[3].textContent == "X" &&
    cell[6].textContent == "X"
  ) {
    cell[0].style.backgroundColor = "green";
    cell[3].style.backgroundColor = "green";
    cell[6].style.backgroundColor = "green";
    return player1.value;
  } else if (
    cell[1].textContent == "X" &&
    cell[4].textContent == "X" &&
    cell[7].textContent == "X"
  ) {
    cell[1].style.backgroundColor = "green";
    cell[4].style.backgroundColor = "green";
    cell[7].style.backgroundColor = "green";
    return player1.value;
  } else if (
    cell[2].textContent == "X" &&
    cell[5].textContent == "X" &&
    cell[8].textContent == "X"
  ) {
    cell[2].style.backgroundColor = "green";
    cell[5].style.backgroundColor = "green";
    cell[8].style.backgroundColor = "green";
    return player1.value;
  } else if (
    cell[0].textContent == "X" &&
    cell[4].textContent == "X" &&
    cell[8].textContent == "X"
  ) {
    cell[0].style.backgroundColor = "green";
    cell[4].style.backgroundColor = "green";
    cell[8].style.backgroundColor = "green";
    return player1.value;
  } else if (
    cell[2].textContent == "X" &&
    cell[4].textContent == "X" &&
    cell[6].textContent == "X"
  ) {
    cell[2].style.backgroundColor = "green";
    cell[4].style.backgroundColor = "green";
    cell[6].style.backgroundColor = "green";
    return player1.value;
  }

  // Verifica se o jogador 2 venceu
  if (
    cell[0].textContent == "O" &&
    cell[1].textContent == "O" &&
    cell[2].textContent == "O"
  ) {
    cell[0].style.backgroundColor = "green";
    cell[1].style.backgroundColor = "green";
    cell[2].style.backgroundColor = "green";
    return player2.value;
  } else if (
    cell[3].textContent == "O" &&
    cell[4].textContent == "O" &&
    cell[5].textContent == "O"
  ) {
    cell[3].style.backgroundColor = "green";
    cell[4].style.backgroundColor = "green";
    cell[5].style.backgroundColor = "green";
    return player2.value;
  } else if (
    cell[6].textContent == "O" &&
    cell[7].textContent == "O" &&
    cell[8].textContent == "O"
  ) {
    cell[6].style.backgroundColor = "green";
    cell[7].style.backgroundColor = "green";
    cell[8].style.backgroundColor = "green";
    return player2.value;
  } else if (
    cell[0].textContent == "O" &&
    cell[3].textContent == "O" &&
    cell[6].textContent == "O"
  ) {
    cell[0].style.backgroundColor = "green";
    cell[3].style.backgroundColor = "green";
    cell[6].style.backgroundColor = "green";
    return player2.value;
  } else if (
    cell[1].textContent == "O" &&
    cell[4].textContent == "O" &&
    cell[7].textContent == "O"
  ) {
    cell[1].style.backgroundColor = "green";
    cell[4].style.backgroundColor = "green";
    cell[7].style.backgroundColor = "green";
    return player2.value;
  } else if (
    cell[2].textContent == "O" &&
    cell[5].textContent == "O" &&
    cell[8].textContent == "O"
  ) {
    cell[2].style.backgroundColor = "green";
    cell[5].style.backgroundColor = "green";
    cell[8].style.backgroundColor = "green";
    return player2.value;
  } else if (
    cell[0].textContent == "O" &&
    cell[4].textContent == "O" &&
    cell[8].textContent == "O"
  ) {
    cell[0].style.backgroundColor = "green";
    cell[4].style.backgroundColor = "green";
    cell[8].style.backgroundColor = "green";
    return player2.value;
  } else if (
    cell[2].textContent == "O" &&
    cell[4].textContent == "O" &&
    cell[6].textContent == "O"
  ) {
    cell[2].style.backgroundColor = "green";
    cell[4].style.backgroundColor = "green";
    cell[6].style.backgroundColor = "green";
    return player2.value;
  }

  return "";
}

//Reiniciar o jogo
btnReiniciar.addEventListener("click", function (ev) {
  cell.forEach(function (el) {
    el.textContent = "";
    el.style.backgroundColor = "white";
    el.style.pointerEvents = "auto";
  });
  jogadas = 0;
  vencedor = "";
  mensagemVencedor.textContent = "";
  vez.textContent = `Vez do jogador ${player1.value}! - X`;
});
