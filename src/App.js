import React, { Component } from 'react';
import Header from "./Header";
import './App.css'
class App extends Component {


  constructor() {
    super();
    this.state={
      subscribersListToShow: []
    };
  }

  render() {
    // let subscribers = [
    //   {
    //     id: '101',
    //     name: 'Rutul Shah',
    //     phone: '888111888'
    //   },
    //   {
    //     id: '102',
    //     name: 'Radhika Mandil',
    //     phone: '999111999'
    //   }
    // ];

    return (
      <div>
      <Header heading="Phone Directory"></Header>
      <div className="component-body-container">
        <button className="custom-btn add-btn">Add</button>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>

        {
          this.state.subscribersListToShow.map(sub => <div key={sub.id} className="grid-container">
          <span className="grid-item">{sub.name}</span>
          <span className="grid-item">{sub.phone}</span>
          <span className="grid-item action-btn-container"><button className="custom-btn delete-btn">Delete</button></span>
        </div>)
        }
        
      </div>
    </div>
    );
  }
}

export default App;
