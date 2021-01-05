const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema ({
   items: [{
      productId: { 
         type: Schema.Types.ObjectId,
         ref: 'Product',
         required: true 
      }, 
      quantity: { 
         type: Number,
         required: true
      },
   }]
    ,
    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'Customer'
    }
});


// cartSchema.methods.addToCart = function(product) {
//    const cartProductIndex = this.cart.items.findIndex(cp => {
//       return cp.productId.toString() === product._id.toString();
//    });

//    let newQuantity = 1;

//    const updatedCartItems = [...this.cart.items];

//    if (cartProductIndex >= 0) {
//       newQuantity = this.cart.items[cartProductIndex].quantity + 1;
//       updatedCartItems[cartProductIndex].quantity = newQuantity;
//    } else {
//       updatedCartItems.push({
//          productId: product._id,
//          quantity: newQuantity
//       });
//    }

//    const updatedCart = {
//       items: updatedCartItems
//    };

//    this.cart = updatedCart;
//    return this.save();
// };

module.exports = mongoose.model('Cart', cartSchema);