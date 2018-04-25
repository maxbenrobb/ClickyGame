import React, { Component } from "react";
import Card from "./components/Card";
// import Counter from ".components/Card/Counter.js";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper> 
        <Title>Clicky Game</Title>          
        <div>Score: {this.state.count}</div>
        {this.state.friends.map(friend => (
          <Card
            id={friend.id}
            key={friend.id}
            image={friend.image}
            handleIncrement={this.handleIncrement}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
