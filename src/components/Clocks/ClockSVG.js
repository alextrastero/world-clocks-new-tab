import React from 'react'
import PropTypes from 'prop-types'

/*

  station-clock.svg

  Copyright (c) 2012 Rüdiger Appel
  Licensed under the creative common license.

  Date:    2012-03-23
  Version: 1.0
  Email:   ludi(at)me(dot)com
  Home:    http://www.3Quarks.com/

  Adapted to react and appending idx to id for multiple instances

*/

const ClockSVG = ({ idx, width = 200, height = 200 }) => (
  <svg xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    xmlnsev='http://www.w3.org/2001/xml-events'
    version='1.1'
    baseProfile='full'
    width={width}
    height={height}
    viewBox='0 0 200 200'>

    <defs>
      <symbol id={`${idx}hourStrokeSwiss`}>
        <rect x='96.25' y='0' width='7.5' height='25' />
      </symbol>

      <symbol id={`${idx}minuteStrokeSwiss`}>
        <rect x='98.5' y='0' width='3' height='7.5' />
      </symbol>

      <symbol id={`${idx}fiveMinutesStrokesSwiss`}>
        <use xlinkHref={`#${idx}hourStrokeSwiss`} />
        <use xlinkHref={`#${idx}minuteStrokeSwiss`} transform='rotate( 6, 100, 100)' />
        <use xlinkHref={`#${idx}minuteStrokeSwiss`} transform='rotate(12, 100, 100)' />
        <use xlinkHref={`#${idx}minuteStrokeSwiss`} transform='rotate(18, 100, 100)' />
        <use xlinkHref={`#${idx}minuteStrokeSwiss`} transform='rotate(24, 100, 100)' />
      </symbol>

      <symbol id={`${idx}quarterStrokesSwiss`}>
        <use xlinkHref={`#${idx}fiveMinutesStrokesSwiss`} />
        <use xlinkHref={`#${idx}fiveMinutesStrokesSwiss`} transform='rotate(30, 100, 100)' />
        <use xlinkHref={`#${idx}fiveMinutesStrokesSwiss`} transform='rotate(60, 100, 100)' />
      </symbol>

      <symbol id={`${idx}hourStrokeAustria`}>
        <polygon points='104,0 96,0 97,22 103,22' />
      </symbol>

      <symbol id={`${idx}minuteStrokeAustria`}>
        <rect x='98.8' y='0' width='2.4' height='7.5' />
      </symbol>

      <symbol id={`${idx}fiveMinutesStrokesAustria`}>
        <use xlinkHref={`#${idx}hourStrokeAustria`} />
        <use xlinkHref={`#${idx}minuteStrokeAustria`} transform='rotate( 6, 100, 100)' />
        <use xlinkHref={`#${idx}minuteStrokeAustria`} transform='rotate(12, 100, 100)' />
        <use xlinkHref={`#${idx}minuteStrokeAustria`} transform='rotate(18, 100, 100)' />
        <use xlinkHref={`#${idx}minuteStrokeAustria`} transform='rotate(24, 100, 100)' />
      </symbol>

      <symbol id={`${idx}quarterStrokesAustria`}>
        <use xlinkHref={`#${idx}fiveMinutesStrokesAustria`} />
        <use xlinkHref={`#${idx}fiveMinutesStrokesAustria`} transform='rotate(30, 100, 100)' />
        <use xlinkHref={`#${idx}fiveMinutesStrokesAustria`} transform='rotate(60, 100, 100)' />
      </symbol>

      <symbol id={`${idx}threeHourStrokePoints`}>
        <circle cx='100' cy='9' r='9' />
      </symbol>

      <symbol id={`${idx}hourStrokePoints`}>
        <circle cx='100' cy='6' r='6' />
      </symbol>

      <symbol id={`${idx}quarterStrokesPoints`}>
        <use xlinkHref={`#${idx}threeHourStrokePoints`} />
        <use xlinkHref={`#${idx}hourStrokePoints`} transform='rotate(30, 100, 100)' />
        <use xlinkHref={`#${idx}hourStrokePoints`} transform='rotate(60, 100, 100)' />
      </symbol>

      <symbol id={`${idx}threeHourStrokeDIN41091.1`}>
        <rect x='95.8' y='0' width='8.4' height='30' />
      </symbol>

      <symbol id={`${idx}hourStrokeDIN41091.1`}>
        <rect x='95.8' y='0' width='8.4' height='24' />
      </symbol>

      <symbol id={`${idx}minuteStrokeDIN41091.1`}>
        <rect x='98.2' y='0' width='3.6' height='8' />
      </symbol>

      <symbol id={`${idx}quarterStrokesDIN41091.1`}>
        <use xlinkHref={`#${idx}threeHourStrokeDIN41091.1`} />
        <use xlinkHref={`#${idx}minuteStrokeDIN41091.1`} transform='rotate( 6, 100, 100)' />
        <use xlinkHref={`#${idx}minuteStrokeDIN41091.1`} transform='rotate(12, 100, 100)' />
        <use xlinkHref={`#${idx}minuteStrokeDIN41091.1`} transform='rotate(18, 100, 100)' />
        <use xlinkHref={`#${idx}minuteStrokeDIN41091.1`} transform='rotate(24, 100, 100)' />
        <use xlinkHref={`#${idx}hourStrokeDIN41091.1`} transform='rotate(30, 100, 100)' />
        <use xlinkHref={`#${idx}minuteStrokeDIN41091.1`} transform='rotate(36, 100, 100)' />
        <use xlinkHref={`#${idx}minuteStrokeDIN41091.1`} transform='rotate(42, 100, 100)' />
        <use xlinkHref={`#${idx}minuteStrokeDIN41091.1`} transform='rotate(48, 100, 100)' />
        <use xlinkHref={`#${idx}minuteStrokeDIN41091.1`} transform='rotate(54, 100, 100)' />
        <use xlinkHref={`#${idx}hourStrokeDIN41091.1`} transform='rotate(60, 100, 100)' />
        <use xlinkHref={`#${idx}minuteStrokeDIN41091.1`} transform='rotate(66, 100, 100)' />
        <use xlinkHref={`#${idx}minuteStrokeDIN41091.1`} transform='rotate(72, 100, 100)' />
        <use xlinkHref={`#${idx}minuteStrokeDIN41091.1`} transform='rotate(78, 100, 100)' />
        <use xlinkHref={`#${idx}minuteStrokeDIN41091.1`} transform='rotate(84, 100, 100)' />
      </symbol>

      <symbol id={`${idx}threeHourStrokeDIN41091.3`}>
        <rect x='94' y='0' width='12' height='30' />
      </symbol>

      <symbol id={`${idx}hourStrokeDIN41091.3`}>
        <rect x='95' y='0' width='10' height='26' />
      </symbol>

      <symbol id={`${idx}quarterStrokesDIN41091.3`}>
        <use xlinkHref={`#${idx}threeHourStrokeDIN41091.3`} />
        <use xlinkHref={`#${idx}hourStrokeDIN41091.3`} transform='rotate(30, 100, 100)' />
        <use xlinkHref={`#${idx}hourStrokeDIN41091.3`} transform='rotate(60, 100, 100)' />
      </symbol>

      <symbol id={`${idx}hourStrokeDIN41091.4`}>
        <rect x='97' y='0' width='6' height='7' />
      </symbol>

      <symbol id={`${idx}minuteStrokeDIN41091.4`}>
        <rect x='98.75' y='0' width='2.5' height='7' />
      </symbol>

      <symbol id={`${idx}fiveMinutesStrokesDIN41091.4`}>
        <use xlinkHref={`#${idx}hourStrokeDIN41091.4`} />
        <use xlinkHref={`#${idx}minuteStrokeDIN41091.4`} transform='rotate( 6, 100, 100)' />
        <use xlinkHref={`#${idx}minuteStrokeDIN41091.4`} transform='rotate(12, 100, 100)' />
        <use xlinkHref={`#${idx}minuteStrokeDIN41091.4`} transform='rotate(18, 100, 100)' />
        <use xlinkHref={`#${idx}minuteStrokeDIN41091.4`} transform='rotate(24, 100, 100)' />
      </symbol>

      <symbol id={`${idx}quarterStrokesDIN41091.4`}>
        <use xlinkHref={`#${idx}fiveMinutesStrokesDIN41091.4`} />
        <use xlinkHref={`#${idx}fiveMinutesStrokesDIN41091.4`} transform='rotate(30, 100, 100)' />
        <use xlinkHref={`#${idx}fiveMinutesStrokesDIN41091.4`} transform='rotate(60, 100, 100)' />
      </symbol>

      <clipPath id={`${idx}dialCircle`}>
        <circle cx='100' cy='100' r='100' />
      </clipPath>

    </defs>

    <g id={`${idx}clock`} clipPath={`url(#${idx}dialCircle)`} visibility='hidden'>
      <g id={`${idx}background`} style={{fill:'none'}}>
        <circle cx='100' cy='100' r='100' style={{stroke: 'none'}} />
      </g>

      <g id={`${idx}dial`} style={{fill: '#333'}}>
        <g id={`${idx}dialSwiss`} visibility='hidden'>
          <use xlinkHref={`#${idx}quarterStrokesSwiss`} style={{stroke: 'none'}} />
          <use xlinkHref={`#${idx}quarterStrokesSwiss`} style={{stroke: 'none'}} transform='rotate( 90, 100, 100)' />
          <use xlinkHref={`#${idx}quarterStrokesSwiss`} style={{stroke: 'none'}} transform='rotate(180, 100, 100)' />
          <use xlinkHref={`#${idx}quarterStrokesSwiss`} style={{stroke: 'none'}} transform='rotate(270, 100, 100)' />
        </g>
        <g id={`${idx}dialAustria`} visibility='hidden'>
          <use xlinkHref={`#${idx}quarterStrokesAustria`} style={{stroke: 'none'}} />
          <use xlinkHref={`#${idx}quarterStrokesAustria`} style={{stroke: 'none'}} transform='rotate( 90, 100, 100)' />
          <use xlinkHref={`#${idx}quarterStrokesAustria`} style={{stroke: 'none'}} transform='rotate(180, 100, 100)' />
          <use xlinkHref={`#${idx}quarterStrokesAustria`} style={{stroke: 'none'}} transform='rotate(270, 100, 100)' />
        </g>
        <g id={`${idx}dialPoints`} visibility='hidden'>
          <use xlinkHref={`#${idx}quarterStrokesPoints`} style={{stroke: 'none'}} />
          <use xlinkHref={`#${idx}quarterStrokesPoints`} style={{stroke: 'none'}} transform='rotate( 90, 100, 100)' />
          <use xlinkHref={`#${idx}quarterStrokesPoints`} style={{stroke: 'none'}} transform='rotate(180, 100, 100)' />
          <use xlinkHref={`#${idx}quarterStrokesPoints`} style={{stroke: 'none'}} transform='rotate(270, 100, 100)' />
        </g>
        <g id={`${idx}dialDIN41091.1`} visibility='hidden'>
          <use xlinkHref={`#${idx}quarterStrokesDIN41091.1`} style={{stroke: 'none'}} />
          <use xlinkHref={`#${idx}quarterStrokesDIN41091.1`} style={{stroke: 'none'}} transform='rotate( 90, 100, 100)' />
          <use xlinkHref={`#${idx}quarterStrokesDIN41091.1`} style={{stroke: 'none'}} transform='rotate(180, 100, 100)' />
          <use xlinkHref={`#${idx}quarterStrokesDIN41091.1`} style={{stroke: 'none'}} transform='rotate(270, 100, 100)' />
        </g>
        <g id={`${idx}dialDIN41091.3`} visibility='hidden'>
          <use xlinkHref={`#${idx}quarterStrokesDIN41091.3`} style={{stroke: 'none'}} />
          <use xlinkHref={`#${idx}quarterStrokesDIN41091.3`} style={{stroke: 'none'}} transform='rotate( 90, 100, 100)' />
          <use xlinkHref={`#${idx}quarterStrokesDIN41091.3`} style={{stroke: 'none'}} transform='rotate(180, 100, 100)' />
          <use xlinkHref={`#${idx}quarterStrokesDIN41091.3`} style={{stroke: 'none'}} transform='rotate(270, 100, 100)' />
        </g>
        <g id={`${idx}dialDIN41091.4`} visibility='hidden'>
          <use xlinkHref={`#${idx}quarterStrokesDIN41091.4`} style={{stroke: 'none'}} />
          <use xlinkHref={`#${idx}quarterStrokesDIN41091.4`} style={{stroke: 'none'}} transform='rotate( 90, 100, 100)' />
          <use xlinkHref={`#${idx}quarterStrokesDIN41091.4`} style={{stroke: 'none'}} transform='rotate(180, 100, 100)' />
          <use xlinkHref={`#${idx}quarterStrokesDIN41091.4`} style={{stroke: 'none'}} transform='rotate(270, 100, 100)' />
          <g textAnchor='middle' letterSpacing='-2' fontFamily='sans-serif' fontSize='24px' style={{stroke:'none'}}>
            <text x='100' y='30'>12</text>
            <text x='143' y='41'>1</text>
            <text x='171' y='70'>2</text>
            <text x='182' y='109'>3</text>
            <text x='171' y='147'>4</text>
            <text x='142' y='176'>5</text>
            <text x='100' y='188'>6</text>
            <text x='60' y='176'>7</text>
            <text x='30' y='147'>8</text>
            <text x='18' y='109'>9</text>
            <text x='34' y='70'>10</text>
            <text x='61' y='41'>11</text>
          </g>
        </g>
      </g>

      <g id={`${idx}hourHand`} style={{fill:'#222'}}>
        <g id={`${idx}hourHandSwiss`}>
          <polygon points='95,33 105,33 106,125 94,125' style={{stroke: 'none'}} />
        </g>
        <g id={`${idx}hourHandGerman`} visibility='hidden'>
          <rect x='95' y='40' width='10' height='65' style={{stroke: 'none'}} />
        </g>
        <g id={`${idx}hourHandSiemens`} visibility='hidden'>
          <rect x='97.3' y='65' width='5.4' height='35' style={{stroke: 'none'}} />
          <circle cx='97.3' cy='58.5' r='9' style={{stroke: 'none'}} />
          <circle cx='102.7' cy='58.5' r='9' style={{stroke: 'none'}} />
          <path d='M 88.3,58.5 Q 88.3,52 100,37.5 Q 111.7,52 111.7,58.5 Z' style={{stroke: 'none'}} />
          <path d='M 93.5,123 Q 100,125.5 106.5,123 Q 103,116 102.7,100 L 97.3,100 Q 97.3,116 93.5,123 Z' style={{stroke: 'none'}} />
          <circle cx='100' cy='100' r='7.4' style={{stroke: 'none'}} />
        </g>
        <g id={`${idx}hourHandDIN41092.3`} visibility='hidden'>
          <polygon points='94,46 100,40 106,46 106,118 94,118' style={{stroke: 'none'}} />
        </g>
      </g>

      <g id={`${idx}minuteHand`} style={{fill:'#222'}}>
        <g id={`${idx}minuteHandSwiss`}>
          <polygon points='96,5 104,5 105,125 95,125' style={{stroke: 'none'}} />
        </g>
        <g id={`${idx}minuteHandGerman`} visibility='hidden'>
          <rect x='95' y='6' width='8' height='99' style={{stroke: 'none'}} />
        </g>
        <g id={`${idx}minuteHandSiemens`} visibility='hidden'>
          <polygon points='95.3,49 99.5,2 100.5,2 104.7,49 102.7,100 97.3,100' style={{stroke: 'none'}} />
          <path d='M 93.5,123 Q 100,125.5 106.5,123 Q 103,116 102.7,100 L 97.3,100 Q 97.3,116 93.5,123 Z' style={{stroke: 'none'}} />
          <circle cx='100' cy='100' r='7' style={{stroke: 'none'}} />
        </g>
        <g id={`${idx}minuteHandDIN41092.3`} visibility='hidden'>
          <polygon points='95.5,11.5 100,7 104.5,11.5 104.5,122 95.5,122' style={{stroke: 'none'}} />
        </g>
      </g>

      <g id={`${idx}secondHand`} style={{fill:'#ad1a14', stroke:'#ad1a14'}}>
        <g id={`${idx}secondHandSwiss`}>
          <line x1='100' y1='34' x2='100' y2='135' style={{strokeWidth: 3.5, strokeLinecap: 'butt'}} />
          <circle cx='100' cy='34' r='10' style={{stroke: 'none'}} />
        </g>
        <g id={`${idx}secondHandGerman`} visibility='hidden'>
          <polygon points='98,4 102,4 102.3,36 97.7,36' style={{stroke: 'none'}} />
          <circle cx='100' cy='45' r='10' style={{fill: 'none', strokeWidth: 4 }} />
          <polygon points='97.5,56 102.5,55 103,102 97,102' style={{stroke: 'none'}} />
        </g>
        <g id={`${idx}secondHandDIN41071.1`} visibility='hidden'>
          <polygon points='99.4,8 100.6,8 102.8,123 97.2,123' style={{stroke: 'none'}} />
        </g>
        <g id={`${idx}secondHandDIN41071.2`} visibility='hidden'>
          <polygon points='98.8,11 100,9.8 101.2,11 101.6,42 98.4,42' style={{stroke: 'none'}} />
          <polygon points='98.1,58 101.9,58 102.5,122 97.5,122' style={{stroke: 'none'}} />
          <circle cx='100' cy='50' r='8.5' style={{fill: 'none', strokeWidth: 6.5 }} />
        </g>
      </g>

      <g id={`${idx}axisCover`} style={{fill:'none'}}>
        <circle id={`${idx}axisCoverCircle`} cx='100' cy='100' r='10' style={{stroke: 'none'}} />
      </g>
    </g>
  </svg>
)

ClockSVG.propTypes = {
  idx: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

export default ClockSVG
