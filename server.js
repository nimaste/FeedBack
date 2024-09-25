const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware para interpretar JSON e permitir CORS
app.use(bodyParser.json());
app.use(cors());

// Conectar ao banco de dados SQLite ou criar se não existir
const db = new sqlite3.Database('./avaliacoes.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conectado ao banco de dados SQLite.');
});

// Criar tabela se não existir
db.run(`CREATE TABLE IF NOT EXISTS avaliacoes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  comentario TEXT,
  nota INTEGER
)`);

// Rota para salvar a avaliação
app.post('/avaliar', (req, res) => {
  const { comentario, nota } = req.body;

  if (!comentario || nota === undefined) {
    return res.status(400).send('Comentário ou nota não fornecidos.');
  }

  const sql = `INSERT INTO avaliacoes (comentario, nota) VALUES (?, ?)`;
  db.run(sql, [comentario, nota], function(err) {
    if (err) {
      return console.error(err.message);
    }
    res.send(`Avaliação com nota ${nota} salva com sucesso!`);
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});