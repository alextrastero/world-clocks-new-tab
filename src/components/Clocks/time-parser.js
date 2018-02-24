const msToMins = (ms) => Math.floor(Math.abs(ms / 1000 / 60))

const minsToHours = (mins) => {
  return mins / 60
}

const millisecondToHuman = (diff) => {
  var symbol = diff > 0 ? '+' : '-'
  var minutes = msToMins(diff)
  var hours = minsToHours(minutes)
  if (hours === 0) return ''

  var remaining = (hours % 1).toFixed(1) * 60
  var ret = hours.toFixed(0)

  if (remaining > 0 && remaining < 60) {
    ret += `:${remaining}`
  }

  return `${symbol}${ret}h.`
}

export default (tz) => {
  const now = new Date()
  const timeInZone = new Date(now.toLocaleString('en-US', { timeZone: tz }))
  const diff = timeInZone.getTime() - now.getTime()

  return millisecondToHuman(diff)
}
