import React from 'react';
import './Page.css';
import { NavLink } from 'react-router-dom';

function Page() {
    return(
        <React.Fragment>
            <br/><br/><br/>
            <div className="container">
                <div className="card-wrapper">
                    <div class="card">
                        <div class="card-wrap">
                            <i class="nes-smartphone"></i><br/>
                            <NavLink exact to="/calculator"><h3><b>CALCULATOR</b></h3></NavLink>
                        </div>
                    </div> 
                    <div class="card">
                        <div class="card-wrap">
                            <i class="nes-smartphone"></i><br/>
                            <NavLink exact to="/notepad"><h3><b>NOTEPAD</b></h3></NavLink> 
                        </div>
                    </div> 
                    <div class="card">
                        <div class="card-wrap">
                            <i class="nes-smartphone"></i><br/>
                            <NavLink exact to="/todo"><h3><b>To-Do LIST</b></h3></NavLink>
                        </div>
                    </div> 
                </div>
            </div>
        </React.Fragment>
    );
}

export default Page;

