import React from 'react';
import classNames from 'classnames';

class Text extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    fontSize: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
    bold: React.PropTypes.bool
  };

  static defaultProps = {
    fontSize: 2
  }

  render() {
    const {
      children,
      className,
      fontSize,
      bold,
      ...otherProps
    } = this.props;

    return (
      <span
        className={classNames(
          `text font-size-${fontSize}`,
          bold && 'bold',
          className
        )}
        {...otherProps}
      >
        {children}
      </span>
    );
  }
}

export default Text;
