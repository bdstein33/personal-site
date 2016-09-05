import React from 'react';

import ScheduleBody from './ScheduleBody';
import ScheduleHeader from './ScheduleHeader';
import FlexBox from '../FlexBox';

class Schedule extends React.Component {
  static propTypes = {
    data: React.PropTypes.object
  }

  static defaultProps = {
    data: {
      '2016-10-01': {},
      '2016-10-02': {},
      '2016-10-03': {},
      '2016-10-04': {},
      '2016-10-05': {},
      '2016-10-06': {},
      '2016-10-07': {},
    }
  }

  // renderBodyColumns() {
  //   return Object.keys(this.props.data).map(date => {
  //     return (
  //       <ScheduleColumn
  //         data={this.props.data[date]}
  //         date={date}
  //         key={`schedule-column-${date}`}
  //       />
  //     );
  //   });
  // }

  // renderLeftColumn() {
  //   return (
  //     <ScheduleLeftColumn/>
  //   );
  // }

  render() {
    return (
      <FlexBox
        className='schedule'
        flexDirection='column'
      >
        <ScheduleHeader dates={Object.keys(this.props.data)}/>
        <ScheduleBody data={this.props.data}/>
      </FlexBox>
    );
  }
}

export default Schedule;


/*
        {this.renderLeftColumn()}
        {this.renderBodyColumns()}

data = {
  2016-10-01: {},
  2016-10-02: {},
  2016-10-03: {},
  2016-10-04: {},
  2016-10-05: {},
  2016-10-06: {},
  2016-10-07: {},
}
*/
