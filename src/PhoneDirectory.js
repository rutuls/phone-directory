import React, {Component} from 'react';
import AddSubscribers from './AddSubscribers';
import ShowSubscribers from './ShowSubscribers';
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
            <ShowSubscribers showsub={this.state.subscribersList}/>
        )
    }
}

export default PhoneDirectory;