import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
    }

    increaseQuantity = ()=>{
        // this.state.qty ++;   does not render 
        // console.log(this.state.qty)
        //setState function form-1
        // this.setState({             
        //     qty: this.state.qty + 1
        // })

        //setState function form-2
        this.setState((prevState)=>{
            return {
                qty: prevState.qty + 1
            }
        })
    }

    decreaseQuantity = ()=>{
        if(this.state.qty === 0){return;}
        this.setState({
            qty: this.state.qty - 1
        })
    }

    render(){
        const {price, title, qty} = this.state;
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
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            src="https://cdn-icons-png.flaticon.com/128/4436/4436695.png" 
                            alt='decrease' className='action-icons'
                            onClick={this.decreaseQuantity}
                        />
                        <img src="https://cdn-icons-png.flaticon.com/128/9147/9147722.png" alt='delete' className='action-icons'/>
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