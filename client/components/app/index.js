import React, {Component} from 'react';
import TweetList from '../tweetList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CreateTweet from '../createTweet';
import * as messageActionCreators from '../../actions/tweetActions';
import './style.less';


class App extends Component {
  render() {
    return (
    	<div>
    		<CreateTweet addTweet={this.props.addTweet} />
    		<TweetList tweets={this.props.tweets} />
    	</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(messageActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);