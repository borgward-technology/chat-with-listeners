require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");

const router = express.Router();

router.post("/:amt", async (req, res) => {

    const amount = req.params.amt;

    console.log("amount   ->>>>>>>>>>>     "+amount);

    try {

        console.log("API STARTED ");

        const instance = new Razorpay({
            key_id: 
            process.env.RAZORPAY_KEY_ID,
            key_secret: 
             process.env.RAZORPAY_SECRET,

        });

        const options = {
            amount: (amount * 100),
            currency: "INR",
            receipt: "receipt_order_74394",

        };

        order_id :"0123456789",

        console.log("KEYS ARE OK ");
        const order = await instance.orders.create(options);
        console.log("instance.orders.create(options); -----------  ");

        if (!order) return res.status(500).send("Some error occured");

        console.log("order -----------  "+order);

        res.status(200).json(order);
    } catch (error) {
        res.status(500).send(error);
    }

});

module.exports = router;
