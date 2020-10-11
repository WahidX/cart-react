import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';
import 'firebase/firestore';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
				products : [],
				loading : true
			}
		this.db = firebase.firestore();
	}


	componentDidMount(){
		this.db
		.collection('products')
		// .where('price','<=',10000)
		// .where('title','in',
		// 	['title1','title2'])
		// .orderBy('price','desc')
		.onSnapshot((snapshots)=> {

			const products = snapshots.docs.map((doc)=>{
				const data = doc.data();
				data['id'] = doc.id;
				return data;
			});

			this.setState({
				loading : false,
				products
			});
		});
	}

	handleIncreaseQuantity = (product)=> {
			const {products} = this.state;
			const index = products.indexOf(product);
			
			const docRef = this.db.collection('products').doc(products[index].id);

			docRef.update({
				qty : products[index].qty + 1
			})
			.then(()=>{
				console.log("Updated successfully");
			})
			.catch((err)=>{
				console.log("Error: ",err);
			});

	}

	handleDecreaseQuantity = (product)=> {
			const {products} = this.state;
			const index = products.indexOf(product);

			const docRef = this.db.collection('products').doc(products[index].id);
			if (products[index].qty !== 0){
				docRef.update({
					qty : products[index].qty - 1
				})
				.then(()=>{
					console.log("Updated successfully");
				})
				.catch((err)=>{
					console.log("Error: ",err);
				});
			}

	}

	handleDeleteProduct = (product)=> {
			const { products } = this.state;
			const index = products.indexOf(product);

			const docRef = this.db.collection('products').doc(products[index].id);

			docRef
				.delete()
				.then(()=>{
					console.log("Deleted successfully");
				})
				.catch((err)=>{
					console.log("Error: ",err);
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

	addProduct = () => {
		this.db
		.collection('products')
		.add({
			img:'',
			title: 'machine',
			price: 1000,
			qty: 2
		})
		.then((docRef)=>{
			console.log('Added product: ', docRef);
		})
		.catch((err)=>{
			console.log("Error: ",err);
		});
	}
	
	render() {
		const { products, loading } = this.state;

		return (
			<div className="App">
					
				<Navbar count={ this.getCount() } />

				<button onClick={ this.addProduct }>Add Product</button>

				<Cart
					products = { products }
					onIncreaseHandle={this.handleIncreaseQuantity}
					onDecreaseHandle={this.handleDecreaseQuantity}
					onDeleteHandle={this.handleDeleteProduct}
				/>
				{loading && <h1> Loading the products...</h1>}
				<div style={ {padding: 30, fontSize: 30 } }>TOTAL: { this.getTotalPrice() } </div>

			</div>
		);
	}
}

export default App;
