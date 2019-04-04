import React, { Component } from 'react';
import './Admin.css';

// material UI
import { Button, Paper, withStyles } from '@material-ui/core';
import ProjectForm from '../ProjectForm/ProjectForm';
import ProjectTable from '../ProjectTable/ProjectTable';

// style for the material UI stuff.
const styles = {

	pageContainer: {
		margin: 34,
	},

	adminContainer: {
		margin: 'auto',
		maxWidth: 850,
	},

	mainPaper: {
		backgroundColor: '#edde5a',
		minHeight: '300px',
		padding: '24px',
		paddingBottom: '34px',
	}

}

class Admin extends Component {

	onClickBack = () => {
		this.props.history.push('/');
	}

	render() {

		const classes = this.props.classes;

		return (
			<div className={classes.pageContainer}>
				<div className={classes.adminContainer}>
					<div className="admin-title">
						<h1 className="headline">Admin</h1>
						<br/>
						<Button 
							onClick={this.onClickBack}
							color="inherit"
							variant="outlined">
							Back to Projects
						</Button>
					</div>
					<Paper className={classes.mainPaper}>

						<ProjectForm />
						<br/>
						<ProjectTable />
						<br/>
					</Paper>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Admin);