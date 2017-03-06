import React from 'react';

import * as C from '../../shared';

class PredictionRow extends React.Component {
  static propTypes = {
    prediction: React.PropTypes.number,
    imageUrl: React.PropTypes.string
  }

  render() {
    return (
      <C.Row style={{marginBottom: 16}}>
        <div>
          <img
            src={this.props.imageUrl}
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
            {this.props.prediction}
          </span>
        </div>
      </C.Row>
    );
  }
}

export default PredictionRow;
