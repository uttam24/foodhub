import React, {useContext} from 'react';
import {ProductsContext} from '../Global/ProductsContext';
import {CartContext} from '../Global/CartContext';
const Products =()=>{
	const {ItemName} = useContext(ProductsContext);
	const {dispatch} = useContext(CartContext);

	return(
		<div className="row pt-3 pb-3">
		<h1 className="text-center mb-4">New Arrivals</h1>
		
		{ItemName.map((product)=>(
			<div className="col-md-3 pt-3 pb-3 producttext" key={product.id}>
				<div className="product-img">
					<img src={product.image} alt="image not found" className="img-fluid"/>
				</div>
				<div className="d-flex rate justify-content-left pt-3 pb-2">
					<span>{product.food}</span>
				</div>
				<div className="d-flex addtoCart">
					<span>${product.newprice}</span> <span><del>${product.oldprice}</del></span>
					<span className="add-to-cart" onClick={()=>dispatch({type:'ADD_TO_CART', id: product.id, product})}>Add to Cart</span>
				</div>
				{product.status === 'hot' ? <div className="popularitem">Hot</div> : ''}
				{product.status === 'new' ? <div className="newitem">New</div> : ''}
			</div>
		))}
		</div>
	)
}

export default Products