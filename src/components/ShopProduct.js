import React from 'react';
 


class ShopProduct extends React.Component{
	 
	render(){
		return(
			<div className="box-info">
			<div className="overlay"></div>
				<div className="box-img">
					<img src={this.props.img} alt="" className="img-fluid"/>
				</div>
				<div className="content-banner">
             	 <h3 className="title_heading">{this.props.title}</h3>
             	 <button type="button"  className="btn btn-warning" type="button" onClick={(e) => 
		    {e.preventDefault(); window.location.href='./product';}}>Shop Now</button>
            	</div>
			</div>
		)
	}
}

export default ShopProduct