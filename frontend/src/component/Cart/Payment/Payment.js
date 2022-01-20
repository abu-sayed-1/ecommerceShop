import React, { Fragment, useEffect, useState } from "react";
import "./Payment.css";
import CheckoutSteps from "../CheckoutSteps/CheckoutSteps";
import MetaData from "../../layout/MetaData";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get(
      "/api/v1/stripeapikey"
    );

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    getStripeApiKey();
  }, []);

  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />

      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <CheckoutForm />
        </Elements>
      )}
    </Fragment>
  );
};

export default Payment;
