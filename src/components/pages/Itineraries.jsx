import React from 'react';
import moment from 'moment';
import {autobind} from 'core-decorators';

import storeConnect from '../addons/storeConnect';
import {navigate} from '../../util';
import {modalActions} from '../../actions';

import * as C from '../shared';
import NewItineraryModal from './Itineraries/NewItineraryModal';

class Itineraries extends React.Component {
  static propTypes = {
    // From storeConnect
    actions: React.PropTypes.object,
    itineraries: React.PropTypes.array
  }

  clickRow(data) {
    navigate(`/itineraries/${data.id}`);
  }

  @autobind
  showNewItineraryModal() {
    this.props.actions.showModal(
      <NewItineraryModal/>,
      'New Itinerary'
    );
  }

  render() {
    const {itineraries} = this.props;
    const columns = {
      client: {columns: 2},
      name: {columns: 2},
      status: {columns: 2},
      lastViewed: {columns: 2},
      updatedAt: {label: 'Last Updated', columns: 2}
    };

    return (
      <div>
       <C.Hero title='Itineraries'/>
       <C.Row align='right' className='add-margin'>
         <C.Button onClick={this.showNewItineraryModal}>NEW</C.Button>
       </C.Row>
       <C.DataGrid
         data={itineraries.map(itinerary => {
           return {
             ...itinerary,
             client: 'John Smith',
             updatedAt: moment(itinerary.updatedAt).format('ll'),
             lastViewed: moment('2015-12-24').format('ll')
           };
         })}
         columns={columns}
         dataKey='id'
         onClick={this.clickRow}
       />
      </div>
    );
  }
}

export default storeConnect([{itineraries: 'itinerary.itineraries'}], modalActions)(Itineraries);
