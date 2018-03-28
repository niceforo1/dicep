import React, { Component } from 'react';

class Article extends Component {
	render() {
		return (
			<article>
				<img src={this.props.image} alt={this.props.alt} className="image" />
				<h3 className="major">{this.props.name}</h3>
			</article>
		);
	}
}

export default Article;
