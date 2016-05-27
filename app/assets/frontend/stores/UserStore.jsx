import AppDispatcher from "../dispatcher.jsx";
import ActionTypes from "../constants.jsx";
import AppEventEmitter from "./AppEventEmitter.jsx"


let _users = [];
const CHANGE_EVENT = "CHANGE";

class UserEventEmitter extends AppEventEmitter {
	getAll() {
		return _users;
	}	
}

let UserStore = new UserEventEmitter();

AppDispatcher.register( action => {
	switch(action.actionType) {
		
		default:
	}
});

export default UserStore;