import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { ReactComponent as logo } from "../../assets/crown.svg";

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const publicKey =
    "pk_test_51IRXziBMXSyLxo5j4O3VwbEIzdfkCMybOcIDoYEAIhK7364Kwr0Z5bhbkYZtR7SG3CLeRDCf5KbHbClcljC58eHi00IqU4d2Qy";

  const onToken = (token) => {
    console.log("token:", token);
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      image={logo}
      shippingAddress
      billingAddress
      description={`Your total is $${price}`}
      panelLabel="Pay now"
      amount={stripePrice}
      token={onToken}
      stripeKey={publicKey}
    />
  );
};
export default StripeCheckoutButton;
