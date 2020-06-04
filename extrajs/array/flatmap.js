const escola = [{
  nome: 'Turma m1',
  alunos: [{
    nome: 'gustavo',
    nota: 8.1
  },{
    nome: 'ana',
    nota: 9.3
  }]
},{
  nome: 'Turma m2',
  alunos: [{
    nome: 'rebeca',
    nota: 8.9
  },{
    nome: 'roberto',
    nota: 7.3
  }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)