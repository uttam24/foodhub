import React from 'react';
import {useHistory} from "react-router-dom";

const Error=()=> {
	const history = useHistory();
  return (
    <div className="w-auto ">
    <section>
    <div className="container">
	    <div className="body">
	    <div className="errorImg pt-4">
	  	  <img src={`${process.env.PUBLIC_URL}/images/fries-pizza.png`}  alt="" className="img-fluid  pb-1"/>

	  	  <div className="mx-auto text-center">
			  <p className="h1 text-danger">404</p>
			  <h3 className="pb-2">Oops! page not found</h3>
			  <button type="button" className="btn btn-danger mb-4" onClick={()=>history.push('/')}>Back to Home</button>

			</div>
	  	  </div>
	  	  
	    </div>
	    </div>
	    </section>
    </div>
  );
}

export default Error;
