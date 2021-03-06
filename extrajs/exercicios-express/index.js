const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')
produtoApi(app, 'com param')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())

app.use(saudacao('guilherme'))

app.use('/opa', (req, res, next) => {
  console.log('sera que serei chamado')
  next()
})

app.get('/clientes/:id', (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado`)
})

app.get('/clientes/relatorios', (req, res) => {
  res.send(`Cliente relatorio: completo ${req.query.completo} selecionado`)
})

app.get('/opa',(req, res) => {
  res.json({
    data: [
      { id: 7, name: 'ana', position: 1 },
      { id: 34, name: 'bia', position: 2 },
      { id: 73, name: 'carlos', position: 3 }
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200
  })


  /*res.json([
    { id: 7, name: 'ana', position: 1 },
    { id: 34, name: 'bia', position: 2 },
    { id: 73, name: 'carlos', position: 3 }
  ])*/

  //res.send('Estou bem')
})

app.listen(3000, () => {
  console.log('Backend executando')
})