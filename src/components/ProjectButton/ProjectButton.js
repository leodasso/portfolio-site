import React, { Component } from 'react';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import { Button , Grid} from '@material-ui/core';

const styles = {
    links: {
        marginTop: 2,
        justifyContent: 'space-evenly',
    },
    buttonLink: {
        flexGrow: 2,
    },
    button: {
        color: 'rgba(0, 0, 0, .75)',
        width: '100%',
    },
}

class Project extends Component {

    handleClick = () => {

        window.open(this.props.link, '_blank');
    }

    render() {

        const classes = this.props.classes;

        return (
            <Grid item className={classes.buttonLink}>
                <Button 
                    onClick={this.handleClick}
                    color="inherit"
                    className={classes.button}
                    size="small"
                    variant="outlined">
                    {this.props.name}
                </Button>
            </Grid>
        );
    }
}

export default withStyles(styles)(Project);