import React from "react";
import CardBody from "./card.js";

class Counter extends React.Component {

  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          <h3 className="card-title">Score</h3>
        </div>
        <FriendCard
          count={this.state.count}
          handleIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}

export default Counter;