import React from 'react';
import classNames from 'classnames';

export default class Column extends React.Component {
  static propTypes = {
    columns: React.PropTypes.number.isRequired,
    className: React.PropTypes.string,
    children: React.PropTypes.node
  };

  static defaultProps = {
    columns: 1
  };

  render() {
    const {
      columns,
      className,
      ...otherProps
    } = this.props;

    return (
      <div
        {...otherProps}
        className={classNames(
          'column',
          `column-${columns}`,
          className
        )}
      >
        {this.props.children}
      </div>
    );
  }
}
