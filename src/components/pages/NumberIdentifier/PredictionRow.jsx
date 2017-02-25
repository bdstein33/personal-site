import React from 'react';

import * as C from '../../shared';

const PredictionRow = ({prediction, imageUrl}) => {
  return (
    <C.Row style={{marginBottom: 16}}>
      <div>
        <img
          src={imageUrl}
          className='left'
          style={{border: '1px solid black', display: 'block'}}
        />
        <span
          className='left font-size-7'
          style={{
            display: 'inline-block',
            lineHeight: '100px',
            marginLeft: 16,
          }}
        >
          {prediction}
        </span>
      </div>
    </C.Row>
  );
};

PredictionRow.propTypes = {
  prediction: React.PropTypes.number,
  imageUrl: React.PropTypes.string
};

export default PredictionRow;
