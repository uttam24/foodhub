import React from 'react';

const Map=()=> {
  return (
    <section className="pt-3 pb-3">
     <div className="container">
     <h1 className="mb-4">Leave a Message</h1>
    	<form className="row">
		  <div className="col-md-4 mb-4">
		  <div className="form-group">
		    <input type="email" className="form-control form-control-lg" placeholder="your name"/>
		  </div>
		  </div>
		  <div className="col-md-4 mb-4">
		  <div className="form-group">
		    <input type="email" className="form-control form-control-lg" placeholder="your email"/>
		  </div>
		  </div>
		  <div className="col-md-4 mb-4">
		  <div className="form-group">
		    <input type="email" className="form-control form-control-lg" placeholder="What is this about?"/>
		  </div>
		  </div>
		  <div className="col-md-12 mb-4">
		  <div className="form-group">
		    <textarea className="form-control" placeholder="What is this about?" style={{height:'150px'}}></textarea>
		  </div>
		  </div>
		 
		 <div className="clearfix"></div>
		  <div className="col-md-4">
		  <button type="submit" className="btn btn-primary">Submit</button>
		  </div>
		</form>
   	 </div>
    </section>
    )
}

export default Map;
