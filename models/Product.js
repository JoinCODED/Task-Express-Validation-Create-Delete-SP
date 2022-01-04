const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    price: Number,
    image: String,
    quantity: Number,
  },
  { timestamps: true }
);
module.exports = mongoose.model('Product', ProductSchema);
