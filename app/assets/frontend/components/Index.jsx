import TweetBox from "./TweetBox.jsx"
import TweetsList from "./TweetsList.jsx"
import TweetStore from "../stores/TweetStore.jsx"

import TweetActions from "../actions/TweetActions.jsx"
TweetActions.getAllTweets();

let getAppState = () => {
	return { tweetsList: TweetStore.getAll() };
};

export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = getAppState();
		this._onChange = this._onChange.bind(this);
	}	
	componentDidMount() {
		TweetStore.addChangeListener(this._onChange);
	}
	componentWillUnmount() {
		TweetStore.removeChangeListener(this._onChange);
	}
	_onChange() {		
		this.setState(getAppState());
	}
	render() {
		return (
			<div className="container">
				<TweetBox />
				<TweetsList tweets={this.state.tweetsList} />
			</div>
		);
	}
}
