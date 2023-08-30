const express = require("express");
require("dotenv").config();
const stripe = require("stripe")("sk_test_51NkibELTPibWaPOZo6S1dUAkBTsFN91f7AsJJj2btMnP7Xn9mqGtYmg4Dlp2J9Ww6NeFkrLnkCZfg3cr8qobPSHS00z1sEB2tc");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(cors())

app.post("/payment", cors(), async (req, res)=>{
    let {amount, id} = req.body

    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Payment",
            payment_method: id,
            confirm: true,
            automatic_payment_methods: {
                enabled: true,
                allow_redirects: 'never'
            }
        })

        console.log("Payment", payment)
        res.json({
            message: "Payment was successful",
            success: true
        })
    } catch (error) {
        console.log("Error", error)
        res.json({
            message: "Payment Failed",
            success: false
        })
    }
})


app.listen(process.env.PORT || 4000, ()=>{
    console.log("Server is running")
})