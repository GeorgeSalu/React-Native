const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 1.45 }',
  '{ "nome": "Kit de Lapis", "preco": 23.45 }',
  '{ "nome": "Caneta", "preco": 7.5 }'
]

// retorna um array apenas com os precos
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)