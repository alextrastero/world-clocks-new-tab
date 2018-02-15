export default ({ title, timezone }, timezones = []) => {
  if (!title || !timezone) {
    return {
      valid: false,
      error: {
        message: 'Can\'t be empty',
        code: 1
      }
    }
  }

  let invalid
  timezones.forEach((zone) => {
    if (zone.timezone === timezone) {
      invalid = true
    }
  })

  if (invalid) {
    return {
      valid: false,
      error: {
        message: 'Timezone already exists',
        code: 2
      }
    }
  }

  try {
    new Date().toLocaleString('en-GB', { timeZone: timezone })
  } catch (err) {
    return {
      valid: false,
      error: {
        message: 'Can\'t convert timezone, please check this list https://en.wikipedia.org/wiki/List_of_tz_database_time_zones',
        code: 3
      }
    }
  }

  return { valid: true }
}
