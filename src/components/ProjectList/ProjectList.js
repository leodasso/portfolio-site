import React, { Component } from 'react';
import Project from '../Project/Project';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import {allProjects} from '../../projects/projects.index';
import './ProjectList.css';


class ProjectList extends Component {

	render() {

		return (
			<div className="project-list">
				<Grid container spacing={32}>
				{
					allProjects.map((project, index) => (
						<Project key={index} projectData={project} />
					))
				}
				</Grid>
			</div>
		);
	}
}

const reduxMapper = reduxState => reduxState;

export default connect(reduxMapper)(ProjectList);
