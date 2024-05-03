const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser())

app.get('/', (req, res) => {
  const token = jwt.sign({email: 'test@example.com'}, "secret")

  res.cookie('token', token);
  res.send('done');
})

app.get('/read', (req, res) => {
  const data = jwt.verify(req.cookies.token, 'secret')
  console.log(data);
})

app.listen(3000);