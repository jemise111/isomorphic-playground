export const ADD_TWEET = 'add-tweet';
 
export function addTweet(tweet) {
  return { type: ADD_TWEET, tweet };
}