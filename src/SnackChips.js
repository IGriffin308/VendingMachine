import React from 'react';
import { Link } from "react-router-dom"
import "./Snack.css"

function SnackChips() {
    return (
        <div>
            <div id="snack">
                Chips<br />
                They're a little crunchy<br />
                <Link exact to="/">Back</Link>
            </div>
            <img 
                src={require("./imgs/chip.png")}
                id="snackimg"
                style={{
                    animation: "App-logo-spin infinite 5s linear",
                    left: "25%", 
                    top: "25%",
                    transform: "translate(50%,50%)",
                    height: "20vh",
                    width: "20vw",
                    }}
            />
            <img 
                src={require("./imgs/chip.png")}
                id="snackimg"
                style={{
                    animation: "App-logo-spin infinite 5s linear",
                    left: "55%", 
                    top: "25%",
                    transform: "translate(50%,50%)",
                    height: "20vh",
                    width: "20vw",
                    }}
            />
        </div>
    )
}

export default SnackChips