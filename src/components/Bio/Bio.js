import React, { Component } from "react";
import './Bio.css';

import { Parallax, Background} from 'react-parallax';


class Bio extends Component {

	render() {

		return (

			<Parallax
				strength={170}
			>
				<div className="bio">

					<p>
						Hi, I'm Leo! I'm an American developer with a special interest in bringing micro-joys
						to the experience of using software.
					</p>
				</div>

				<Background>
					<div className="bio-bg"></div>
				</Background>
			
			</Parallax>
		);
	}
}


export default Bio;