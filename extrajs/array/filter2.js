Array.prototype.filter2 = function(callback) {
  const newArray = []
  for(let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      newArray.push(this[i])
    }
  }
  return newArray
}

const produtos = [
  { nome: 'Notebook', preco: 22331, fragil: true },
  { nome: 'Ipad Pro', preco: 4331, fragil: true },
  { nome: 'Copo de vidro', preco: 1331, fragil: true },
  { nome: 'Copo de plastico', preco: 18.331, fragil: false }
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))