import React from 'react';

export default class Child extends React.Component{


	render(){

		return(

				<div>The value is: {this.props.text}</div>
			);
	}
}