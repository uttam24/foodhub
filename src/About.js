import React from 'react';
import AllBanner from './components/AllBanner';
import AboutTemplate from './components/AboutTemplate';
import CarouselInsta from './components/CarouselInsta';

const About=()=> {
  return (
     <div className="w-auto">
     	<AllBanner/>
	    <div className="container">
	        <div className="content pt-5 pb-2">
	      	  <div className="row pb-5" >
		      	  <div className="col-md-6">
		      	  	  <div className="about-img">
		      	  	  <img src={`${process.env.PUBLIC_URL}/images/french-fries.jpg`} alt="" className="img-fluid"/>
		      	  	  </div>
	              </div>
	               <div className="col-md-6 d-flex justify-content-center flex-column">
		      	  	 <span>Photographer</span>
		      	  		 <h2>Justin Lisiakir</h2>
		      	  	 		<p>We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. To be brave and grab life as the extraordinary adventure it is. So we make sure everyone has an equal chance to discover all the amazing things they’re capable of – no matter who they are, where they’re from or what looks they like to boss. We exist to give you the confidence to be whoever you want to be.</p>
	              </div>
	      	  </div>

	      	  <div className="row pb-5" >
		      	  <div className="col-md-6 d-flex justify-content-center flex-column">
		      	  	<span>Web Designer</span>
		      	  	<h2>Angelika Hess</h2>
		      	  	<p>Our audience (AKA you) is wonderfully unique. And we do everything we can to help you find your fit, offering our Ciloe Brands in more than 30 sizes – and we're committed to providing all sizes at the same price – so you can be confident we’ve got the perfect thing for you. We’re also proud to partner with GLAAD, one of the biggest voices in LGBTQ activism, on a gender-neutral collection to unite in accelerating acceptance.</p>
	              </div>
	               <div className="col-md-6">
	                <div className="about-img">
	               		<img src={`${process.env.PUBLIC_URL}/images/pizza.jpg`} alt="" className="img-fluid"/>
	              </div>
	              </div>
	      	  </div>

	      	   <div className="row pb-5" >
		      	  <div className="col-md-6">
		      	   <div className="about-img">
		      	  	  <img src={`${process.env.PUBLIC_URL}/images/burger.jpeg`}  alt="" className="img-fluid"/>
	              </div>
	              </div>
	               <div className="col-md-6 d-flex justify-content-center flex-column">
		      	  	 <span>Sales agent</span>
		      	  		 <h2>Alex Barnder</h2>
						<p>We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. To be brave and grab life as the extraordinary adventure it is. So we make sure everyone has an equal chance to discover all the amazing things they’re capable of – no matter who they are, where they’re from or what looks they like to boss. We exist to give you the confidence to be whoever you want to be.</p>	
		              </div>
	      	  </div>

	      	  <div className="row pb-5" >
		      	  <div className="col-md-6 d-flex justify-content-center flex-column">
		      	  	<span>Web Designer</span>
		      	  	<h2>Angelika Hessas</h2>
		      	  	<p>We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. To be brave and grab life as the extraordinary adventure it is. So we make sure everyone has an equal chance to discover all the amazing things they’re capable of – no matter who they are, where they’re from or what looks they like to boss. We exist to give you the confidence to be whoever you want to be.</p>
	              </div>
	               <div className="col-md-6">
	                <div className="about-img">
	               		<img src={`${process.env.PUBLIC_URL}/images/burger-king.jpg`} alt="" className="img-fluid"/>
	              </div>
	              </div>
	      	  </div>
	        </div>
	    </div>
	     <AboutTemplate/>
	     <CarouselInsta/>
    </div>
  );
}

export default About;
