import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
    const { products } = props;
    return(
        <div className="cart">
            { products.map((product) => {
                return (
                    <CartItem 
                        product={product} 
                        key={product.id}
                        onIncreaseHandle={props.onIncreaseHandle}
                        onDecreaseHandle={props.onDecreaseHandle}
                        onDeleteHandle={props.onDeleteHandle}
                    />
                )
            })}
        </div>
    );
}


export default Cart;