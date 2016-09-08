import React from 'react';
import classNames from 'classnames';

class Icon extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    style: React.PropTypes.object
  };

  render() {
    const {
      className,
      name,
      ...otherProps
    } = this.props;

    return (
     <i className={classNames('material-icons', className)} {...otherProps}>{name}</i>
    );
  }
}

export default Icon;
