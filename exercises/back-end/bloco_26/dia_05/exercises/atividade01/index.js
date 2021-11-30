const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRouter = require('./routers/userRouter');

const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use('/user', userRouter);

const PORT = 3000
app.listen(PORT, () => console.log('Run server http://localhost:3000'))
