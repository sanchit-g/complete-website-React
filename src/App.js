import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Redirect, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/services" component={Service} />
				<Route exact path="/contact" component={Contact} />
				<Redirect to="/" />
			</Switch>
			<Footer />
		</div>
	);
};

export default App;
