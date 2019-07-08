// https://github.com/parcel-bundler/parcel/issues/1762
import 'regenerator-runtime/runtime'

import parseCSV from './parseCSV'
import parseJs from './parseJs'
import tweetsCsvToMoments from './tweetsCsvToMoments'
import tweetJsToMoments from './tweetJsToMoments'
import countMomentsPerDay from './countMomentsPerDay'
import countsToChartData from './countsToChartData'

const onMessage = async ({ data: file }) => {
  let moments

  if (file.name.endsWith('.csv')) {
    const tweetsCsv = await parseCSV(file)
    moments = tweetsCsvToMoments(tweetsCsv)
  } else if (file.name.endsWith('.js')) {
    const tweetJs = await parseJs(file)
    moments = tweetJsToMoments(tweetJs)
  } else {
    throw new Error(`Unknown file name: ${file.name}`)
  }

  const counts = countMomentsPerDay(moments)
  const chartData = countsToChartData(counts)

  self.postMessage(chartData)
  self.close()
}

self.addEventListener('message', message => {
  onMessage(message).catch(err => { setTimeout(() => { throw err }) })
})
