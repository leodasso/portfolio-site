import React, { Component } from 'react';
import './ProjectForm.css';
import { connect } from 'react-redux';
import axios from 'axios';

// material UI
import { Button, TextField, Typography, withStyles, Divider,
         Select, MenuItem, InputLabel, FormControl, FilledInput} from '@material-ui/core';

// style for the material UI stuff.
const styles = theme => ({

    textField: {
        margin: theme.spacing.unit,
        flexGrow: 2,
    },
    submitButton: {
        width: '100%',
    }
});

const defaultState = {
    name: '',
    description: '',
    date: '1999-12-31',
    github: '',
    website: '',
    tags: 0,
}

/**ProjectForm handles the creation and submission of 
 * new projects. It dispatches a redux action with the data for
 * the new project.
 */
class ProjectForm extends Component {

    state = {
        ...defaultState,
    }

    updateState = propName => event => {
        this.setState({ [propName]: event.target.value });
    }

    handleTagSelected = event => {
        this.setState({ tags: event.target.value});
    }

    componentDidMount() {
        // get the list of tags from the server
        this.props.dispatch({ type: 'FETCH_TAGS' });
    }

    // Returns JSX for a styled Material UI input field.
    createInput = (label, inputType, stateName) => {
        return (
            <TextField
                variant="filled" type={inputType}
                className={this.props.classes.textField}
                label={label}
                onChange={this.updateState(stateName)}
                value={this.state[stateName]}
            />
        )
    }

    onSubmit = event => {
        event.preventDefault();

        // Check if the user has given all the required fields.
        // If they havent, give a specific alert of what fields they need.
        let required = [];
        if (this.state.name === '') {
            required.push('Name');
        }
        if (this.state.github === '') {
            required.push('GitHub');
        }
        if (this.state.date === '') {
            required.push('date');
        }
        if (this.state.tags === '') {
            required.push('tags');
        }
        if (required.length > 0) {
            alert('You need to fill in ' + required.join(', ') + ' to continue!');
            return;
        }

        // submit the project here
        axios.put('/portfolio', this.state)
        .then( () => {
            this.props.dispatch({type: 'FETCH_PROJECTS'});
            alert('Upload successful!');
        })
        .catch( error => {
            console.log('error with upload', error);
            alert('There was a problem uploading this project. Please try again in a few minutes.');
        });

        // clear out the input fields
        this.setState({
            ...defaultState,
        });
    }

    // This will make sure that the input value for the dropdown is never null.
    // When the input value is null, React gives an error. 
    getInputValue = () => {

        const tagIndex = this.state.tags;
        if (tagIndex === null || tagIndex === undefined || tagIndex === '') {
            return 0;
        }
        return tagIndex;
    }

    render() {

        const classes = this.props.classes;
        const tagList = this.props.tags;

        return (
            <div className="project-form">
                <Typography variant="h4">Add New Project</Typography>
                <Divider />

                {/* Not using the form 'onSubmit' here because it doesn't intercept MaterialUI Button clicks */}
                <form className="input-container">
                    {this.createInput('Name', 'text', 'name')}
                    {this.createInput('created', 'date', 'date')}
                    <FormControl 
                        variant="filled"
                        className={classes.textField}>
                        
                        <InputLabel >Tag</InputLabel>
                        <Select
                            input={<FilledInput/>}
                            variant="filled"
                            value={this.getInputValue()}
                            onChange={this.handleTagSelected}>

                            {/* Have all the tags from the database as tag options */}
                            {tagList.map( tagData => 
                                <MenuItem key={tagData.id} value={tagData.id}>{tagData.name}</MenuItem>)
                            }
                        </Select>
                    </FormControl>

                    {this.createInput('GitHub URL', 'url', 'github')}
                    {this.createInput('Website URL (optional)', 'url', 'website')}
                    <TextField variant="filled" className={classes.textField} multiline rows="4"
                        fullWidth placeholder="description (optional)" value={this.state.descriptionsd}
                        onChange={this.updateState('description')}
                    />
                    <Button onClick={this.onSubmit} className={classes.submitButton}>Submit</Button>
                </form>
            </div>
        );
    }
}

const reduxMap = reduxState => reduxState;

export default connect(reduxMap)(
    withStyles(styles)(
        ProjectForm)
);