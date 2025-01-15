import React, { Component } from 'react';

class Counter extends Component {
  // Step 1: Initialize state in the constructor
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // Step 2: Lifecycle method - componentDidMount
  componentDidMount() {
    console.log('Component has mounted');
    // You can fetch data or set up subscriptions here
  }

  // Step 3: Lifecycle method - componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Count has changed:', this.state.count);
    }
  }

  // Step 4: Lifecycle method - componentWillUnmount
  componentWillUnmount() {
    console.log('Component will unmount');
    // Clean up subscriptions or timers here
  }

  // Step 5: Event handler to increment the count
  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Step 6: Event handler to decrement the count
  decrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  // Step 7: Render method to display the component
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}

export default Counter;