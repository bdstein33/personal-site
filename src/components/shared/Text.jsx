import React from 'react';
import classNames from 'classnames';

class Text extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    fontSize: React.PropTypes.oneOf([1, 2, 3, 4])
  };

  static defaultProps = {
    fontSize: 2
  }

  render() {
    const {
      children,
      className,
      fontSize,
      ...otherProps
    } = this.props;

    return (
      <span className={classNames(`text font-size-${fontSize}`, className)} {...otherProps}>
        {children}
      </span>
    );
  }
}

export default Text;
