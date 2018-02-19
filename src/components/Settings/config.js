export const config = {
  body: [
    { value: 0, text: 'Transparent Background' },
    { value: 1, text: 'Round white background' },
    { value: 2, text: 'Round black casing' },
    { value: 3, text: 'Round green casing (Austria)' },
    { value: 4, text: 'Square blue casing (German Rail)' },
    { value: 5, text: 'Vienna casing' }
  ],
  dial: [
    { value: 0, text: 'Without dial' },
    { value: 1, text: 'Dial with hour indicators (DIN 41091, Sect. 3)' },
    { value: 2, text: 'Dial with minute and hour indicators (DIN 41091, Sect. 1)' },
    { value: 3, text: 'Dial with minute and hour indicators (Austria)' },
    { value: 4, text: 'Dial with minute and hour indicators (Bauhaus)' },
    { value: 5, text: 'Dial (Vienna)' }
  ],
  hourHand: [
    { value: 1, text: 'Pointed, bar-shaped hand (DIN 41092, Sect. 3)' },
    { value: 2, text: 'Blunt, bar-shaped hand (German Rail)' },
    { value: 3, text: 'Blunt, javelin-shaped hand (Austria) ' },
    { value: 4, text: 'Blunt (Vienna)' }
  ],
  minuteHand: [
    { value: 1, text: 'Pointed, bar-shaped hand (DIN 41092, Sect. 3)' },
    { value: 2, text: 'Blunt, bar-shaped hand (German Rail) ' },
    { value: 3, text: 'Blunt, javelin-shaped hand (Austria)' },
    { value: 4, text: 'Blunt (Vienna)' }
  ],
  secondHand: [
    { value: 0, text: 'Without second hand' },
    { value: 1, text: 'Javelin-shaped hand (DIN 41071, Sect. 1)' },
    { value: 2, text: 'Perforated pointer hand (DIN 41071, Sect. 2)' },
    { value: 3, text: 'Perforated pointer hand (German Rail)' },
    { value: 4, text: 'Disc-end hand (Switzerland)' }
  ],
  boss: [
    { value: 0, text: 'Without axis cover' },
    { value: 2, text: 'Red axis cover' },
    { value: 1, text: 'Black axis cover' },
    { value: 3, text: 'Vienna cover' }
  ],
  minuteHandBehavoir: [
    { value: 0, text: 'Sweeping minute hand' },
    { value: 1, text: 'Stepping minute hand' },
    { value: 2, text: 'Stepping and bouncing minute hand' }
  ],
  secondHandBehavoir: [
    { value: 3, text: 'Stop to go second hand' },
    { value: 0, text: 'Sweeping second hand' },
    { value: 1, text: 'Stepping second hand' },
    { value: 2, text: 'Stepping and bouncing second hand' }
  ]
}
