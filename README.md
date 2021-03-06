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


For explaining the below line:  
> It’s very important to note that calling this.setState() within **componentWillMount** method will not trigger a re-render.

This is because, the **render()** method hasn't been **called yet**. Thus, its **re-render is actually the first-time rendering** of the render method. However, in case of **componentDidMount()** method, the **render** method has already been called and so **this.setState re-renders** it again.


## Updating

##### [Refer to this for a more clear understanding of this topic](https://medium.com/react-ecosystem/react-components-lifecycle-ce09239010df)


## Unmounting

It is called immediately before the component is unmounted from the DOM.


## Force Update

One last method that is worthy to note is forceUpdate(). As mentioned earlier, React will re-render components as props in use change (or componentWillReceiveProps is called). If there is a need to update the component while props are not changing, then forceUpdate can be called.  
**[Refer here](https://medium.com/mofed/reacts-component-lifecycles-adf0ebc89d23)**

forceUpdate should be avoided because it deviates from a React mindset. The React docs cite an example of when forceUpdate might be used:

>By default, when your component's state or props change, your component will re-render. However, if these change implicitly (eg: data deep within an object changes without changing the object itself) or if your render() method depends on some other data, you can tell React that it needs to re-run render() by calling forceUpdate().  

For more: Refer **[this](https://stackoverflow.com/a/35004739/5733330)** and **[this](https://www.tutorialspoint.com/reactjs/reactjs_component_api.htm)**