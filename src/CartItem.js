import React from 'react';

const CartItem = (props) => {

    const { price, title, qty } = props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
    return (
        <div className='cart-item'>
            <div className='left-block'>
                <img src={product.img} style={styles.image} alt="" />
            </div>
            <div className='right-block'>
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: '#777' }}>Rs. {price}</div>
                <div style={{ color: '#777' }}>Qty. {qty}</div>
                <div className='cart-item-actions'>
                    {/* buttons */}
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/148/148764.png"
                        alt='increase' className='action-icons'
                        onClick={() => {
                            onIncreaseQuantity(props.product);
                        }}
                    />
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/4436/4436695.png"
                        alt='decrease' className='action-icons'
                        onClick={() => {
                            onDecreaseQuantity(props.product);
                        }}
                    />
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/9147/9147722.png"
                        alt='delete' className='action-icons'
                        onClick={() => {
                            onDeleteProduct(props.product.id);
                        }}
                    />
                </div>
            </div>
        </div>
    )

}
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 8
    }
}

export default CartItem;