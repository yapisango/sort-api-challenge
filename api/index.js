const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://sort-api-frontend-q09qcztvh-sango-mabhuti-yapis-projects.vercel.app'
  ]
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, '../../public')));

app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});


app.post('/', (req, res) => {
  const { data } = req.body;

  if (typeof data !== 'string') {
    return res.status(400).json({ error: 'Invalid input. "data" must be a string.' });
  }

  const sortedChars = data.split('').sort().join('');
  res.status(200).json({ word: sortedChars });
});

module.exports = app;

