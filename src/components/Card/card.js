import React from "react";
import "./card.css";
// import Counter from "./Counter.js";

const FriendCard = props => (
  <div className="card">
    <div onClick={() => {
      props.handleIncrement();
      console.log("working")
    }
    
      } className="img-container increment">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;