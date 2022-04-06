// Let's say you're working at Twitter and I hope everybody knows Twitter here. If you're working at Twitter. And your boss asked you to build a feature, perhaps a feature that allows anybody to click a button next to their name and retrieve their most recent tweet and their oldest tweet.
// Compare all tweets dates

// solution :
// Logically we need to
// Find 1st, find Nth

// initiate an array as tweet data
// assume that the first array is the older
// assume that the last array is the recent
const array = [
  {
    tweet: 'hello 2014',
    date: 2018,
  },
  {
    tweet: 'This year is a wrap',
    date: 2014,
  },
  {
    tweet: 'trying out twitter!',
    date: 2012,
  },
];

// O(n^2)
const compareTweets = (tweets) => {
  // outside function call
  // each language has a different way to count array length
  // for javascript this is already included in the properties of the array
  // so for .lenth it's O(1)
  tweets.length;

  // initialize oldest and newest tweets
  let tweetsData = {
    newest: tweets[0],
    oldest: tweets[0],
  };

  tweets.forEach((tweet) => {
    // O(n)
    if (tweet.date > tweetsData.newest?.date) {
      tweetsData.newest = tweet;
    }
    if (tweet.date < tweetsData.oldest?.date) {
      tweetsData.oldest = tweet;
    }
  });

  return tweetsData;
};

let tweetsData = compareTweets(array);
console.log(
  'Newest tweet:',
  tweetsData.newest.tweet,
  '| on:',
  tweetsData.newest.date
);
console.log(
  'Oldest tweet:',
  tweetsData.oldest.tweet,
  '| on:',
  tweetsData.oldest.date
);

// then the big O is O(n)
