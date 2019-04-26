'use strict';

const express = require('express');

const PORT = 9000;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello docker! node too!');
});

app.listen(PORT, HOST);
console.log(`Running onn http://${HOST}:${PORT}`);
