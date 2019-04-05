import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavLink extends Component {
    
    render() {
        return (
            <Link to={this.props.url}>
                <div className="nav-link">{this.props.children}</div>
            </Link>
        );
    }
}

export default NavLink;
