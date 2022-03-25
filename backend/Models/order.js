const mongoose = require('mongoose');
const { Schema } = mongoose;
const orderdetailsSchema = new Schema({
    userId:{type:Schema.Types.ObjectId,ref:'UserData'},
    orderId: { type: String, default: "ORD0001" },
    dateAndTime: { type: String,default:"10 OCT 2021 10:15" },
    product_details: [{
        productType: { type: String, required: true },
        quantity: { type: Number, default: 0 },
        Wash: { type: Boolean, default: false },
        Iron: { type: Boolean, default: false },
        Fold: { type: Boolean, default: false },
        Pack: { type: Boolean, default: false },
        price: { type: Number, default: 0 }
    }],
    storeLocation: { type: String, default: "JB nagar" },
    city: { type: String, default: "Bangalore" },
    storePhone: { type: String, default: "9988776655" },
    totalitems: { type: Number, required: true },
    totalprice: { type: Number, required: true },
    status: { type: String, default:"ready to pickup"}
})

const orderdetails = mongoose.model('orderdetails', orderdetailsSchema)

module.exports = orderdetails;