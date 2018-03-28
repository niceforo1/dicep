import React, { Component } from 'react';

class SectionThreeInternal extends Component {
	state = {
		hidden: true
	};
	handleClick = () => {
		this.setState({ hidden: !this.state.hidden });
	};
	hiddenTag = () => (
		<div id="grow">
			<div className="measuringWrapper">
				<div className="text">
					<p>{this.props.text}</p>
				</div>
			</div>
		</div>
	);
	render() {
		return (
			<div onClick={this.handleClick}>
				<li style={{ cursor: 'pointer' }}>
					<i
						className="fa fa-cube"
						style={{ marginRight: '10px' }}
						aria-hidden="true"
					/>
					{this.props.name}
					<i
						id="plus1"
						className="fa fa-plus-square"
						aria-hidden="true"
						style={{ marginLeft: '5px' }}
					/>
					{!this.state.hidden && this.hiddenTag()}
				</li>
			</div>
		);
	}
}

export default SectionThreeInternal;
