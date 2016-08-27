import React from 'react';
import classNames from 'classnames';

class Submit extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    value: React.PropTypes.string
  };

  static defaultProps = {
    value: 'Submit'
  }

  render() {
    const {
      className,
      value,
      ...otherProps
    } = this.props;

    return (
      <input
        type='submit'
        value={value}
        className={classNames('submit-input clickable text-white', className)}
        {...otherProps}
      />
    );
  }
}

export default Submit;
