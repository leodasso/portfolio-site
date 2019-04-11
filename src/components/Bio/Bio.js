import React, { Component } from "react";
import './Bio.css';

import profilePic from '../../images/leo_profile.jpg';
import ParallaxContainer from "../ParallaxContainer/ParallaxContainer";

class Bio extends Component {

	render() {

		return (

			<ParallaxContainer>
				<div className="bio">
					<img 
						src={profilePic} 
						className="profile-pic"/>
					<p className="bio-text">
						Hi, I'm Leo! 
						<br/><br/>
						I'm an American software developer with a background in design and games. I'm branching out into
						other software areas, specifically full stack development.
						<br/><br/>
						I've always been fascinated by computers. I got my first dive into programming in 
						2002 when my middle school friend showed me that <em>you can actually write code in these graphinc calculators!</em>
						<br/><br/>
						In my six years of professional experience in game development, I learned that creating
						a sustainable working habit is more important than squeezing every last drop of effort from myself
						or my team. I beleive that most devs started off because of a fascination with the things that could
						be accomplished with computers - it's important to treat this fascination with care.
					</p>
				</div>
			</ParallaxContainer>
		);
	}
}


export default Bio;