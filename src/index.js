const express = require('express');

const app = express();

app.get('/produtos', (req, res) => {
  return res.send('Listagem de produtos');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});