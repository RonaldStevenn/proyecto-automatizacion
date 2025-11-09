const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    version: '1.0.0'
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
