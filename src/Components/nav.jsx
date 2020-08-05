import React from "react";

class NavBar extends React.Component{

    render(){
        return(
            <div>
            <span className="nes-text is-primary">Welcome</span>
            <span className="nes-text is-success">To</span>
            <span className="nes-text is-warning">The</span>
            <span className="nes-text is-error">90's</span>
            <span className="nes-text is-disabled">World</span>
            </div>
        )
    }
}

export default NavBar;