import React from 'react';

import Container from '../layout/Container';
import DataHeader from './DataHeader';
import DataRow from './DataRow';

class DataGrid extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired,
    columns: React.PropTypes.object.isRequired,
    columnOrder: React.PropTypes.array,
    dataKey: React.PropTypes.string,
    onClick: React.PropTypes.func
  };

  constructor(props) {
    super(props);

    const columnWidth = Object.keys(props.columns).reduce((storage, columnName) => {
      return storage + (props.columns[columnName].columns || 0);
    }, 0);

    if (columnWidth > 12) {
      console.error('DataGrid Error: Width of DataGrid exceeds maximum allowed columns (12)');
    }
  }

  getColumns() {
    const {
      columns,
      columnOrder
    } = this.props;

    let output = [];
    const formattedColumns = Object.keys(columns).map(columnName => {
      const columnData = columns[columnName];
      columnData.name = columnName;
      columnData.label = columnData.label ||
                        columnName
                          // insert a space before all caps
                          .replace(/([A-Z])/g, ' $1')
                          // uppercase the first character
                          .replace(/^./, str => str.toUpperCase());

      if (!columnData.format) {
        columnData.format = (value) => value;
      }

      return columnData;
    });

    // If columnsOrder is provided, make sure that all the columns
    // in columnOrder are in columns object
    if (columnOrder) {
      if (columnOrder.length !== Object.keys(formattedColumns).length) {
        console.error('DataGrid Error: columnOrder data does not match up to column prop data');
      }

      columnOrder.forEach(columnName => {
        if (Object.keys(formattedColumns).indexOf(columnName) === 0) {
          console.error('DataGrid Error: columnOrder contains a name not found in columns prop');
        } else {
          output.push(formattedColumns[columnName]);
        }
      });
    } else {
      output = formattedColumns;
    }

    return output;
  }

  getData() {
    return this.props.data;
  }

  renderRows(columns) {
    const data = this.getData();
    return data.map((rowData, i) => {
      return (
        <DataRow
          data={rowData}
          columns={columns}
          onClick={this.props.onClick}
          key={`data-row-${rowData[this.props.dataKey] || i}`}
        />
      );
    });
  }

  render() {
    const columns = this.getColumns();

    return (
      <Container isFullWidth={true}>
        <DataHeader columns={columns}/>
        <Container isFullWidth={true}>
          {this.renderRows(columns)}
        </Container>
      </Container>
    );
  }
}

export default DataGrid;
