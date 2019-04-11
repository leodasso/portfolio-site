import React, { Component } from "react";
import './FadeIn.css';

class FadeIn extends Component {

    state = {
        classes: "fade begin",
        interval: 0,
    }

    getDelay = () => {
        return this.props.delay ? this.props.delay : 500;
    }

    transitionStyle = {
        transition: this.getDelay() + 'ms',
    }

    componentDidMount() {

        const interval = setInterval(this.update, 500);
        this.setState({interval});

        console.log(this.state.classes);
    }

    update = () => {
        clearInterval(this.state.interval);
        this.setState({classes: "fade end"});

        console.log('update', this.state.classes);
    }

	render() {

		return (
            <div 
                className={this.state.classes + " " + this.props.className}
                style={this.transitionStyle}>
                {this.props.children}
			</div>
		);
	}
}

export default FadeIn;