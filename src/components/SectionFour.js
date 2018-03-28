import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from './Article';

class SectionFour extends Component {
	render() {
		return (
			<div>
				<p>{this.props.dataText}</p>
				<section className="features">
					{this.props.dataCard.map((art, index) => {
						return (
							<Article
								key={index}
								image={art.image}
								name={art.name}
								alt={art.alt}
							/>
						);
					})}
				</section>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { dataText: state.dataTextFour, dataCard: state.dataCardFour };
}

export default connect(mapStateToProps)(SectionFour);
