const alunos = [
  { nome: 'joao', nota: 7.3, bolsista: false },
  { nome: 'maria', nota: 9.2, bolsista: true },
  { nome: 'pedro', nota: 9.8, bolsista: false },
  { nome: 'ana', nota: 8.7, bolsista: true }
]

// desafio 1: todos os alunos são bolsistas ?

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// desafio 2: algum aluno é bolsista ?
const algumBolsista = (resultado, bolsita) => resultado || bolsita
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
