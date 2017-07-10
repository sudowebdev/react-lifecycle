import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types'; 

class App extends React.Component{

	constructor(props){
		super(props);

		
		//getInitialState has moved to constructor
		console.log("constructor() is called");
		this.state = {value: props.initialValue};
	}

	/*				Mounting Starts 				*/
	
	componentWillMount(){
		console.log("componentWillMount() is called");

		
	}

    render(){ 
    	console.log("render() is called");
    	return(
           <div>The value is: {this.state.value}</div>
    	);
    }

    componentDidMount(){
    	console.log("componentDidMount() is called");

    	setInterval(function()
		{
			this.setState({value: this.state.value + 1})
		}.bind(this), 1000);
    }

    /* 				 Mounting Ends                */


}

App.defaultProps = { initialValue: 0 };
App.propTypes = { initialValue: PropTypes.number };

var app = <App/>;

var node = document.getElementById("app");

ReactDOM.render(app, node);
