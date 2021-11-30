const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const { isValidToken } = require('./middleware/validation');

const ENDPOINT_EXTERNAL_API = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get(
  '/btc',
  isValidToken,
  async (_req, res) => {
    const result = await axios.get(ENDPOINT_EXTERNAL_API);
    
    res.status(200).json(result.data);
  }
)

const PORT = 3000;
app.listen(PORT, () => console.log(`Run server localhost:${PORT}`))
