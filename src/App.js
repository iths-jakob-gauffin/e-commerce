import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage.component';

import ShopPage from './pages/shop/shop.component';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
			</Switch>
		</div>

		// <div className="App">
		// 	<HomePage />
		// </div>
	);
}

export default App;
