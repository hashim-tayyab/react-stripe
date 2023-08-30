import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './paymentForm';

const stripePromise = loadStripe("pk_test_51NkibELTPibWaPOZcoy3WLgUnsVmagZvJRsNA5iIkOzrDufGB9ZLKF4aXS3VDEFoFmXRbgm0rIhSomqJpAp93grF00EmMXC42Z");

function Stripe() {
  return (
    <Elements stripe={stripePromise}>
        <PaymentForm/>
    </Elements>
   )
}

export default Stripe;