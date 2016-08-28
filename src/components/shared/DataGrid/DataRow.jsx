import React from 'react';
import {autobind} from 'core-decorators';
import classNames from 'classnames';

import Column from '../layout/Column';
import Row from '../layout/Row';
import Text from '../Text';


class DataRow extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
    columns: React.PropTypes.array,
    onClick: React.PropTypes.func
  };

  @autobind
  handleOnClick() {
    if (this.props.onClick) {
      this.props.onClick(this.props.data);
    }
  }

  render() {
    const {
      data,
      columns,
      onClick
    } = this.props;

    return (
      <Row
        columns={12}
        className={classNames(
          'datagrid__row',
          'add-padding-side',
          onClick && 'clickable'
        )}
        onClick={this.handleOnClick}
      >
        {
          columns.map(column => {
            return (
              <Column
                columns={column.columns}
                key={`column-${data[column.name]}`}
              >
                <Text>{data[column.name]}</Text>
              </Column>
            );
          })
        }
      </Row>
    );
  }
}

export default DataRow;
