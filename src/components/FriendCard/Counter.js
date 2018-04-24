import React from "react";
import CardBody from "./FriendCard.js";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          <h3 className="card-title">Score</h3>
        </div>
        <CardBody
          count={this.state.count}
          handleIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}

export default Counter;