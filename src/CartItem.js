import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 36999,
            title: 'ROG Phone II',
            qty: 1,
            img: ''
        }
    }

    increaseQty = () => {
        this.setState((prevState) => {
            return {
                qty : prevState.qty+1
            }
        });
    }
    decreaseQty = () => {
        this.setState((prevState) => {
            if (prevState.qty!==0){
                return {
                    qty : prevState.qty-1
                }
            }
        });
    }
    render(){

        const {price, title, qty, img} = this.state;

        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img alt="item" style={style.image} src={img}/>
                </div>
                <div className='right-block'>
                    <div style={ { fontSize: 25 } }>{title}</div>
                    <div style={ { color: '#777' } }>Rs {price}</div>
                    <div style={ { color: '#777' } }>Qyt: {qty}</div>
                    <div className='cart-item-actions'>
                        <img 
                            alt="increase" 
                            className='action-icons' 
                            //src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg"
                            onClick={this.increaseQty}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            //src="https://www.flaticon.com/svg/static/icons/svg/659/659892.svg"
                            onClick={this.decreaseQty}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            //src="https://www.flaticon.com/svg/static/icons/svg/3096/3096673.svg"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const style = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 3
    }
}

export default CartItem;