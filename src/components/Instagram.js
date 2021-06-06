import React from "react";
import InstProduct from './instProduct';
import InstaImage from './InstaImage';



const Instagram =()=>{
	return(
		<section className="pt-3 pb-3">
		 <div className="row">
		 	<h1 className="text-center mb-4">Coming Soon</h1>
		 	{InstaImage.map((listItem)=>(
			<div className="col-md-2 pt-2 pb-2" key={listItem.id}>
				<InstProduct 
				image={listItem.image}/>
			</div>
			))}
		 </div>
		</section>

	)
}

export default Instagram