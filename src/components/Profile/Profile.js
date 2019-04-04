import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    
    render() {
        return (
            <div className="Profile">
                <div>
                    {/* These are placed in sep elements because I want the wrapping effect */}
                    <h2 className="headline">LEO</h2>
                    <h2 className="headline">DASSO</h2>
                </div>
                <div className="info">
                    <p>Full-stack developer</p>
                    <p>Make it work</p>
                    <p>Make it purdy</p>
                </div>
            </div>
        );
    }
}

export default Profile;
