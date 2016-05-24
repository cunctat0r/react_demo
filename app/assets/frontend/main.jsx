import TweetBox from "./components/TweetBox.jsx"
import TweetsList from "./components/TweetsList.jsx"

let mockTweets = [
	{id: 1, name: 'Slava Petrov', body: 'My #FirstTweet'},
	{id: 2, name: 'Slava Petrov', body: 'My #SecondTweet'},
	{id: 3, name: 'Slava Petrov', body: 'My #ThirdTweet'},
	{id: 4, name: 'Slava Petrov', body: 'My #FourthTweet'}
];

class Main extends React.Component {
	render() {
		return (
			<div className="container">
				<TweetBox />
				<TweetsList tweets={mockTweets} />
			</div>
		);
	}
}

let documentReady = () => {
	ReactDOM.render(
		<Main />,
		document.getElementById('react')
	);
};

$(documentReady);