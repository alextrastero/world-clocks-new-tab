export default ({ title, timezone }, timezones) => {
  var valid = true

  if (!title || !timezone) {
    valid = false
  }

  timezones.forEach((zone) => {
    if (zone.timezone === timezone) {
      valid = false
    }
  })

  try {
    new Date().toLocaleString('en-GB', { timeZone: timezone })
  } catch (err) {
    valid = false
  }

  return valid
}
