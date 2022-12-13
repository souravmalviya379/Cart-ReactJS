import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
   constructor() {
      super();
      this.state = {
         products: [
            {
               price: 999,
               title: 'Mobile Phone',
               qty: 10,
               img: '',
               id: 1
            },
            {
               price: 99,
               title: 'Watch',
               qty: 10,
               img: '',
               id: 2
            },
            {
               price: 9999,
               title: 'Laptop',
               qty: 4,
               img: '',
               id: 3
            }
         ]
      }
   }
   handleIncreaseQuantity = (product) => {
      const {products} = this.state;   
      //getting the index of product in products array
      const index = products.indexOf(product);
      
      products[index].qty += 1;

      this.setState({
         products
      })
   }

   handleDecreaseQuantity = (product) =>{
      const {products} = this.state;
      //getting index
      const index = products.indexOf(product);
      if(products[index].qty == 0){
         return;
      }else{
         products[index].qty -= 1;
         this.setState({
            products
         })
      }
   }

   handleDeleteProduct = (productId)=>{
      const {products} = this.state;

      const items = products.filter((item)=> item.id !== productId);

      this.setState({
         products: items
      })
   }
   render() {
      const { products } = this.state;
      return (
         <>
            <div>CART</div>
            <div className='cart'>
               {products.map((product) => {
                  return (
                     <CartItem
                        product={product}
                        key={product.id} 
                        onIncreaseQuantity = {this.handleIncreaseQuantity}
                        onDecreaseQuantity = {this.handleDecreaseQuantity}
                        onDeleteProduct = {this.handleDeleteProduct}
                     />)
               })}
            </div>
         </>
      );
   }

}

export default Cart;