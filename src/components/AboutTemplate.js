import React from 'react';

const AboutTemplate=()=> {
  return (
    <div className="abouttemplate mb-5"  style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/images/image-10.jpg`}}>
    <div className="container">
    <div className="align-items-center full-screen row text-center">
    <h2>Reasons to shop with us</h2>
	    <div className='col-md-4'>
	     <h4>24/7 FRIENDLY SUPPORT</h4>
   		 <p>Our support team always ready for you to 7 days a week</p>
	    </div>
	    <div className='col-md-4'>
	     <h4>7 DAYS EASY RETURN</h4>
   		 <p>Product any fault within 7 days for an immediately exchange.</p>
	    </div>
	    <div className='col-md-4'>
	     <h4>QUALITY GUARANTEED</h4>
   		 <p>If your product aren't perfect, return them for a full refund</p>
	    </div>
    </div>
    </div>
    </div>
    );
}

export default AboutTemplate;
