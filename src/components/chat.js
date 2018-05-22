import React, {Component} from 'react';
import db from '../firebase';

class Chat extends Component{
    componentDidMount(){
        db.ref('/chat-log').on('value', (snapshot)=>{console.log('Chat Data:', snapshot.val())})
    }

    render() {
        return (
            <div className='center'>
                <h1>A chapt room</h1>
                <h4>You're now in a gross chatroom. Please be disrespectful</h4>
            </div>
        )
    }
}

export default Chat;