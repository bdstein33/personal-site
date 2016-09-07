import React from 'react';

import FlexBox from '../FlexBox';
import ScheduleColumn from './ScheduleColumn';
import ScheduleLeftColumn from './ScheduleLeftColumn';

class ScheduleBody extends React.Component {
  static propTypes = {
    data: React.PropTypes.object
  }

  renderBodyColumns() {
    return Object.keys(this.props.data).map(date => {
      return (
        <ScheduleColumn
          data={this.props.data[date]}
          date={date}
          key={`schedule-column-${date}`}
        />
      );
    });
  }

  renderLeftColumn() {
    return (
      <ScheduleLeftColumn/>
    );
  }

  render() {
    return (
      <FlexBox className='schedule__body'>
        {this.renderLeftColumn()}
        {this.renderBodyColumns()}
      </FlexBox>
    );
  }
}

export default ScheduleBody;
