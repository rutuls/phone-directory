import React, {Component} from 'react';
import AddSubscribers from './AddSubscribers';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router, Route} from 'react-router-dom';
class PhoneDirectory extends Component {
    
    constructor() {
        super();
        this.state = {
            subscribersList: [
                {
                    id: 1,
                    name: 'ABC',
                    phone: '1234'
                },
                {
                    id: 2,
                    name: 'DEF',
                    phone: '3456'
                }
            ]
            //subscribersList: [] //For Add subscriber
        };
    }

    deleteSubscriberHandler = (subscriberId) => {
        let subscribersListArr = this.state.subscribersList;
        let subIndex = 0;
        subscribersListArr.forEach(function (subscriber, index) {
            if(subscriber.id = subscriberId) {
                subIndex = index;
            }
        }, this);
        subscribersListArr.splice(subIndex,1);
        this.setState({subscribersList:subscribersListArr});
    }

    addSubScriberHandler = (newSubscriber) => {
        let subscribersListArr = this.state.subscribersList;
        if(subscribersListArr.length > 0) {
            newSubscriber.id = subscribersListArr[subscribersListArr.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscribersListArr.push(newSubscriber);
        this.setState({subscribersList: subscribersListArr});
        console.log("Phone Directory Add Subscribe Method");
        console.log(this.state.subscribersList);
    }

    render() {
        return (
            //<AddSubscribers addSubScriber={this.addSubScriberHandler}/>
            //<ShowSubscribers showsub={this.state.subscribersList}/>
            <Router>
            <div>
            <Route exact path="/" render={(props) => <ShowSubscribers {...props} showsub={this.state.subscribersList} deleteSub={this.deleteSubscriberHandler}/>}/>
            <Route exact path="/add" render={({history}, props) => <AddSubscribers history={history} {...props} addSubScriber={this.addSubScriberHandler} />} />
            </div>
            </Router>
        );
    }
}

export default PhoneDirectory;