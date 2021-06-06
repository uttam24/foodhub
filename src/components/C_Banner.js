import React from 'react';

const C_Banner=()=> {
  return (
    <div className="bannerImg">
    	<img src={`${process.env.PUBLIC_URL}/images/contacts-page.jpg`}  alt="" className="img-fluid" />
    	<h1>Contact Us</h1>
    </div>
    );
}

export default C_Banner;
