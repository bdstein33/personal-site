import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../addons/storeConnect';
import {numberIdentifierActions} from '../../actions';

import * as C from '../shared';

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
  submitNumber() {
    this.props.actions.submitNumberImage({image: this.state.image});
  }

  render() {
    return (
      <C.Container>
        <div>
          <C.DrawingCanvas
            onMouseUp={this.storeImage}
          />
        </div>
        <C.Button
          onClick={this.submitNumber}
        >
          Submit
        </C.Button>
      </C.Container>
    );
  }
}

export default storeConnect(['application'], numberIdentifierActions)(NumberIdentifier);
