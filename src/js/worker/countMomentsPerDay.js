const countMomentsPerDay = moments => {
  const counts = {}

  const firstDay = moments[moments.length - 1]
    .clone()
    .set({ h: 0, m: 0, s: 0, ms: 0 })
  const lastDay = moments[0]
    .clone()
    .set({ h: 0, m: 0, s: 0, ms: 0 })

  // https://github.com/eslint/eslint/issues/5738
  // eslint-disable-next-line no-unmodified-loop-condition
  for (let cur = firstDay; cur <= lastDay; cur.add(1, 'day')) {
    counts[cur.format('YYYY-MM-DD')] = 0
  }

  for (const moment of moments) {
    const date = moment.format('YYYY-MM-DD')
    counts[date]++
  }

  return counts
}

export default countMomentsPerDay
