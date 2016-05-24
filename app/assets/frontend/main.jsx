import TweetBox from "./components/TweetBox.jsx"
import TweetsList from "./components/TweetsList.jsx"

class Main extends React.Component {
	render() {
		return (
			<div className="container">
				<TweetBox />
				<TweetsList />
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