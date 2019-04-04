import React, { Component } from 'react';
import ProjectButton from '../ProjectButton/ProjectButton';
import { connect } from 'react-redux';
import './Project.css';

// Material UI
import { Card, CardMedia, CardContent, Divider} from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

// These styles are used for Material UI specific components.
// I try to keep all the other styling in CSS, but for MUI sometimes
// this is the only way to override props.
const styles = {
	projectCard: {
		backgroundColor: '#edde5a',
		display: 'flex',
		minHeight: 300,
	},
	info: {
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'left',
		flexGrow: 1.5,
		margin: '2px 16px',
	},
	thumbnail: {
		width: 150,
		minWidth: 150,
	},
	links: {
		marginTop: 2,
		justifyContent: 'space-evenly',

	},
}

class Project extends Component {


	componentWillMount() {
		this.props.dispatch({type:'FETCH_TAGS'});
	}

	/** Display a button. Checks if the link is empty or null, and if it is,
	 * will not display anything. If there is a link to display, it will use
	 * the display name as the 'visible to the user' text
	 */
	conditionalRenderButton(displayName, link) {
		if (link === '' || link === null ) {
			return '';
		}
		return <ProjectButton name={displayName} link={link} />;
	}

	// Conditionally renders the date. Uses a nice date formatter for if the 
	// input date isnt null.
	renderDate(dateString) {
		if (dateString === null || dateString === '') {
			return '';
		}
		let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
		let newDate  = new Date(dateString);
		let finalString = newDate.toLocaleDateString('en-US', options);

		return <p className="date">{finalString}</p>
	}

	// Renders the 'html', 'css', etc tag that tells what the
	// project is associated with. If there's no tag selected,
	// just returns an empty div.
	renderTag = () => {
		const project = this.props.projectData;
		const tag = this.props.tags[project.tag_id];
		if (tag === null || tag === undefined) {
			return <div></div>;
		}
		return <div className="tag">{tag.name}</div>;
	}

	render() {

		const classes = this.props.classes;
		const project = this.props.projectData;
		let thumbnailPath = "images/default_thumbnail.png";
		if (project.thumbnail != null) {
			thumbnailPath = "images/" + project.thumbnail;
		}

		return (
			<Grid item sm={12} lg={6}>
				<Card className={classes.projectCard}>
					<CardMedia
						className={classes.thumbnail}
						image={thumbnailPath}
						title="my happy project"
					/>
					<CardContent className={classes.info}>
						{this.renderDate(project.date_completed)}
						<div className="project-header">
							<div className="title">{project.name}</div>
							
							{this.renderTag()}
						</div>
						<Divider />
						<div className="info-body">
							<Grid container spacing={8} className={classes.links}>
								{this.conditionalRenderButton('GitHub', project.github)}
								{this.conditionalRenderButton('Website', project.website)}
							</Grid>
							<p className="description">{project.description}</p>
							
						</div>
					</CardContent>
				</Card>
			</Grid>
		);
	}
}

const reduxMap = reduxState => reduxState;

export default  withStyles(styles)(
				connect(reduxMap)(
					Project));
