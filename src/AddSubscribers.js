import React, {Component} from 'react';
import Header from './Header';
import './AddSubscribers.css';
import './common/common.css';
class AddSubscribers extends Component {

    constructor() {
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        };
    }

    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state);
    }

    onSubmittedHandler = (e) => {
        e.preventDefault(); // to stop form from reloading
        this.props.addSubScriber(this.state);
        this.setState({id:0,name:'',phone:''});
    }

    render() {
        const p = this.state.phone;
        return (
            <div>
                <Header heading="Add Subscribers"></Header>
                <div className="component-body-container">
                <button className="custom-btn">Back</button>
                <form className="subscriber-form" onSubmit={this.onSubmittedHandler.bind(this)}>
                    <label htmlFor="name" className="label-control">Name: </label><br/>
                    <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangedHandler}></input><br/><br/>

                    <label htmlFor="phone" className="label-control">Phone: </label><br/>
                    <input id="phone" type="text" className = "input-control" name="phone" onChange={this.inputChangedHandler}></input>

                    <div className="subscriber-info-container">
                        <span className="subscriber-to-add-heading"> Subscriber to be added: </span><br/>
                        <span className="subscriber-info">Name: {this.state.name}</span><br/>
                        <span className="subscriber-info">Phone: {p} </span><br/>
                        <span></span>
                    </div>
                    <button type="submit" className="custom-btn add-btn">Add</button>
                </form>
                </div>
            </div>
        );
    }
}

export default AddSubscribers;