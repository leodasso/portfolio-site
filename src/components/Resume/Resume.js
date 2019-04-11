import React, { Component } from "react";
import './Resume.css';

import ParallaxContainer from "../ParallaxContainer/ParallaxContainer";
import PageSetter from "../PageSetter";

class Resume extends Component {

	render() {

		console.log('inner width', window.innerWidth);

		return (
			<ParallaxContainer>
				<div className="resume">
					<PageSetter page="resume" />
					{window.innerWidth > 1000 && (
						<iframe 
							src="https://docs.google.com/document/d/e/2PACX-1vShky5MUR1odaudrBRPnHYVal72LrzqZUXRiKnXc09L2p8SKnRmcKdjSdtIttXX7ilCzyC6nDw0drt_/pub?embedded=true"
							width={window.innerWidth - 20}
							height="2000" 
							frameBorder="0" 
							marginHeight="0" 
							marginWidth="0">
						>
							loading...
						</iframe>)
					}
				</div>
			</ParallaxContainer>
		);
	}
}


export default Resume;