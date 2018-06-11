import types from './types';
import db from '../firebase';

export function updateChat(log){
    return {
        type:types.UPDATE_CHAT_LOG,
        payload: log
    }
}

export function updateInput(name, value){
    return{
        type: types.UPDATE_INPUT,
        payload: {name, value}
    }
}

export function sendMessageToDB(message){
    db.ref('/chat-log').push({
        name:'Sam', 
        message});

    return{
        type: types.SEND_MESSAGE
    }
}