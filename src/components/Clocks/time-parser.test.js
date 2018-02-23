import timeParser from './time-parser'

describe('time-parser', function () {
  let parsed;
  const madridTZ = "Europe/Madrid"; // 0
  const lisbonTZ = "Europe/Lisbon"; // +1
  const beirutTZ = "Asia/Beirut"; // -1
  const keralaTZ = "Asia/Calcutta"; // -5:30

  it('parses a time with no difference', () => {
    parsed = timeParser(madridTZ)
    expect(parsed).toBe('')
  })

  it('parses a time with plus one hour', () => {
    parsed = timeParser(lisbonTZ)
    expect(parsed).toBe('+1h.')
  })

  it('parses a time with minus one hour', () => {
    parsed = timeParser(beirutTZ)
    expect(parsed).toBe('-1h.')
  })

  it('parses a time with not full hour diff', () => {
    parsed = timeParser(keralaTZ)
    expect(parsed).toBe('-5:30h.')
  })
})
