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
		case ActionTypes.RECEIVED_USERS:
			_users = action.rawUsers;
			UserStore.emitChange();
			break;
		default:
	}
});

export default UserStore;