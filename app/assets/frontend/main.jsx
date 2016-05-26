import TweetBox from "./components/TweetBox.jsx"
import TweetsList from "./components/TweetsList.jsx"
import TweetStore from "./stores/TweetStore.jsx"

import TweetActions from "./actions/TweetActions.jsx"
TweetActions.getAllTweets();

let getAppState = () => {
	return { tweetsList: TweetStore.getAll() };
}

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = getAppState();
		this._onChange = this._onChange.bind(this);
	}
	formattedTweets(tweetsList) {
		// let formattedList = tweetsList.map( tweet => {
		// 	tweet.formattedDate = moment(tweet.created_at).fromNow();
		// 	return tweet;
		// });
		// return {
		// 	tweetsList: formattedList
		// };
	}
	addTweet(tweetToAdd) {
		// $.post("/tweets", { body: tweetToAdd})
		// .success( savedTweet => {
		// 	let newTweetsList = this.state.tweetsList;
		// 	newTweetsList.unshift(savedTweet);
		// 	this.setState(this.formattedTweets(newTweetsList));
		// })
		// .error( error => console.log(error));
	}
	componentDidMount() {
		TweetStore.addChangeListener(this._onChange);
	}
	componentWillUnmount() {
		TweetStore.removeChangeListener(this._onChange);
	}
	_onChange() {
		console.log(5, "Main._onChange");
		this.setState(getAppState());
	}
	render() {
		return (
			<div className="container">
				<TweetBox sendTweet={this.addTweet.bind(this)}/>
				<TweetsList tweets={this.state.tweetsList} />
			</div>
		);
	}
}

let documentReady = () => {
	let reactNode = document.getElementById('react')
	if (reactNode) {
		ReactDOM.render(<Main />, reactNode);
	}	
};

$(documentReady);