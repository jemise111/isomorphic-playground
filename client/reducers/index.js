import {UPDATE_TWEET, ADD_TWEET} from '../actions/tweetActions';

export default function (initialState) {
  return (state=initialState, action) => {
    switch(action.type) {
      case ADD_TWEET:
        const tweet = action.tweet;

        if (tweet) {
          let tweets = state.tweets.map(tweet => Object.assign({}, tweet));
          tweets.push({id: tweets.length + 1, ...tweet});

          return {
            tweets,
          };
        }
      default:
        return state;
    }
  }
}