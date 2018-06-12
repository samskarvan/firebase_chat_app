import React, { Fragment, Component } from 'react';
import {connect} from 'react-redux';
import {updateInput, sendMessageToDB, clearInput} from'../actions';


class MessageBox extends Component {
    sendMessage(e){
       e.preventDefault(); 
        
       const {message, roomId, clearInput} = this.props;
        console.log(this.props);
       sendMessageToDB(message, roomId);

       this.props.clearInput('message');

    }
    handleInpputChange(e){
        const {name, value} = e.target;

        this.props.updateInput(name, value);
    }
    render() {
        const {message}= this.props;

        return (
            <form onSubmit={this.sendMessage.bind(this)} className="col s12">
                <div className="row">
                    <div className="col s6 offset-s3">
                        <input onChange={this.handleInpputChange.bind(this)} value={message} name="message" type="text" placeholder="que dices?" />
                    </div>
                </div>
            </form>
        )
    }
}

function mstp(state){
    return{
        message: state.input.message
    }
}

export default connect(mstp, {clearInput, updateInput})(MessageBox);