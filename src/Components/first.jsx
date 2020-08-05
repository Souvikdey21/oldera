import React from "react";

class First extends React.Component{

    render(){
        return(

            <div>
                <h1>OldEra</h1>

            <div className="nes-field name">


                <label for="name_field">Your name</label>
                <input type="text" id="name_field" class="nes-input" />
            </div>

            <button type="button" class="nes-btn is-success namesub">Submit</button>


            </div>
        )
    }
}

export default First;