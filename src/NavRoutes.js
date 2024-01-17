import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import SnackSoda from './SnackSoda'
import SnackChips from './SnackChips'
import SnackMustard from './SnackMustard'
import VendingMachine from './VendingMachine'
import "./NavRoutes.css"


function NavRoutes() {
  	return (
		<div>
			<VendingMachine />
			<div id="nav">
				<Route exact path="/">
					<Link to="/soda">Soda</Link><br />
      				<Link to="/chips">Chips</Link><br />
      				<Link to="/mustard">Mustard</Link><br />
				</Route>
			</div>
        	<Route exact path="/soda">
				<SnackSoda />
    		</Route>
        	<Route exact path="/chips">
				<SnackChips />
    		</Route>
    		<Route exact path="/mustard">
				<SnackMustard />
			</Route>
		</div>
  	);
}

export default NavRoutes;