import React, { Component } from 'react';
import logo from '../images/logoWhite.png';
class Banner extends Component {
	render() {
		return (
			<section id="banner">
				<div className="inner">
					<div className="logo">
						<div
							className=""
							style={{
								display: 'flex',
								flexDirection: 'row',
								flexWrap: 'nowrap',
								bordeBottom: 'solid 2px rgba(255, 255, 255, 0.125)'
							}}
						>
							<h2 style={{ fontFamily: 'Cubic', flex: '1 1 auto' }}>DICEP</h2>
							<img src={logo} alt="DICEP-LOGO" />
							<p style={{ alignSelf: 'flex-end' }}>Soluciones Informáticas</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Banner;
