const express = require('express');
const bodyParser = require('body-parser');
const orderdetails = require('../Models/order');
const router = express.Router();

router.use(bodyParser());
//router.use(bodyParser.urlencoded({ extended: false }));

//---------------||creating orders ||------------------------

router.post("/orders", async (req, res) => {
    console.log("creating order!!")
    try {
        console.log(req.body)
        const order = await orderdetails.create({
            userId:req.userId,
            product_details: req.body.product_details,
            totalitems: req.body.totalitems,
            totalprice: req.body.totalprice,
            status: req.body.status
        })
        return res.status(200).json({
            status: "Order is created",
            data: order
        })
    } catch (e) {
        return res.status(500).json({
            status: "Failed while fetching orders",
            message: e.message
        })
    }
})


//------------------||Fetch all orders||------------------------

router.get("/pastorders", async (req, res) => {
    try{
        const orders = await orderdetails.find({userId:req.user});
        res.status(200).json({
            status: "success",
            orders
        })
      }catch(e){
            console.log(e);
            return res.status(500).json({
                status:"Failed",
                message:e.message
            })
        }
    });

//--------------------||cancel orders||----------------

router.put("/orders/:id", async (req, res) => {
    try {
        const orders = await orderdetails.updateOne({_id: req.params.id, userId: req.user},  {status: "Cancelled"})
        return res.status(200).json({
            status: "Success",
            orders
        })
        

    } catch (e) {
        return res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})

module.exports = router;