import $ from 'jquery'

import drawChart from './drawChart'
import setupAm4Themes from './setupAm4Themes'

import '../../index.css'

const onDrag = e => {
  e.preventDefault()
  e.stopPropagation()

  e.originalEvent.dataTransfer.dropEffect = 'copy'
}

const onDrop = e => {
  e.preventDefault()
  e.stopPropagation()

  const $result = $('#result')
  $result.text('Calculating...')

  const file = e.originalEvent.dataTransfer.files[0]

  const worker = new Worker('../worker/worker.js')

  worker.addEventListener('message', message => {
    worker.terminate()
    $result.empty()
    drawChart(message.data)
  })

  worker.addEventListener('error', error => {
    worker.terminate()
    $result.empty()
    $('<pre>')
      .text(error.message)
      .appendTo($result)
  })

  worker.postMessage(file)
}

setupAm4Themes()

$('body').on({
  'dragenter dragover': onDrag,
  drop: onDrop
})
