import React, { Component } from 'react';
import Project from '../Project/Project';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import projectList from '../../projects/projects.index';

const styles = {

	projectList: {
		margin: '120px 40px',
	}
}


class ProjectList extends Component {

	componentDidMount() {

		this.props.dispatch({type: 'FETCH_PROJECTS'});
	}

	render() {

		const classes = this.props.classes;

		return (
			<div className={classes.projectList}>
				<Grid container spacing={32}>
				{
					projectList.map((project, index) => (
						<Project key={index} projectData={project} />
					))
				}
				</Grid>
			</div>
		);
	}
}

const reduxMapper = reduxState => reduxState;

export default  withStyles(styles)(
				connect(reduxMapper)(
					ProjectList
));
