import React from 'react';

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World from MyComponent</h1>
                <h2>{this.props.whatToSay}</h2>
                <button onClick={this.props.onPushMe}>Push Me</button>
            </div>
        )
    }
}

export default MyComponent;