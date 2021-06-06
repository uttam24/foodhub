import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import InstaImage from './InstaImage';

const CarouselInsta=()=> {
  console.log(InstaImage)
  const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide:5 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
  return (
   <div className="container mb-5">
   <h2 className="text-center mb-5">Instagram</h2>
   <Carousel responsive={responsive}>
    {InstaImage.map((product)=>(
               <div className="hoverImg instaimage"><img src={product.image} className="img-fluid" alt=""/>
        <div className="card-body"><h5>Uttam Kumar</h5></div></div>
            ))}
    </Carousel>
    </div>
    );
}

export default CarouselInsta;
