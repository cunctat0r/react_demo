import React from "react";
import { Link } from "react-router";
import UserStore from "../stores/UserStore.jsx";
import UserActions from "../actions/UserActions.jsx";

let getAppState = () => {
	return { users: UserStore.getAll() };
}

export default class Follow extends React.Component {
	constructor(props) {
		super(props);
		this.state = getAppState();
		this._onChange = this._onChange.bind(this);
	}	
	componentDidMount() {
		UserActions.getAllUsers();
		UserStore.addChangeListener(this._onChange);
	}
	componentWillUnmount() {
		UserStore.removeChangeListener(this._onChange);
	}
	_onChange() {		
		this.setState(getAppState());
	}
	render() {
		let users = this.state.users.map( user => {
			return (
				<li key = {user.id} className ="collection-item avatar">
					<img src={user.gravatar} className="circle" />
					<span className="title">{user.name}</span>
				</li>
			);
		})
		return(
			<div>
				<h3>Who to follow</h3> 
				<ul className="collection">
					{users}
				</ul>
				<Link to="/">Back</Link>
			</div>
		);
	}
}