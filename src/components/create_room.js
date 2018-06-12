import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateInput, clearInput, createRoom} from '../actions';

class CreateRoom extends Component{

    async handleCreateRoom(e){
        e.preventDefault();

        console.log('el nombre del cuartoooooooooooooooooooooooooooooooooooooo;', this.props.roomName);
        const key = await createRoom(this.props.roomName);
        
        this.props.history.push(`/chat/${key}`);
    }

    componentWillUnmount(){
        this.props.clearInput('roomName');
    }
    render(){
        const {updateInput, roomName} = this.props;
        return(
        <div className="row">
        <h2 className="center">Fabrica un Espacio para Hablar</h2>
            <form onSubmit={this.handleCreateRoom.bind(this)} className="col s12">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <input onChange={e=> updateInput(e.target.name, e.target.value)}type="text" value={roomName} name="roomName" placeholder="Enter a name for your new chat room"/>
                    </div>    
                </div>
            </form>
        </div>
        )
    }
}

function mstp(state){
    return{
        roomName: state.input.roomName
    }
}

export default connect(mstp, {updateInput, clearInput})(CreateRoom);