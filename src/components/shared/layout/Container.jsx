import React from 'react';
import classNames from 'classnames';

class Container extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    isFullWidth: React.PropTypes.bool,
    centerContent: React.PropTypes.bool
  }

  static defaultProps = {
    isFullWidth: false,
    centerContent: false
  }

  render() {
    const {
      className,
      isFullWidth,
      centerContent,
      ...otherProps
    } = this.props;

    return (
      <div
        { ...otherProps}
        className={
          classNames(
            `container__${isFullWidth ? 'full-width' : 'main'}`,
            centerContent ? 'centered-content' : '',
            className
          )
        }
      >
        {this.props.children}
      </div>
    );
  }
}

export default Container;
