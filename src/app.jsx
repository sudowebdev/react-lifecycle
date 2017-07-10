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

    render(){ 
    	return(
           <div>The value is: {this.state.value}</div>
    	);
    }


}

App.defaultProps = { initialValue: 0 };
App.propTypes = { initialValue: PropTypes.number };

var app = <App/>;

var node = document.getElementById("app");

ReactDOM.render(app, node);