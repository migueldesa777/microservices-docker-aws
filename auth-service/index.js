const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'Auth Service OK' });
});

app.post('/login', (req, res) => {
  const { email } = req.body;
  res.json({ message: `Usuário ${email} autenticado!` });
});

app.listen(3000, () => {
  console.log('Auth Service rodando na porta 3000');
});
