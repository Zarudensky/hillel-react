import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
	Link,
} from 'react-router-dom';
import './App.css';

function App() {
	return (
		<Router>
			<header className="header">
				<div className="header__container container">
					<div className="logo">Contact List 3</div>
					<nav className="header__menu">
						<div className="header__menu-link">
							<Link to="/">Home</Link>
						</div>
						<div className="header__menu-link">
							<Link to="/about">About</Link>
							</div>
						<div className="header__menu-link">
							<Link to="/contacts">Contacts</Link>
						</div>
					</nav>
				</div>
			</header>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
					<Route path="/contacts">
				<Contacts />
					</Route>
				<Route path="*">
					<Redirect to="/" />
				</Route>
			</Switch>
		</Router>
    );
}

export default App;