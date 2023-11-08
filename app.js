import express from 'express';
import Hello from './hello.js';
import Lab5 from './lab5.js';
const app = express()
app.use(express.json()) ///qqqqqqqqqqqqqqqqqqqqq
Lab5(app)
Hello(app)
app.listen(4000)