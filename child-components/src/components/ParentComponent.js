import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import DisplayComponent from "./DisplayComponent";
import "../styles/ParentComponent.css";

export default class ParentComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			whatToSay: "",
			whatWasSaid: ""
		};
	}
	_handleInput = e => {
		e.preventDefault();
		console.log(e);
		//set the state on input change
		this.setState({ whatToSay: e.target.value });
	};
	_handleSubmit = e => {
		const genie = document.querySelector(".genie");
		genie.classList.toggle("animate-genie");
		e.preventDefault();
		//check console to see if firing
		console.log("fired");
		//set the state for props and for value (prevents output from appearing when typing)
		this.setState({
			whatToSay: this.state.whatToSay,
			whatWasSaid: this.state.whatToSay
		});
		//clear our input by resetting state
		this.setState({ whatToSay: "" });
	};
	render() {
		return (
			<div>
				<div>
					<input
						className="sayThis"
						onChange={this._handleInput}
						type="text"
						placeholder="Speak"
					/>
				</div>
				<div>
					<DisplayComponent sayWhat={this.state.whatWasSaid} />
					<ChildComponent onClick={this._handleSubmit} />
				</div>
				<img className="genie" src="/genie.png" alt="genie" />
			</div>
		);
	}
}
