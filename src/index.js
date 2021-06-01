'use strict';
const express = require('express');
const app = express();
const router = require('./router');

app.use(router);

app.get('/', function (req, res) {
  res.send('Test App');
});

app.listen(3000, () => {
    console.log('Running on the port 3000...');
});
