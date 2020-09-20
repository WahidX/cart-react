import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{

    constructor(){
        super();
        this.state = {
            products : [
                {
                    price: 36999,
                    title: 'ROG Phone II',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 43000,
                    title: 'Asus r558UQ',
                    qty: 2,
                    img: '',
                    id: 2
                },
                {
                    price: 83000,
                    title: 'ROG Zephyrus G14',
                    qty: 1,
                    img: '',
                    id: 3
                }
            ]
        }
    }

    handleIncreaseQuantity = (product)=> {
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty++;

        this.setState({
            products
        });
    }

    handleDecreaseQuantity = (product)=> {
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty === 0)
            return;

        products[index].qty--;

        this.setState({
            products
        });
    }

    handleDeleteProduct = (product)=> {
        const {products} = this.state;
        // const index = products.indexOf(product);
        
        this.setState({
            products: products.filter((item) => item!==product)
        });
    }


    render(){
        const { products } = this.state;
        return(
            <div className="cart">
                { products.map((product) => {
                    return (
                        <CartItem 
                            product={product} 
                            key={product.id}
                            onIncreaseHandle={this.handleIncreaseQuantity}
                            onDecreaseHandle={this.handleDecreaseQuantity}
                            onDeleteHandle={this.handleDeleteProduct}
                        />
                    )
                })}
            </div>
        );
    }
}


export default Cart;