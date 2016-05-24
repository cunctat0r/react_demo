export default class TweetBox extends React.Component {
	render () {
		return (			
			<form>
				<div className="input-field">
					<textarea className="materialize-textarea" />
					<label>What`s happening?</label>
					<button className="btn">Tweet</button>
				</div>				
			</form>							
		)
	}
}