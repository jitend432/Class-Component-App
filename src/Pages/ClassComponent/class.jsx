import React, { Component } from "react";


class ven extends Component {

    constructor(props){
        super(props);
        this.state = {
            name : "Jitendra Pratap",
            Desigination : "Software Developer",
            count: 0
        };
    }

    handleClick = (e) => {
        this.setState({name:"Its a class component",
                     count : this.state.count + 1
        })
        console.log("Log : ", e)
    }

    componentDidMount() {
        console.log("Component Did Mount");
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Dabao mujhe</button>
                <button onClick={this.handleClick}>Click</button>
                <h2>{this.state.Desigination}</h2>
                <p>Hello india</p>
            </div>
        );
    }
}

export default ven;