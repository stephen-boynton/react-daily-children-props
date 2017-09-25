import React, { Component } from "react";
import "../styles/ChildComponent.css";

export default class ChildComponent extends Component {
	render() {
		return (
			<div>
				<div>
					<button className="magic" type="submit" onClick={this.props.onClick}>
						Magic Button
					</button>
				</div>
			</div>
		);
	}
}
