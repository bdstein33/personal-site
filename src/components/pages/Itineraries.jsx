import React from 'react';

import storeConnect from '../addons/storeConnect';

import * as C from '../shared';

class Itineraries extends React.Component {
  static propTypes = {
    application: React.PropTypes.object
  }

  clickRow(data) {
    console.log(data);
  }

  render() {
    const columns = {
      name: {columns: 2},
      age: {columns: 2},
      height: {columns: 2},
      width: {columns: 2}
    };

    return (
      <div>
       <C.Hero title='Itineraries'/>
       <C.DataGrid
         data={[
          {id: 1, name: 'Joe', age: 10, height: 100, width: 20},
          {id: 2, name: 'Sarah', age: 10, height: 100, width: 20},
          {id: 3, name: 'Mary', age: 10, height: 100, width: 20}
         ]}
         columns={columns}
         dataKey='id'
         onClick={this.clickRow}
       />
      </div>
    );
  }
}

export default storeConnect(['application'])(Itineraries);
