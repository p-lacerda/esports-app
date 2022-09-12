import express from 'express';

const app = express();

app.get('/ads', (_, res) => {
  res.status(201).json([
    { id: 1, name: 'Anuncio 1' },
    { id: 2, name: 'Anuncio 2' },
    { id: 3, name: 'Anuncio 3' }
  ])
});

app.listen(3000, () => {
  console.log('Example app listening on port 3003!');
  console.log(`Access this address: http://localhost:3003`);
});