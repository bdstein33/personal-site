import React from 'react';
import classNames from 'classnames';

class Right extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string
  };

  render() {
    const {
      children,
      className
    } = this.props;

    return (
      <div className={classNames('right', className)}>
        {children}
      </div>
    );
  }
}

export default Right;
