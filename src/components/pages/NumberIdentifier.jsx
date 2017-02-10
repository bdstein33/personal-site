import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../addons/storeConnect';
import {numberIdentifierActions} from '../../actions';

import * as C from '../shared';

const formatBitmapData = data => data
                                  .filter((n, i) => (i + 1) % 4 === 0)
                                  .map(n => (n === 0 ? 0 : 1));

class NumberIdentifier extends React.Component {
  static propTypes = {
    application: React.PropTypes.object,
    actions: React.PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
  }

  @autobind
  storeImage(image) {
    this.setState({image});
  }

  @autobind
  submitNumber(data) {
    console.log(data);
    this.props.actions.submitNumberImage({
      image: JSON.stringify(Array.prototype.slice.call(formatBitmapData(this.state.image))),
      value: parseInt(data.number, 10)
    });
  }

  render() {
    return (
      <C.Container style={{paddingTop: 16}}>
        <C.Form onSubmit={this.submitNumber}>
          <div>
            <C.DrawingCanvas
              label='Draw Number 0 - 9'
              onMouseUp={this.storeImage}
            />
          </div>
          <C.TextInput
            label='Number'
            name='number'
            style={{width: 100}}
            type='number'
            min='0'
            max='9'
          />
          <C.Submit
            value='SUBMIT'
            style={{width: 100}}
          />
        </C.Form>
      </C.Container>
    );
  }
}

export default storeConnect(['application'], numberIdentifierActions)(NumberIdentifier);
