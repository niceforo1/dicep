import React, { Component } from 'react';

class Sections extends Component {
	render() {
		return (
			<section id={this.props.id} className={this.props.clase}>
				<div className="inner">
					{this.props.image && (
						<img
							src={this.props.image}
							className="image"
							alt={this.props.alt}
						/>
					)}
					<div className="content">
						{!this.props.image && <h2 className="major">Tecnologías</h2>}
						{this.props.content}
					</div>
				</div>
			</section>
		);
	}
}

export default Sections;
