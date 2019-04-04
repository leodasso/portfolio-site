import React, { Component } from 'react';
import { connect } from 'react-redux';

// material UI
import {
	Table, TableBody, TableRow, TableCell,
	Button, TableHead, withStyles
} from '@material-ui/core';

// Custom style for the Material Table
const CustomTableCell = withStyles(theme => ({
	head: {
		backgroundColor: '#d6c95c',
		borderColor: 'rgba(0, 0, 0, .3)',
	},
	body: {
		borderColor: 'rgba(0, 0, 0, .3)',
	},
}))(TableCell);



class ProjectTable extends Component {

	componentDidMount() {
		// fetch the projects data when the component mounts
		this.props.dispatch({ type: 'FETCH_PROJECTS' });
	}

	// Deletes the project with the given id. Dispatches
	// an action to redux, where the saga DELETE_PROJECT takes care of the rest.
	deleteProject = projectId => event => {

		if (window.confirm('Are you sure you want to delete this project?')){
			this.props.dispatch({
				type:"DELETE_PROJECT",
				payload: projectId,
			});
		}
	}

	render() {

		const projects = this.props.projects;

		return (
			<div>
				<Table>
					<TableHead>
						<TableRow>
							<CustomTableCell>Name</CustomTableCell>
							<CustomTableCell>Description</CustomTableCell>
							<CustomTableCell>Delete</CustomTableCell>
						</TableRow>

					</TableHead>
					<TableBody>
						{
							projects.map((project) => (
								<TableRow key={project.id}>
									<CustomTableCell>{project.name}</CustomTableCell>
									<CustomTableCell>{project.description}</CustomTableCell>
									<CustomTableCell>
										<Button
											onClick={this.deleteProject(project.id)}>
											X</Button>
									</CustomTableCell>
								</TableRow>
							))
						}
					</TableBody>
				</Table>
			</div>
		);
	}
}

const reduxMapper = reduxState => reduxState;

export default connect(reduxMapper)(
	withStyles()(
		ProjectTable));