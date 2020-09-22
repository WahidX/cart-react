import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products : [
            {
                price: 36999,
                title: 'ROG Phone II',
                qty: 1,
                img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.JSLCnWBhng54AMq_XDnNugHaE8%26pid%3DApi&f=1',
                id: 1
            },
            {
                price: 43000,
                title: 'Asus r558UQ',
                qty: 2,
                img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.digit.in%2Fproduct%2F5bb44a9255464fd224b4a9928858cd27ff6aa445.jpeg&f=1&nofb=1',
                id: 2
            },
            {
                price: 83000,
                title: 'ROG Zephyrus G14',
                qty: 1,
                img: 'https://cdn.mos.cms.futurecdn.net/HLtmgdP2k6ZY5PM4AdjKc9-1200-80.png',
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

  getCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  }

  getTotalPrice = () => {
    const { products } = this.state;
    let total = 0;
    products.forEach((product) => {
      total += product.qty * product.price;
    });
    return total;
  }
  
  render() {
    const { products } = this.state;

    return (
      <div className="App">
          
        <Navbar count={ this.getCount() } />
        <Cart
          products = { products }
          onIncreaseHandle={this.handleIncreaseQuantity}
          onDecreaseHandle={this.handleDecreaseQuantity}
          onDeleteHandle={this.handleDeleteProduct}
        />
        
        <div style={ {padding: 30, fontSize: 30 } }>TOTAL: { this.getTotalPrice() } </div>

      </div>
    );
  }
}

export default App;
