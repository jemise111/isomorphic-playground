import React, {Component} from 'react';
import './style.less';

export default class CreateTweet extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className='create-tweet'>
				<input
					ref='input'
					placeholder='Handle'
					type='text'
					onChange={this.handleNameChange.bind(this)}
				/>
				<textarea
					ref='textarea'
					placeholder="What's happening?"
					onChange={this.handleContentChange.bind(this)}
				/>
				<a onClick={this.handleClick.bind(this)}>Tweet</a>
			</div>
		);
	}
 
	handleContentChange(ev) {
		this.setState({content: ev.target.value})
	}

	handleNameChange(ev) {
		this.setState({handle: ev.target.value})
	}

	handleClick() {
		this.props.addTweet({
			...this.state,
			createdAt: new Date()
		});
		this.refs.input.value = '';
		this.refs.textarea.value = '';
	}

}