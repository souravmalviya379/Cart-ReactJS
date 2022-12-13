import React from 'react';

class CartItem extends React.Component {

    render(){
        const {price, title, qty} = this.props.product;
        const {onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = this.props;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} alt="" />
                </div>
                <div className='right-block'>
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs. {price}</div>
                    <div style={{color: '#777'}}>Qty. {qty}</div>
                    <div className='cart-item-actions'>
                        {/* buttons */}
                        <img 
                            src="https://cdn-icons-png.flaticon.com/128/148/148764.png" 
                            alt='increase' className='action-icons'
                            onClick={()=>{
                                onIncreaseQuantity(this.props.product);
                            }}
                        />
                        <img 
                            src="https://cdn-icons-png.flaticon.com/128/4436/4436695.png" 
                            alt='decrease' className='action-icons'
                            onClick={()=>{
                                onDecreaseQuantity(this.props.product);
                            }}
                        />
                        <img 
                            src="https://cdn-icons-png.flaticon.com/128/9147/9147722.png" 
                            alt='delete' className='action-icons'
                            onClick={()=>{
                                onDeleteProduct(this.props.product.id);
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 8
    }
}

export default CartItem;