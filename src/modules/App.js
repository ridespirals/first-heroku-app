import React from 'react'

export default React.createClass({
    componentDidMount() {
        console.log(`I'm a react component and I mounted!`);
    },
    render() {
        return <div>Hello from React!</div>
    }
})

