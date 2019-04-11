import React, { Component } from 'react';
import {connect} from 'react-redux';


class PageSetter extends Component {

	componentDidMount() {
		this.props.dispatch({type: 'SET_PAGE', payload: this.props.page})
	}

	render() {
		return (
			<></>
		);
	}
}

export default connect()(PageSetter);