import React from 'react';
import moment from 'moment';

import FlexBox from '../FlexBox';
import Text from '../Text';

class ScheduleHeader extends React.Component {
  static propTypes = {
    dates: React.PropTypes.array
  }

  renderHeader() {
    const {dates} = this.props;

    return dates.map(date => {
      return (
        <div
          className='schedule__column-header'
          key={`schedule-header-${date}`}
        >
          <Text
            fontSize={2}
            bold={true}
            className='schedule-header-label'
          >
            {moment.weekdays(moment(date).day()).toUpperCase()}
          </Text>
          <Text
            fontSize={2}
            bold={true}
            className='schedule-header-label'
          >
            {moment(date).format('MMM DD').toUpperCase()}
          </Text>
        </div>
      );
    });
  }

  renderLeftColumn() {
    return (
      <div className='schedule__column-header left-column'>
        <Text
          fontSize={2}
          bold={true}
          className='schedule-header-label'
          style={{lineHeight: '34px'}}
        >
          TIME
        </Text>
      </div>
    );
  }

  render() {
    return (
      <FlexBox className='schedule__header'>
        {this.renderLeftColumn()}
        {this.renderHeader()}
      </FlexBox>
    );
  }
}

export default ScheduleHeader;
