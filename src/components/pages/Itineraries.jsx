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
      client: {columns: 2},
      name: {columns: 3},
      status: {columns: 2},
      lastViewed: {columns: 2},
      lastUpdated: {columns: 2}
    };

    return (
      <div>
       <C.Hero title='Itineraries'/>
       <C.DataGrid
         data={[
          {id: 1, name: 'San Francisco 2015', status: 'In Review', client: 'John Smith', lastViewed: '12/24/2015', lastUpdated: '12/24/2015'},
          {id: 2, name: 'India December 2016', status: 'Preparing', client: 'Ben Steinberg', lastViewed: '12/24/2015', lastUpdated: '12/24/2015'},
          {id: 3, name: 'John and Mary Honeymoon', status: 'Approved', client: 'Mary Wittmore', lastViewed: '12/24/2015', lastUpdated: '12/24/2015'}
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
