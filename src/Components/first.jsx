import React from "react";
import { NavLink } from 'react-router-dom';
import NavBar from './nav';

export const Name = document.getElementById("name_field");

class First extends React.Component{

    render(){
        return(

            <div>
                <NavBar />
                <br/><br/>
                <h1>OldEra</h1>

            <div className="nes-field name">

                <label for="name_field">Your name</label>
                <input type="text" id="name_field" class="nes-input" />
            </div>

            <NavLink exact to="/menu"><button type="button" class="nes-btn is-success">Get Started</button></NavLink>
            </div>
        )
    }
}

export default First;