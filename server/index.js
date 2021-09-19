const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './.env' });
const createCheckoutSession = require('./api/checkout');
const webhook = require('./api/webhook');
const paymentIntent = require('./api/paymentIntent');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  express.json({
    verify: (req, res, buffer) => {
      req['rawBody'] = buffer;
    },
  })
);
app.use(cors({ origin: true }));

app.get('/', (req, res) => res.json('Hello!'));

app.post('/create-checkout-session', createCheckoutSession);

app.post('/create-payment-intent', paymentIntent);

app.post('/webhook', webhook);

app.listen(PORT, () => console.log('server is running on port ', PORT));
