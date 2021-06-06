import React from 'react';



class ServiceName extends React.Component{
	render(){
		return(
			  <>
                <h4 className="title">{this.props.title}</h4>
                <p className="content">{this.props.content}</p>
              </>
		)
	}
}

export default ServiceName