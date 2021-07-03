import React, { Component } from 'react';

class RajuClass extends Component {
    constructor() {
        super()
        this.state = {
            name: "allowed..."
        }
    }


    subp(){
        this.setState({
            name:"gone......"
        })
    }

    render() {
        return (
            <div>
                <h1>State Management .... {this.state.name}</h1>
                <button onClick={() => this.subp()}>Click</button>
            </div>
        )
    }
}

export default RajuClass