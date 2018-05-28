import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header.js';


export default class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<Header name='Dezi Fashion'/>
		);
	}
};