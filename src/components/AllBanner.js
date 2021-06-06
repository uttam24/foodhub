import React from 'react';

const AllBanner=()=> {
  return (
    <div className="bannerImg">
    	<img src={`${process.env.PUBLIC_URL}/images/Pizza-Banner.jpg`}  alt="" className="img-fluid" />
    	<h1>About Us</h1>
    </div>
    );
}

export default AllBanner;
