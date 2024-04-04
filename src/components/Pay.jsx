import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const key =
  "pk_test_51OoqMXSDLkx4nUda5Of7Lvn4LAVklSH0msCLWtQxZ3i4Ca2dtrwmbiB7g8bODWiysFatv6AdCO7BkgjQmImFEcTw000XeiK4HA";

  const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);
  
    const onToken = (token) => {
        console.log(token)
      setStripeToken(token);
    };

    console.log(stripeToken.id)
  
    useEffect(() => {
      const makePayment = async () => {
        try {
          const res = await axios.post(
            "http://localhost:5000/api/checkout/payment",
            {
              tokenId: stripeToken.id,
              amount: 2000,
            },
            {
              headers: {
                Authorization: `Bearer ${process.env.STRIPE_KEY}`,
              },
            }
          );
          // console.log(res.data)
        } catch (err) {
          console.log(err);
        }
      };
  
      stripeToken && makePayment();
    }, [stripeToken]);
  
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <StripeCheckout
          name="naveedOrg"
          image=""
          billingAddress
          shippingAddress
          description="your total is 20"
          amount={2000}
          token={onToken}
          stripeKey={key}
        >
          <button
            style={{
              border: "none",
              width: "120px",
              borderRadius: "5px",
              padding: "20px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Pay
          </button>
        </StripeCheckout>
      </div>
    );
  };
  
  export default Pay;
  