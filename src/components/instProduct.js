import React from "react";

const InstProduct =(props)=>{
	return(
		<div className="card p-0 instaimage">
		  <img src={props.image} className="card-img-top" alt="..."/>
		  <div className="card-body">
		    <h5 className="card-title">Dummy Project</h5>
		  </div>
		</div>
	)
}

export default InstProduct