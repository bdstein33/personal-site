import React from 'react';

import Column from '../layout/Column';
import Row from '../layout/Row';
import Text from '../Text';

class DataHeader extends React.Component {
  static propTypes = {
    columns: React.PropTypes.array
  };

  render() {
    const {
      columns
    } = this.props;

    return (
      <Row
        columns={12}
        className='datagrid__header add-padding-side'
      >
        {
          columns.map(column => {
            return (
              <Column
                columns={column.columns}
                key={`column-${column.label}`}

              >
                <Text bold={true}>{column.label}</Text>
              </Column>
            );
          })
        }
      </Row>
    );
  }
}

export default DataHeader;
