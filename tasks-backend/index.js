const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  console.log('Func 0')
  next()
})

app.get('/', (req, res) => {
  res.status(200).send('Meu backend')
})

app.listen(3000, () => {
  console.log('Backend executando ....')
})