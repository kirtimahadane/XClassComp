import "./styles.css";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState((previousValue) => ({
      count: previousValue.count + 1,
    }));
  }
  decrement() {
    this.setState((previousValue) => ({
      count: previousValue.count - 1,
    }));
  }
  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
