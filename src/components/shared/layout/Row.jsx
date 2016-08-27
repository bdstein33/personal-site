import React from 'react';
import Column from './Column';
import {
  get,
  isArray,
  map
} from 'lodash';
import classNames from 'classnames';

const flexOptions = ['top', 'middle', 'bottom', 'left', 'center', 'right'];

export default class Row extends React.Component {
  static propTypes = {
    columns: React.PropTypes.number,
    align: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.oneOf(flexOptions)),
      React.PropTypes.oneOf(flexOptions)
    ]),
    className: React.PropTypes.string,
    children: React.PropTypes.node
  };

  static defaultProps = {
    align: [],
    columns: 0
  };

  render() {
    let {
      columns,
      align,
      ...otherProps
    } = this.props;

    align = isArray(align) ? align : [align];

    if (!columns) {
      columns = 0;
      React.Children.forEach(this.props.children, child => {
        if (child && child.type === Column) {
          columns += get(child.props, 'columns', 0);
        }
      }, this);
      columns = Math.min(12, columns);
    }

    return (
      <div
        {...otherProps}
        className={classNames(
          'row',
          `row-${columns}`,
          map(align, option => `row__${option}`),
          this.props.className
        )}
      >
        {this.props.children}
      </div>
    );
  }
}
