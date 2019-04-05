import React, { Component } from 'react';
import './Profile.css';
import Grid from '@material-ui/core/Grid';
import NavLink from '../NavLink/NavLink';

class Profile extends Component {
    
    render() {
        return (
            <div className="Profile">
                <Grid container spacing={32}>
                    <Grid item sm={12} md={6}>
                        <div className="profile-name">
                            {/* These are placed in sep elements because I want the wrapping effect */}
                            <h2 className="headline">LEO</h2>
                            <h2 className="headline">DASSO</h2>
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6}>

                        <div className="profile-info">
                            <NavLink url="#">Projects</NavLink>
                            <NavLink url="#">About</NavLink>
                            <NavLink url="#">Contact</NavLink>
                            <NavLink url="#">Resume</NavLink>
                            <NavLink url="#">LinkedIn</NavLink>
                            <NavLink url="#">GitHub</NavLink>

                        </div>
                    </Grid>

                </Grid>
            </div>
        );
    }
}

export default Profile;
