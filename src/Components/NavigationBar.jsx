import React from 'react';
import {NavLink} from 'react-router-dom';

const NavigationBar = () => {
    return(
        <div class="nes-container is-rounded">
            <NavLink activeClassName="active-class" className="mr" exact to="/calculator">CALCULATOR</NavLink>
            <NavLink activeClassName="active-class" className="mr" exact to="/notepad" >NOTEPAD</NavLink>
            <NavLink activeClassName="active-class" className="mr" exact to="/todo">TODO-LIST</NavLink>
        </div>
    );
}

export default NavigationBar;