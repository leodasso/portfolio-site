import React, { Component } from "react";
import './Bio.css';

import { Parallax, Background} from 'react-parallax';
import profilePic from '../../images/leo_profile.jpg';

class Bio extends Component {

	render() {

		return (

			<>
				
			<Parallax
				strength={170}
			>
				<div className="bio">
					<img 
						src={profilePic} 
						className="profile-pic"/>
					<p>
						Hi, I'm Leo! I'm an American software developer with a background in design and games.
					</p>
				</div>

				<Background>
					<div className="bio-bg"></div>
				</Background>
			
			</Parallax>
			</>
		);
	}
}


export default Bio;