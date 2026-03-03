const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'Orders Service OK' });
});

app.post('/orders', async (req, res) => {
  const { productId } = req.body;

  try {
    const response = await axios.get('http://products:3000/products');
    const product = response.data.find(p => p.id === productId);

    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    res.json({ message: 'Pedido criado!', product });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao comunicar com Products Service' });
  }
});

app.listen(3000, () => {
  console.log('Orders Service rodando na porta 3000');
});
