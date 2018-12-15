const baralho = [];
const naipes = ["p", "c", "o", "e"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

const init = function() {
  for (let naipe in naipes) {
    for (let valor in valores) {
      //console.log (naipes[naipe], valores[valor])
      const carta = {
        naipe: naipes[naipe],
        valor: valores[valor]
      };
      baralho.push(carta);
    }
  }
  //console.log(baralho)
  embaralhar(baralho);
};

const embaralhar = function(pBaralho) {
  const novoBaralho = [];
  while (pBaralho.length > 0) {
    console.log("tamanho", pBaralho.length);
    const posicao = Math.floor(Math.random() * pBaralho.length);
    const carta = pBaralho[posicao];
    novoBaralho.push(carta);
    pBaralho.splice(posicao, 1);
  }
  console.log(novoBaralho);
};

export { init, embaralhar };
