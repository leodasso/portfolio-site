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
		flexDirection: 'column',
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
		minWidth: 150,
		minHeight: '50vmin',
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
		if (project && project.thumbnail) {
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
						{project.date && this.renderDate(project.date)}
						<div className="project-header">
							<div className="title">{project.title}</div>
							
							{this.renderTag()}
						</div>
						<Divider />
						<div className="info-body">
							<Grid container spacing={8} className={classes.links}>
								{project.github && <ProjectButton name={'GitHub'} link={project.github} />}
								{project.deploy && <ProjectButton name={'Visit'} link={project.deploy} />}
							</Grid>
							<p className="description">{project.blurb}</p>
							
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
