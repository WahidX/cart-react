import React from 'react';

class CartItem extends React.Component{
    
    render(){

        const {price, title, qty, img} = this.props.product;
        const { onIncreaseHandle, onDecreaseHandle, onDeleteHandle } = this.props;
        
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img alt="item" style={style.image} src={img}/>
                </div>
                <div className='right-block'>
                    <div style={ { fontSize: 25 } }>{title}</div>
                    <div style={ { color: '#777' } }>Rs {price}</div>
                    <div style={ { color: '#777' } }>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        <img 
                            alt="increase" 
                            className='action-icons' 
                            //src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg"
                            onClick={() => onIncreaseHandle(this.props.product)}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            //src="https://www.flaticon.com/svg/static/icons/svg/659/659892.svg"
                            onClick={() => onDecreaseHandle(this.props.product)}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            //src="https://www.flaticon.com/svg/static/icons/svg/3096/3096673.svg"
                            onClick={() => onDeleteHandle(this.props.product)}
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