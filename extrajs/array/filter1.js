const produtos = [
  { nome: 'Notebook', preco: 22331, fragil: true },
  { nome: 'Ipad Pro', preco: 4331, fragil: true },
  { nome: 'Copo de vidro', preco: 1331, fragil: true },
  { nome: 'Copo de plastico', preco: 18.331, fragil: false }
]

console.log(produtos.filter(function(p) {
  return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))