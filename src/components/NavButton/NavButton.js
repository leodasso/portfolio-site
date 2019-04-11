import React, { Component } from "react";
import { connect } from 'react-redux';
import "./NavButton.css";

const cssClass = "nav-button";

class NavButton extends Component {

	state = {
		fullClassName: cssClass,
	}

	mouseHovered = isHovered => () => {
		
		const addClass = isHovered  ? "hover" : "";
		this.setState({
			fullClassName: cssClass + " " + addClass,
		})
	}

	render() {

		// If this page is active, it will always show the nav link as activd
		let className = this.state.fullClassName;
		if (this.props.reduxState.currentPage === this.props.page) {
			className = cssClass + " hover";
		}

		return (
			<div 
				className={className}
				onMouseEnter={this.mouseHovered(true)}
				onMouseLeave={this.mouseHovered(false)}
				onClick={this.props.onClick}
				>
				{this.props.children}
			</div>
		);
	}
}

const reduxMap = reduxState => {
	return {reduxState};
}

export default connect(reduxMap)(NavButton);