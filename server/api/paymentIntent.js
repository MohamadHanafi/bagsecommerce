const stripeAPI = require('../stripe');

const calculateOrderAmount = (items) => {
  const orderAmount = items.reduce(
    (total, item) => total + item.price * 100 * item.quantity,
    0
  );
  return orderAmount;
};

const paymentIntent = async (req, res) => {
  const { cartItems, description, receipt_email, shipping } = req.body;

  let paymentIntent;
  try {
    paymentIntent = await stripeAPI.paymentIntents.create({
      amount: calculateOrderAmount(cartItems),
      currency: 'usd',
      payment_method_types: ['card'],
      description,
      receipt_email,
      shipping,
    });
    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ error: 'an error occurred, unable to create a payment intent' });
  }
};

module.exports = paymentIntent;
