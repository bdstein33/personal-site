import React from 'react';
import classNames from 'classnames';

class Container extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    isFullWidth: React.PropTypes.bool,
    centerContent: React.PropTypes.bool,
    padding: React.PropTypes.bool
  }

  static defaultProps = {
    isFullWidth: false,
    padding: true,
    centerContent: false
  }

  render() {
    const {
      className,
      isFullWidth,
      padding,
      centerContent,
      ...otherProps
    } = this.props;

    return (
      <div
        { ...otherProps}
        className={
          classNames(
            `container__${isFullWidth ? 'full-width' : 'main'}`,
            padding ? 'padding' : '',
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
