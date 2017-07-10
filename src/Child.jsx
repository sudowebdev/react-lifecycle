import React from 'react';

export default class Child extends React.Component{

	componentWillReceiveProps(){

		console.log('componentWillReceiveProps() is called');
	}

	forceUpdate(){

		console.log('forceUpdate() is called');
	}

	shouldComponentUpdate(){

		console.log('shouldComponentUpdate() is called');
		this.forceUpdate();
		return true;
	}

	componentWillUpdate(){

		console.log('componentWillUpdate() is called');
	}



	render(){

		return(

				<div>The value is: {this.props.text}</div>
			);
	}

	componentDidUpdate(){

		console.log('componentDidUpdate() is called');
	}
}