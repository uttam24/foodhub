import React from 'react';
import ServiceName from './ServiceName';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShippingFast, faWallet, faUser} from '@fortawesome/free-solid-svg-icons'


class Services extends React.Component{
	render(){
		return(
		 <section className="pt-3 pb-3">
			<div className="row">
				<div className="col-md-4">
				<div className="service-content text-center">
				<div className="icon d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faShippingFast}/></div>
				<ServiceName title="SHIPPING &amp; RETURN" content="If your glasses aren't perfect, return them within 30 days for a full refund. We'll even pay shipping."/>
				</div>
			</div>
			<div className="col-md-4">
				<div className="service-content text-center">
				<div className="icon d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faWallet}/></div>
				<ServiceName title="SAFE PAYMENT" content="Pay with the world's most popular and secure payment methods"/>
				</div>
			</div>
			<div className="col-md-4">
				<div className="service-content text-center">
				<div className="icon d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faUser}/></div>
				<ServiceName title="SHOP WITH CONFIDENCE" content="Our Buyer Protection covers your purchase from click to delivery."/>
				</div>
			</div>
			</div>
			</section>
		)
	}
}


export default Services