import React, { Component } from 'react';
import { connect } from 'react-redux';
import SectionThreeInternal from './SectionThreeInternal';

class SectionThree extends Component {
	render() {
		return (
			<ul style={{ listStyle: 'none', textAlign: 'left' }}>
				{this.props.data.map((dato, index) => {
					return (
						<SectionThreeInternal
							key={index}
							name={dato.name}
							text={dato.text}
						/>
					);
				})}
			</ul>
		);
	}
}
function mapStateToProps(state) {
	return { data: state.dataThree };
}
export default connect(mapStateToProps)(SectionThree);
