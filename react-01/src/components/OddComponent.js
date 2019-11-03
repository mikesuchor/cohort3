import React from 'react';

class OddComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World from OddComponent</h1>
                <h2>{this.props.whatToSay}</h2>
                <button onClick={this.props.onPushMe}>Push Me</button>
            </div>
        )
    }
}

export default OddComponent;