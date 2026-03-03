const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'Products Service OK' });
});

app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Notebook' },
    { id: 2, name: 'Mouse' }
  ]);
});

app.listen(3000, () => {
  console.log('Products Service rodando na porta 3000');
});
