import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Banner from './components/Banner';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<div id="page-wrapper">
				<Header />
				<Menu />
				<Banner />
				<Wrapper />
				<Footer />
			</div>
		);
	}
}

export default App;
