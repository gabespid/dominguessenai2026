const prompt = require('prompt-sync')();

const produtos = [
  { nome: 'Notebook', preco: 3500 },
  { nome: 'Mouse', preco: 80 },
  { nome: 'Teclado', preco: 150 }
];

const nomeBuscado = prompt('Digite o nome do produto: ');

let encontrado = false;

for (let i = 0; i < produtos.length; i++) {
  if (produtos[i].nome.toLowerCase() === nomeBuscado.toLowerCase()) {
    console.log('O preço de ' + produtos[i].nome + ' é R$ ' + produtos[i].preco);
    encontrado = true;
    break;
  }
}

if (!encontrado) {
  console.log('Produto não encontrado.');
}

produtos.sort((a, b) => a.preco - b.preco);

for (let i = 0; i < produtos.length; i++) {
  console.log(produtos[i].nome + ' - ' + produtos[i].preco);
}
