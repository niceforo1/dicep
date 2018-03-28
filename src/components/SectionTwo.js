import React, { Component } from 'react';
import { connect } from 'react-redux';
import SectionTwoText from './SectionTwoText';

class SectionTwo extends Component {
	render() {
		return (
			<div>
				{this.props.dataText.map((dato, index) => {
					return (
						<SectionTwoText
							key={index}
							name={dato.name}
							description={dato.description}
						/>
					);
				})}
				<ul style={{ listStyle: 'none', marginTop: '10px' }}>
					{this.props.dataIcon.map((dato, index) => {
						return (
							<li key={index}>
								<i
									className="fa fa-cube"
									style={{ marginRight: '10px' }}
									aria-hidden="true"
								/>
								{dato.name}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		dataText: state.dataTextTwo,
		dataIcon: state.dataIconTwo
	};
}
export default connect(mapStateToProps)(SectionTwo);
