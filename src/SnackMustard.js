import React from 'react';
import { Link } from "react-router-dom"
import "./Snack.css"

function SnackMustard() {
    return (
        <div>
            <div id="snack">
                Mustard<br />
                Delicious!<br />
                <Link exact to="/">Back</Link>
            </div>
            <img src={require("./imgs/mustard.png")} id="snackimg" />
        </div>
    )
}

export default SnackMustard