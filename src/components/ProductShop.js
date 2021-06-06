import React,{useContext, useState} from 'react';
import {ProductShop} from '../Global/ProductsImageContext';
import ReactPaginate from 'react-paginate';

const ProductCart =()=>{
	const {ProductImg} = useContext(ProductShop);
	const [users, setUsers] = useState(ProductImg.slice(0,25));
	const [pageNumber, setPageNumber] = useState(0)

	const usersPerPage = 8;
	const pagesVisited = pageNumber * usersPerPage

	const displayUsers = users.slice(pagesVisited , pagesVisited + usersPerPage)
	.map((currentVal) =>{
		return(
			<div className="col-md-3 pt-3 pb-3 producttext" key={currentVal.id}>
			<div className="shopCart p-2">
			<div className="product-img">
					<img src={currentVal.image} alt="image not found" className="img-fluid"/>
				</div>
				<div className="product-name">
					<span className="productname">{currentVal.name}</span>
				</div>
				<div className="product-content">
					<span className="productcontent">{currentVal.content}</span>
				</div>
				<div className="product-price d-flex justify-content-between">
					<span className="productprice">${currentVal.price}</span>
					<span className="add-to-cart">Add to Cart</span>
				</div>
			</div>
			</div>)
	});
	const pageCount = Math.ceil(users.length / usersPerPage);
	const changePage = ({selected}) => {
		setPageNumber(selected);
	};

	return(
		<section>
		<div className="productBanner">
		    <img src="images/product-banner.jpg" alt="" className="img-fluid" />
		    <h1>Product</h1>
		</div>

		<div className="container">
		<div className="row pt-3 pb-3">

		{displayUsers}
		<ReactPaginate
		previousLabel = {"Previous"}
		nextLabel = {"Next"}
		pageCount = {pageCount}
		onPageChange={changePage}
		containerClassName={"paginationBttns"}
		previousLinkClassName={"previousBtnn"}
		nextLinkClassName={"nextBtn"}
		disabledClassName = {"paginationDisabled"}
		activeClassName={"paginationActive"}

		/>


		{/*{ProductImg.map((currentVal)=>(
			<div className="col-md-3 pt-3 pb-3 producttext" key={currentVal.id}>
			<div className="shopCart p-2">
			<div className="product-img">
					<img src={currentVal.image} alt="image not found" className="img-fluid"/>
				</div>
				<div className="product-name">
					<span className="productname">{currentVal.name}</span>
				</div>
				<div className="product-content">
					<span className="productcontent">{currentVal.content}</span>
				</div>
				<div className="product-price d-flex justify-content-between">
					<span className="productprice">${currentVal.price}</span>
					<span className="add-to-cart">Add to Cart</span>
				</div>
			</div>
			</div>
		))}*/}
		</div>
		</div>
		</section>
		
	)
}

export default ProductCart