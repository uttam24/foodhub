import React from "react";

const Banner =()=>{
	return(
		<div className="bannerbg  pt-3 pb-3">
		<img src={`${process.env.PUBLIC_URL}/images/banner.jpg`} className="img-fluid"/>
			<div className="container bannertext">
				<div className="box">
					<h1>VEGGIE PIZZA</h1>
					<h5>COLLECTION NEW</h5>
				<button type="button" className="btn btn-warning">Shop Now</button>
				</div>
			</div>
		</div>
	)
}

export default Banner