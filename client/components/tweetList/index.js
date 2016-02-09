import React, {Component} from 'react';
import './style.less';

export default class TweetList extends Component {
	getTweet(tweet, i) {
		return (
			<li key={i}>
				<p>{tweet.content}</p>
				<div>
					<span>{tweet.handle}</span>
					<span className="date">{tweet.createdAt.toLocaleString()}</span>
				</div>
			</li>
		);
	}

	render() {
		return (
			<ul className="tweet-list">
				{this.props.tweets.map((t, i) => this.getTweet(t, i))}
			</ul>
		);
	}
}