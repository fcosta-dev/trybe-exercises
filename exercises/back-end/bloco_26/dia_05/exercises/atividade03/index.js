const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postRouter = require('./router/postRouter');
const errors = require('./middlewares/routerNotFound');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/posts', postRouter);

app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'rota nao encontrada' }));

app.use(errors.routerNotFound);

const PORT = 3000;
app.listen(PORT, () => console.log('Run server localhost 3000'))
