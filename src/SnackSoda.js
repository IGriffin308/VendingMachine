import React from 'react';
import { Link } from "react-router-dom"
import "./Snack.css"

function SnackSoda() {
    return (
        <div>
            <div id="snack">
                Soda<br />
                Not what I wanted<br />
                <Link exact to="/">Back</Link>
            </div>
            <img 
                src={require("./imgs/soda.png")} 
                id="snackimg" 
                style={{left: "20vw", top: "30vw", width: "25vw"}}
            />
            <img 
                src={require("./imgs/soda.png")} 
                id="snackimg" 
                style={{left: "80vw", top: "30vw", width: "25vw"}}
            />
        </div>
    )
}

export default SnackSoda