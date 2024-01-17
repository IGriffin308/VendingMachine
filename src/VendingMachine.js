import React from 'react';
import { NavLink } from 'react-router-dom'
import './VendingMachine.css'

function VendingMachine() {
    return (
        <div>
            <h1 id="vendingh1">Vending Machine</h1>
            <img src={require("./imgs/vendingmachine.webp")} id="vendingimg" />
        </div>
    )
}

export default VendingMachine