import React, { Component } from "react";
import './ParallaxContainer.css';

import { Parallax, Background} from 'react-parallax';

class ParallaxContainer extends Component {

	render() {

		return (
			<Parallax
				strength={400}
			>
				<div className="parallax-container">
					{this.props.children}
				</div>

				<Background>
					<div className="parallax-bg"></div>
				</Background>
			
			</Parallax>
		);
	}
}


export default ParallaxContainer;