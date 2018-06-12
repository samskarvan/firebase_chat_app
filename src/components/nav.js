import React from 'react';
import {Link} from 'react-router-dom';


const Nav = props =>{
    const navStyle={
        padding: '0 2%'
    };
    return(
        <nav className="blue lighten-3" style={navStyle}>
            <div className="nav-wrapper">
            <Link className ="brand-logo" to='/'>Chatty APP</Link>
            <ul className="right">
                <li>
                <Link to='/'>Home</Link>    
                </li>
                <li>
                <Link to="/chat">Chat</Link>    
                </li>
                <li>
                <Link to="/create-room">Create a New Room</Link>    
                </li>
            </ul>
            </div>
        </nav>
    );
}

export default Nav