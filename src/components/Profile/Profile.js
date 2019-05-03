import React, { Component } from "react";
import "./Profile.css";
import Grid from "@material-ui/core/Grid";
import NavButton from "../NavButton/NavButton";
import { withRouter } from "react-router-dom";

class Profile extends Component {


	sendTo = newRoute => () => {
		this.props.history.push(newRoute);
	}

	openLink = url => () => {
		window.open(url, '_blank');
	}

	render() {
		return (
			<div className="Profile">
				<Grid container spacing={8}>
					<Grid item sm={12} md={6}>
						<div className="profile-name">
							{/* These are placed in sep elements because I want the wrapping effect */}
							<h2 className="headline">LEO</h2>
							<h2 className="headline">DASSO</h2>
						</div>
					</Grid>
					<Grid item sm={12} md={6}>
						<div className="profile-info">
							<NavButton onClick={this.sendTo("/projects")} page="projects">
								Projects
							</NavButton>

							<NavButton onClick={this.sendTo("/about")} page="about">
								About
							</NavButton>

							<NavButton onClick={this.openLink("/leo_resume.pdf")} page="resume">
								Resume
							</NavButton>

							<NavButton 
								onClick={this.openLink("https://www.linkedin.com/in/leo-dasso/")} 
								page="linkedin"
								size="large">
								<i className="fab fa-linkedin" title="LinkedIn"></i>
							</NavButton>

							<NavButton 
								onClick={this.openLink("https://github.com/leodasso")} 
								page="github"
								size="large">
								<i className="fab fa-github" title="GitHub"></i>
							</NavButton>

							<NavButton 
								onClick={this.openLink("https://www.hackerrank.com/leo_dasso")} 
								page="hackerrank"
								size="large">
								<i class="fab fa-hackerrank" title="HackerRank"></i>
							</NavButton>
						</div>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withRouter(Profile);
