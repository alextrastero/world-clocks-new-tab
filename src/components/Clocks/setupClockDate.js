const setupClockDate = (options, key) => {
  // the clock object
  var clock = {}
  Object.assign(clock, options)

  // hack
  clock.getClockElementById = function (id) {
    return document.getElementById(`${key}${id}`);
  }

  clock.init = window.setInterval(function () { clock.initialize() }, 50)

  // initialize clock
  clock.initialize = function () {
    if (clock.getClockElementById('background') &&
      clock.getClockElementById('dial') &&
      clock.getClockElementById('dial') &&
      clock.getClockElementById('hourHand') &&
      clock.getClockElementById('minuteHand') &&
      clock.getClockElementById('secondHand') &&
      clock.getClockElementById('axisCover')) {

      // set clock colors
      this.setColorForElement('background')
      this.setColorForElement('dial')
      this.setColorForElement('hourHand')
      this.setColorForElement('minuteHand')
      this.setColorForElement('secondHand')
      this.setColorForElement('axisCover')

      // set clock elements
      this.setClockDial(this.dial)
      this.setHourHand(this.hourHand)
      this.setMinuteHand(this.minuteHand)
      this.setSecondHand(this.secondHand)
      this.setAxisCover(this.axisCoverRadius)

      // draw clock
      this.draw()

      // show clock
      this.showElement('clock', true)

      // finish initialization and start animation loop
      window.clearInterval(this.init)
      var that = this
      window.setInterval(function () { that.draw() }, isNaN(this.updateInterval) ? 50 : this.updateInterval)
    }
  }

  clock.toTimezone = function (timezone) {
    var now = new Date()

    if (!timezone) {
      return now
    }

    var hourInTimezone = now.toLocaleString('en-GB', { timeZone: timezone, hour: 'numeric' })
    now.setHours(hourInTimezone)

    return now
  }

  // draw the clock
  clock.draw = function () {
    var now = clock.toTimezone(this.timezone)

    var hours = now.getHours()
    var minutes = now.getMinutes()
    var seconds = now.getSeconds()
    var millis = now.getMilliseconds()

    // rotate hour hands
    this.rotateElement('hourHand', 30 * hours + 0.5 * minutes)

    // rotate minute hand
    this.rotateElement('minuteHand', 6 * minutes + (this.minuteHandBehavior === 'sweeping' ? 0.1 * seconds : 0))

    // handle "stop to go" second hand
    if (this.secondHandStopToGo === 'yes' || this.secondHandStopToGo === 'true') {
      var wait = isNaN(this.secondHandStopTime) ? 1.5 : this.secondHandStopTime
      var fact = 60 / (60 - Math.min(30, Math.max(0, wait)))
      var time = Math.min(60000, fact * (1000 * seconds + millis))
      seconds = Math.floor(time / 1000)
      millis = time % 1000
    }

    // rotate second hand
    var secondAngle = 6 * seconds
    if (this.secondHandBehavior === 'sweeping') {
      secondAngle += 0.006 * millis
    } else if (this.secondHandBehavior === 'swinging') {
      secondAngle += 3 * (1 + Math.cos(Math.PI + Math.PI * (0.001 * millis)))
    }
    this.rotateElement('secondHand', secondAngle)
  }

  // set element fill and stroke color
  clock.setColorForElement = function (id) {
    var element = clock.getClockElementById(id)
    var color = this[id + 'Color']
    if (color && element) {
      element.setAttribute('style', 'fill:' + color + '; stroke:' + color)
    }
  }

  // set clock dial
  clock.setClockDial = function (value) {
    this.showElement('dialSwiss', value === 'swiss' || value === undefined)
    this.showElement('dialAustria', value === 'austria')
    this.showElement('dialPoints', value === 'points')
    this.showElement('dialDIN41091.1', value === 'din 41091.1')
    this.showElement('dialDIN41091.3', value === 'din 41091.3')
    this.showElement('dialDIN41091.4', value === 'din 41091.4')
  }

  // set hour hand
  clock.setHourHand = function (value) {
    this.showElement('hourHandSwiss', value === 'swiss' || value === undefined)
    this.showElement('hourHandGerman', value === 'german')
    this.showElement('hourHandSiemens', value === 'siemens')
    this.showElement('hourHandDIN41092.3', value === 'din 41092.3')
  }

  // set minute hand
  clock.setMinuteHand = function (value) {
    this.showElement('minuteHandSwiss', value === 'swiss' || value === undefined)
    this.showElement('minuteHandGerman', value === 'german')
    this.showElement('minuteHandSiemens', value === 'siemens')
    this.showElement('minuteHandDIN41092.3', value === 'din 41092.3')
  }

  // set second hand
  clock.setSecondHand = function (value) {
    this.showElement('secondHandSwiss', value === 'swiss' || value === undefined)
    this.showElement('secondHandGerman', value === 'german')
    this.showElement('secondHandDIN41071.1', value === 'din 41071.1')
    this.showElement('secondHandDIN41071.2', value === 'din 41071.2')
  }

  // set axis cover
  clock.setAxisCover = function (value) {
    clock.getClockElementById('axisCoverCircle').setAttribute('r', isNaN(value) ? 0 : value)
  }

  // show or hide clock element
  clock.showElement = function (id, visible) {
    clock.getClockElementById(id).setAttribute('visibility', visible ? 'visible' : 'hidden')
  }

  // rotate clock element
  clock.rotateElement = function (id, angle) {
    clock.getClockElementById(id).setAttribute('transform', 'rotate(' + angle + ', 100, 100)')
  }
}

export default setupClockDate
