const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Express is running!');
});

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

