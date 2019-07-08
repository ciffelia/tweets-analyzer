import moment from 'moment'

const tweetsCsvToMoments = tweets => {
  const timestamps = tweets.map(tweet => tweet.timestamp)

  const moments = timestamps.map(timestamp =>
    moment(timestamp, 'YYYY-MM-DD HH:mm:ss ZZ')
  )
  for (const moment of moments) {
    moment.local()
  }

  return moments
}

export default tweetsCsvToMoments
