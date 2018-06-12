import types from './types';
import db from '../firebase';

export function updateChat(roomData){
    console.log('data del rom:', roomData);
    return {
        type:types.UPDATE_CHAT_LOG,
        chatLog: roomData.chatLog,
        name: roomData.name
    }
}

export function updateInput(name, value){
    return{
        type: types.UPDATE_INPUT,
        payload: {name, value}
    }
}

export function sendMessageToDB(message,id){
    console.log('id:', id);
    db.ref(`/chat-rooms/${id}/chatLog`).push({
        name:'Sam', 
        message});

    return{
        type: types.SEND_MESSAGE
    }
}

export function clearInput(name){
    return{
        type: types.CLEAR_INPUT,
        payload: name
    }
}

export async function createRoom(name){
    const newRoom = {
        name,
        'chatLog':{
            0:{
                message: `bienvenido a este chat. que te disfrutas de la conversacion, y que no te pases demasiado tiempo en la red (no es beneficial para la salud mental).`,
                name: 'Admin'
            }
        }
    }
    const response = await db.ref('/chat-rooms').push(newRoom);
    return response.key;
}