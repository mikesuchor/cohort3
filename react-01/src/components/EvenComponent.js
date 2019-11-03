import React from 'react';

class EvenComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World from EvenComponent</h1>
                <h2>{this.props.whatToSay}</h2>
                <button onClick={this.props.onPushMe}>Push Me</button>
            </div>
        )
    }
}

export default EvenComponent;