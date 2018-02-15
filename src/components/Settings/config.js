export const config = {
  body: [
    { value: 'NoBody', text: 'Transparent Background' },
    { value: 'SmallWhiteBody', text: 'Round white background' },
    { value: 'RoundBody', text: 'Round black casing' },
    { value: 'RoundGreenBody', text: 'Round green casing (Austria)' },
    { value: 'SquareBody', text: 'Square blue casing (German Rail)' }
  ],
  dial: [
    { value: 'NoDial', text: 'Without dial' },
    { value: 'GermanHourStrokeDial', text: 'Dial with hour indicators (DIN 41091, Sect. 3)' },
    { value: 'GermanStrokeDial', text: 'Dial with minute and hour indicators (DIN 41091, Sect. 1)' },
    { value: 'AustriaStrokeDial', text: 'Dial with minute and hour indicators (Austria)' },
    { value: 'SwissStrokeDial', text: 'Dial with minute and hour indicators (Bauhaus)' }
  ],
  hourHand: [
    { value: 'PointedHourHand', text: 'Pointed, bar-shaped hand (DIN 41092, Sect. 3)' },
    { value: 'BarHourHand', text: 'Blunt, bar-shaped hand (German Rail)' },
    { value: 'SwissHourHand', text: 'Blunt, javelin-shaped hand (Austria) ' }
  ],
  minuteHand: [
    { value: 'PointedMinuteHand', text: 'Pointed, bar-shaped hand (DIN 41092, Sect. 3)' },
    { value: 'BarMinuteHand', text: 'Blunt, bar-shaped hand (German Rail) ' },
    { value: 'SwissMinuteHand', text: 'Blunt, javelin-shaped hand (Austria)' }
  ],
  secondHand: [
    { value: 'NoSecondHand', text: 'Without second hand' },
    { value: 'BarSecondHand', text: 'Javelin-shaped hand (DIN 41071, Sect. 1)' },
    { value: 'HoleShapedSecondHand', text: 'Perforated pointer hand (DIN 41071, Sect. 2)' },
    { value: 'NewHoleShapedSecondHand', text: 'Perforated pointer hand (German Rail)' },
    { value: 'SwissSecondHand', text: 'disabled="disabled">Disc-end hand (Switzerland)' }
  ],
  boss: [
    { value: 'NoBoss', text: 'Without axis cover' },
    { value: 'RedBoss', text: 'Red axis cover' },
    { value: 'BlackBoss', text: 'Black axis cover' }
  ],
  minuteHandBehavoir: [
    { value: 'CreepingMinuteHand', text: 'Sweeping minute hand' },
    { value: 'BouncingMinuteHand', text: 'Stepping minute hand' },
    { value: 'ElasticBouncingMinuteHand', text: 'Stepping and bouncing minute hand' }
  ],
  secondHandBehavoir: [
    { value: 'OverhastySecondHand', text: 'Stop to go second hand' },
    { value: 'CreepingSecondHand', text: 'Sweeping second hand' },
    { value: 'BouncingSecondHand', text: 'Stepping second hand' },
    { value: 'ElasticBouncingSecondHand', text: 'Stepping and bouncing second hand' }
  ]
}
