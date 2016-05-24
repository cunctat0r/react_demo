import Tweet from "./Tweet.jsx"

export default class TweetsList extends React.Component {
	render() {
		return (
			<div>
				<ul className="collection">
					<Tweet />
					<Tweet />
					<Tweet />
				</ul>
			</div>
		)
	}
}