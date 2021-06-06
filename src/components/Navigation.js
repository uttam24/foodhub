import React,{useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import {CartContext} from '../Global/CartContext';

const Navigation = ()=>{
	const {qty} = useContext(CartContext);
	return(
		<div className="w-100 bg-dark fixed-top">
		<div className="container">
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
		  <a className=" text-white display-6 text-decoration-none " href="/">Foodry</a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto">
		      <li><Link to='/'>Home</Link></li>
						<li><Link to='/product'>Product</Link></li>
						<li><Link to='/about'>About</Link></li>
						<li><Link to='/food-recipe'>Food Recipes</Link></li>
						<li><Link to="/contact">Contact Us</Link></li>
		     
		    </ul>
		    
		  </div>
		  <form className="form-inline my-2 my-lg-0">
    	 	<li className="position-relative"><Link to='/cart'><FontAwesomeIcon icon={faShoppingBag} color="#fff"></FontAwesomeIcon>
						<span className="cartspan d-flex justify-content-center align-items-center">{qty}</span></Link></li>
   		  </form>
		</nav>
		</div>
			{/*<div className="container">
			<div className="row align-items-center">
				<div className="col-md-2">
					<a href="/" className="text-white text-decoration-none display-6">Foodry</a>
				</div>
				<div className="col-md-6">
				<nav>
					<ul>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/product'>Product</Link></li>
						<li><Link to='/about'>About</Link></li>
						<li><Link to='/food-recipe'>Food Recipes</Link></li>
						<li><Link to="/contact">Contact Us</Link></li>
					</ul>
				</nav>
				</div>
				<div className="col-md-4">
					<ul className="searchRight">
						<li><FontAwesomeIcon icon={faSearch} color="#fff"></FontAwesomeIcon></li>
						<li className="position-relative"><Link to='/cart'><FontAwesomeIcon icon={faShoppingBag} color="#fff"></FontAwesomeIcon>
						<span className="cartspan d-flex justify-content-center align-items-center">{qty}</span></Link></li>
					</ul>
				</div>
				</div>
			</div>*/}
		</div>
	)
}



export default Navigation