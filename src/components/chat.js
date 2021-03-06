import React, {Component} from 'react';
import db from '../firebase';
import {connect} from 'react-redux';
import {updateChat} from '../actions';
import MessageBox from './message-box';

class Chat extends Component{
    componentDidMount(){
        const {id} = this.props.match.params;

        db.ref(`/chat-rooms/${id}`).on('value', (snapshot)=>{
            this.props.updateChat(snapshot.val());
        });
    }

    render() {
        const{chatLog, roomName, match:{params}} = this.props;
        const chatElements = Object.keys(chatLog).map((key,index)=>{
            const {name, message} = chatLog[key];
            return <li className="collection-item" key={key}><b>{name}</b>{message}</li>
        });

        console.log('chat log:', this.props.chatLog);
        return (
            <div className='center'>
                <h1>{roomName || 'Chat Room'}</h1>
                <h4>chat it up</h4>
                <ul className="collection"> {chatElements}</ul>
                <MessageBox roomId={params.id}/>
            </div>
        )
    }
}

function mstp(state){
    return{
        chatLog: state.chat.log,
        roomName: state.chat.name
    }
}

export default connect(mstp,{updateChat})(Chat);