const countsToChartData = counts => {
  let chartData = []

  for (const [date, value] of Object.entries(counts)) {
    chartData.push({ date, value })
  }

  return chartData
}

export default countsToChartData
