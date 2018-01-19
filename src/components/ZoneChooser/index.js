import React from 'react';

import './ZoneChooser.css';

const ZoneChooser = ({ visible }) => {
  return visible && (
    <div className='zone-chooser'>
      choose time
    </div>
  )
};

export default ZoneChooser;
