import React, { Component } from "react";
import ParentComponent from "./ParentComponent";
import BaseLayout from "./BaseLayout";

import "../styles/App.css";

class App extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="App">
				<BaseLayout>
					<ParentComponent />
				</BaseLayout>
			</div>
		);
	}
}

export default App;
