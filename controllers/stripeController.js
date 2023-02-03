const stripe = require('stripe')(process.env.STRIPE_KEY);

const stripeController = async (req, res) => {
const {purchase, total_amount, shipping_fee} = req.body;
const calculatOrderAmount = () => {
  return total_amount + shipping_fee
}
const paymentIntent = await stripe.paymentIntents.create({
  amount: calculatOrderAmount(),
  currency: 'usd',
})
res.json({clientSecret:paymentIntent.client_secret})

//  res.send('stripe route');
};

module.exports = stripeController;
