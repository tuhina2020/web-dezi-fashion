import React from 'react';
import styles from './Header.css';

class Header extends React.Component {
	constructor(props) {
		super(props)
	}

	menu(item) {
		return(
			<a className={styles.menu} href={item.link || '/'}>{item.name}</a>
		);
	}

	render() {
		return(
			<div className={styles.header}>
				<span className={styles.name}>{this.props.name}</span>
			</div>
		);
	}
}

export default Header;