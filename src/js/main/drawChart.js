import * as am4charts from '@amcharts/amcharts4/charts'
import * as am4core from '@amcharts/amcharts4/core'

const drawChart = chartData => {
  // Create chart
  const chart = am4core.create('result', am4charts.XYChart)
  chart.data = chartData
  chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd'

  // Create axes
  const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
  dateAxis.renderer.minGridDistance = 60

  chart.yAxes.push(new am4charts.ValueAxis())

  // Create series
  const series = chart.series.push(new am4charts.LineSeries())
  series.dataFields.valueY = 'value'
  series.dataFields.dateX = 'date'
  series.tooltipText = '{value}'

  series.tooltip.pointerOrientation = 'vertical'

  chart.cursor = new am4charts.XYCursor()
  chart.cursor.snapToSeries = series
  chart.cursor.xAxis = dateAxis

  chart.scrollbarX = new am4core.Scrollbar()
}

export default drawChart
