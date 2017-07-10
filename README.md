# React-Lifecycle Methods


## Initialization

According to the syntax of **React.createClass**, ***getDefaultProps()*** and ***getInitialState*** can be used but the syntax changes when we use **React.Component**.  

##### [The changes (between React.createClass and React.Component) are described here in full detail](https://toddmotto.com/react-create-class-versus-component/)

**prop-types** npm package is used for validating Prop types. You have to first install it using: 

	npm install --save prop-types

[Refer here in case of any issues related to prop-types](https://github.com/facebook/prop-types#installation)		


## Mounting

Mounting is the process that occurs when a component is being **inserted into the DOM**. This phase has two methods that we can hook up with: **componentWillMount()** and **componentDidMount()**.

All the AJAX requests should be put-up inside componentDidMount() hook.  
I am pretty much sure you would be thinking why? So **[here](https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/)** is the answer.  
You can also refer **[this](https://daveceddia.com/ajax-requests-in-react/)** for more info.