import React, { Component } from "react";
import "../styles/DisplayComponent.css";

export default class DisplayComponent extends Component {
	render() {
		return <div className="words">{this.props.sayWhat}</div>;
	}
}
