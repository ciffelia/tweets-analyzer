import Papa from 'papaparse'

const parseCSV = file => new Promise((resolve, reject) => {
  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: ({ errors, data }) => {
      if (errors.length !== 0) {
        const errorText = JSON.stringify(errors, null, 2)
        reject(new Error(errorText))
      } else {
        resolve(data)
      }
    },
    error: reject
  })
})

export default parseCSV
