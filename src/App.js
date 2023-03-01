import React from "react";
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from "./Navbar";

import firebase from 'firebase/app';
import 'firebase/firestore';

class App extends React.Component {

   constructor() {
      super();
      this.state = {
         products: [],
         loading: true
      };
      this.db = firebase.firestore();
   }


   componentDidMount() {
      firebase
         .firestore()
         .collection('products')
         .onSnapshot((snapshot) => {
            // console.log(snapshot);

            // snapshot.docs.map((doc)=>{
            //    console.log(doc.id +"=> "+ doc.data());
            // });

            const products = snapshot.docs.map((doc) => {
               let data = doc.data();
               data['id'] = doc.id;
               return data;
            })

            this.setState({
               products,
               loading: false
            })
         });

   }

   handleIncreaseQuantity = (product) => {
      const { products } = this.state;
      //getting the index of product in products array
      const index = products.indexOf(product);

      // products[index].qty += 1;

      //fetching document with docid
      const docRef = this.db.collection('products').doc(products[index].id);
      docRef
         .update({
            qty: products[index].qty + 1
         })
         .then(() => {
            console.log('Updated successfully')
         })
         .catch((error) => {
            console.log('Error in updating quantity : ', error);
         })

   }

   handleDecreaseQuantity = (product) => {
      const { products } = this.state;
      //getting index
      const index = products.indexOf(product);
      if (products[index].qty === 0) {
         return;
      }

      const docRef = this.db.collection('products').doc(products[index].id);
      docRef
         .update({
            qty: products[index].qty - 1
         })
         .then(()=>{
            console.log('Updated successfully');
         })
         .catch((err)=>{
            console.log('Error in updating qty : ', err);
         })
   }

   handleDeleteProduct = (productId) => {
      const { products } = this.state;

      // const items = products.filter((item) => item.id !== productId);

      // this.setState({
      //    products: items
      // })

      const docRef = this.db.collection('products').doc(productId);
      docRef
         .delete()
         .then(()=>{
            console.log('Deleted successfully');
         })
         .catch((err)=>{
            console.log('Error in deleting product : ', err);
         })
   }

   getCartCount = () => {
      const { products } = this.state;
      let count = 0;
      products.forEach((product) => {
         count += product.qty;
      })

      return count;
   }

   getCartTotal = () => {
      const { products } = this.state;
      let total = 0;
      products.forEach((product) => {
         total += product.price * product.qty;
      })
      return total;
   }

   addProduct = () => {
      this.db
         .collection('products')
         .add({
            img: "",
            price: 999,
            qty: 3,
            title: 'Refridgerator'
         })
   }
   render() {
      const { products, loading } = this.state;
      return (
         <div className="App">
            < Navbar count={this.getCartCount()} />
            {/* <button className="add" onClick={this.addProduct}>Add a Product</button> */}
            < Cart
               products={products}
               onIncreaseQuantity={this.handleIncreaseQuantity}
               onDecreaseQuantity={this.handleDecreaseQuantity}
               onDeleteProduct={this.handleDeleteProduct}
            />
            {loading && <h1>Loading Products...</h1>}
            <div style={{ fontSize: 20, padding: 15 }}>
               TOTAL: {this.getCartTotal()}
            </div>
         </div>
      );
   }

}

export default App;
