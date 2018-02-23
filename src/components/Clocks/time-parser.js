const millisecondToHuman = (diff) => {
  var msec = diff
  var hh = Math.floor(msec / 1000 / 60 / 60)
  msec -= hh * 1000 * 60 * 60
  var mm = Math.floor(msec / 1000 / 60)
  msec -= mm * 1000 * 60

  return { hh, mm }
}

export default (tz) => {
  const now = new Date()
  const timeInZone = new Date(now.toLocaleString('en-US', { timeZone: tz }))
  const diff = now.getTime() - timeInZone.getTime()
  const { hh, mm } = millisecondToHuman(diff)

  const parsedHour = hh > 0 ? `+${hh}` : hh
  const parsedMins = mm === 0 ? '' : `:${mm}`

  return hh == 0 && mm == 0 ? '' : `${parsedHour}${parsedMins}h.`
}

