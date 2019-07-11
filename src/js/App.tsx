import React, {Component} from "react";

interface AppProps {

}

export default class App extends Component<AppProps>
{

	constructor(props: AppProps)
	{
		super(props);
	}

	render()
	{
		return (
			<div className="wrap">
        		<h1>Mail Crypter <small><small>Version 3.0</small></small></h1>
			</div>
		);
	}

}