import React from 'react'

import './Clocks.css';
import clockSVG from '../../assets/clock.svg'

const renderClock = (zone, idx) => {
  return (
    <div className='clocks__clock'>
      <div key={`clock-${idx}`} className='clocks__clock-svg-wrapper'>
        <object data={clockSVG} type="image/svg+xml" width="200" height="200">
          <param name="timezone"           value={zone.timezone}/>
          <param name="dial"               value="din 41091.1"/>
          <param name="hourHand"           value="din 41092.3"/>
          <param name="minuteHand"         value="din 41092.3"/>
          <param name="secondHand"         value="none"/>
          <param name="minuteHandBehavior" value="stepping"/>
          <param name="secondHandBehavior" value="swinging"/>
          <param name="secondHandStopToGo" value="yes"/>
          <param name="secondHandStopTime" value="1.5"/>
          <param name="backgroundColor"    value="rgba(0,0,0,0)"/>
          <param name="dialColor"          value="rgb(40,40,40)"/>
          <param name="hourHandColor"      value="rgb(20,20,20)"/>
          <param name="minuteHandColor"    value="rgb(20,20,20)"/>
          <param name="secondHandColor"    value="rgb(160,50,40)"/>
          <param name="axisCoverColor"     value="rgb(20,20,20)"/>
          <param name="axisCoverRadius"    value="0"/>
          <param name="updateInterval"     value="30000"/>
        </object>
      </div>
    </div>
  );
};

const Clocks = ({ zones }) =>
  <div className={`clocks`}>{ zones.map(renderClock) }</div>

export default Clocks
