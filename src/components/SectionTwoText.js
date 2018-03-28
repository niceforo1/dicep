import React, { Component } from 'react';

class SectionTwoText extends Component {
	render() {
		return (
			<p>
				<strong>{this.props.name}</strong>
				{this.props.description}
			</p>
		);
	}
}

export default SectionTwoText;
