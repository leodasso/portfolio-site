import React, { Component } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

class Profile extends Component {
    
    render() {
        return (
            <div className="Profile">
                <div className="profile-name">
                    {/* These are placed in sep elements because I want the wrapping effect */}
                    <h2 className="headline">LEO</h2>
                    <h2 className="headline">DASSO</h2>
                </div>
                <div className="profile-info">
                    <Link to="#">Projects</Link>
                    <Link to="#">About</Link>
                    <Link to="#">Contact</Link>
                </div>
            </div>
        );
    }
}

export default Profile;
