import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sections from './Sections';
import SectionFour from './SectionFour';
import SectionThree from './SectionThree';
import SectionTwo from './SectionTwo';

class Wrapper extends Component {
	render() {
		return (
			<section id="wrapper">
				<Sections
					image={this.props.quienesSomos}
					content={this.props.dataOne()}
					clase={'wrapper spotlight style1'}
					id={'one'}
					alt={'quienes-somos'}
				/>
				<Sections
					image={this.props.mision}
					content={<SectionTwo />}
					clase={'wrapper spotlight style2'}
					id={'two'}
					alt={'mision'}
				/>
				<Sections
					image={this.props.servicios}
					content={<SectionThree />}
					clase={'wrapper spotlight style3'}
					id={'three'}
					alt={'servicios'}
				/>
				<Sections
					image=""
					content={<SectionFour />}
					clase={'wrapper alt style1'}
					id={'four'}
				/>
			</section>
		);
	}
}
function mapStateToProps(state) {
	return {
		dataOne: state.dataOne,
		mision: state.mision,
		servicios: state.servicios,
		quienesSomos: state.quienesSomos
	};
}
export default connect(mapStateToProps)(Wrapper);
