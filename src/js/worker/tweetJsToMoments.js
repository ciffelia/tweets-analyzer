import moment from 'moment'

const tweetsToMoments = tweets => {
  const timestamps = tweets.map(tweet => tweet.created_at)

  const moments = timestamps.map(timestamp =>
    moment(timestamp, 'ddd MMM DD HH:mm:ss ZZ YYYY')
  )
  for (const moment of moments) {
    moment.local()
  }

  moments.sort((a, b) => b - a)

  return moments
}

export default tweetsToMoments
