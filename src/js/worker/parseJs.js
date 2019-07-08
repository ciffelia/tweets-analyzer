const parseJs = file => new Promise((resolve, reject) => {
  const fileReader = new FileReader()

  fileReader.onload = e => {
    const json = fileReader.result.slice(25)
    resolve(JSON.parse(json))
  }

  fileReader.onerror = e => {
    reject(e)
  }

  fileReader.readAsText(file)
})

export default parseJs
