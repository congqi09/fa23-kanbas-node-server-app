import express from 'express';
import Hello from './hello.js';
const app = express()
// app.get('/hello', (req, res) => {res.send('Life is good!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
// qq: could nodemon trigger the front-end auto-refresh?
Hello(app)
app.listen(4000)