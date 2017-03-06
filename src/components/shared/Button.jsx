import React from 'react';
import {autobind} from 'core-decorators';
import classNames from 'classnames';

class Button extends React.Component {
  static propTypes = {
    text: React.PropTypes.string,
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    bStyle: React.PropTypes.oneOf(['solid', 'transparent']),
    bColor: React.PropTypes.oneOf(['blue', 'teal', 'red', 'yellow']),
    onClick: React.PropTypes.func,
    // disabled: React.PropTypes.boolean  TO DO
  };

  static defaultProps = {
    bColor: 'blue',
    bStyle: 'solid'
  }

  @autobind
  generateClassName() {
    const {
      bStyle,
      bColor,
      className
    } = this.props;

    if (this.props.bStyle === 'solid') {
      return classNames(
        'button',
        `button__${bStyle}`,
        `background-color-${bColor}`,
        className
      );
    }

    return classNames(
      'button',
      `button__${bStyle}`,
      `background-color-${bColor}`,
      'background-color-white',
      `color-${bColor}`,
      className
    );
  }

  render() {
    const {
      text,
      children,
      ...otherProps
    } = this.props;

    return (
      <div
        {...otherProps}
        className={this.generateClassName()}
      >
        {children || text.toUpperCase()}
      </div>
    );
  }
}

export default Button;
