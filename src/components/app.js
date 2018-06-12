import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './nav';
import {Route} from 'react-router-dom';
import Home from './home';
import Chat from './chat';
import CreateRoom from './create_room';

const App = () => (
    <div>
        <Nav/>
        <div className="container">
        <Route exact path ="/" component={Home}/>
        <Route path ="/chat/:id" component={Chat}/>
        <Route path ="/create-room" component={CreateRoom}/>
        </div>
    </div>
);

export default App;
