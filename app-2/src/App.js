import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (){
    super ();

    this.state = {
      friends: ["Colin", "Scott", "David"]
    };
  }

  render() {
    let friendsToDisplay = this.state.friends.map((element, index) => {
      return <p key={index}>{element}</p>;
    });

    return <div className="App">{friendsToDisplay}</div>;
  }
}

export default App;

