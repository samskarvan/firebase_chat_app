import React, {Component} from 'react';
import db from '../firebase';
import {connect} from 'react-redux';
import {updateChat} from '../actions';

class Chat extends Component{
    componentDidMount(){
        db.ref('/chat-log').on('value', (snapshot)=>{
            this.props.updateChat(snapshot.val());
        });
    }

    render() {
        const{chatLog} = this.props;
        const chatElements = Object.keys(chatLog).map((key,index)=>{
            const {name, message} = chatLog[key];
            return <li className="collection-item" key={key}><b>{name}</b>{message}</li>
        });

        console.log('chat log:', this.props.chatLog);
        return (
            <div className='center'>
                <h1>A chapt room</h1>
                <h4>You're now in a gross chatroom. Please be disrespectful</h4>
                <ul className="collection"> {chatElements}</ul>
            </div>
        )
    }
}

function mstp(state){
    return{
        chatLog: state.chat.log
    }
}

export default connect(mstp,{updateChat})(Chat);