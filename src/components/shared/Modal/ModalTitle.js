import React from 'react';
import classNames from 'classnames';
import {autobind} from 'core-decorators';

class ModalTitle extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    hideModal: React.PropTypes.func,
    text: React.PropTypes.string.isRequired
  };

  @autobind
  hideModal() {
    this.props.hideModal();
  }

  render() {
    const {
      className,
      text
    } = this.props;

    return (
      <div className={classNames('modal-title text-white text-center', className)}>
        {text}
        <div onClick={this.hideModal} className='close-button clickable'>✕</div>
      </div>
    );
  }
}

export default ModalTitle;
