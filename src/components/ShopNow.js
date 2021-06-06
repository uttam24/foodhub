import React from 'react';
import ShopProduct from './ShopProduct';



class ShopNow extends React.Component{
	render(){
		return(
			 <section className="pt-3 pb-3 serviceList">
               <div className="row">
               	<div className="col-md-6">
               	 <ShopProduct img={`${process.env.PUBLIC_URL}/images/banner-v1-1.jpg`} title="Good price combos"/>
               	</div>
               	<div className="col-md-6">
               	 <ShopProduct img={`${process.env.PUBLIC_URL}/images/banner-v1-2.jpg`} title="Collection Pizza"/>
               	</div>
               </div>
              </section>
		)
	}
}

export default ShopNow