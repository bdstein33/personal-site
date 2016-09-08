import React from 'react';
import {autobind} from 'core-decorators';

import storeConnect from '../../addons/storeConnect';
// import {modalActions, authActions} from '../../../actions';


class EditEventModal extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    event: React.PropTypes.object
  }



  render() {
    console.log(this.props);
    return (
      <div className='content-container' style={{width: 800}}>
        Hi
      </div>
    );
  }
}

// export default storeConnect(null, modalActions)(EditEventModal);
export default EditEventModal;
