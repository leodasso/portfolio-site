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
							<NavButton onClick={this.sendTo("/projects")}>
								Projects
							</NavButton>

							<NavButton onClick={this.sendTo("/about")}>
								About
							</NavButton>

							<NavButton onClick={this.sendTo("/contact")}>
								Contact
							</NavButton>

							<NavButton onClick={this.sendTo("/resume")}>
								Resume
							</NavButton>

							<NavButton onClick={this.openLink("https://www.linkedin.com/in/leo-dasso/")}>
								LinkedIn
							</NavButton>

							<NavButton onClick={this.openLink("https://github.com/leodasso")}>
								GitHub
							</NavButton>
						</div>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withRouter(Profile);
