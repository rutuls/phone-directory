import React, { Component } from 'react';
import Header from "./Header";
import './ShowSubscribers.css'
import {Link} from 'react-router-dom';
class ShowSubscribers extends Component {

  onDeleteClick = (subId) => {
    this.props.deleteSub(subId);
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
        <Link to="/add"><button className="custom-btn add-btn">Add</button></Link>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>

        {
          this.props.showsub.map(sub => <div key={sub.id} className="grid-container">
          <span className="grid-item">{sub.name}</span>
          <span className="grid-item">{sub.phone}</span>
          <span className="grid-item action-btn-container"><button className="custom-btn delete-btn" onClick={this.onDeleteClick.bind(this, sub.id)}>Delete</button></span>
        </div>)
        }
        
      </div>
    </div>
    );
  }
}

export default ShowSubscribers;
