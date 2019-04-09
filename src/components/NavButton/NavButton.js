import React, { Component } from "react";
import "./NavButton.css";

const cssClass = "nav-button";

class NavButton extends Component {

	state = {
		fullClassName: cssClass,
	}


	mouseHovered = isHovered => () => {
		// todo things
		const addClass = isHovered ? "hover" : "";
		this.setState({
			fullClassName: cssClass + " " + addClass,
		})
	}

	mouseDown = isDown => () => {

	}

	render() {

		return (
			<div 
				className={this.state.fullClassName}
				onMouseEnter={this.mouseHovered(true)}
				onMouseLeave={this.mouseHovered(false)}
				onMouseDown={this.mouseDown(true)}
				onMouseUp={this.mouseDown(false)}
				onClick={this.props.onClick}
				>
				{this.props.children}
			</div>
		);
	}
}

export default NavButton;