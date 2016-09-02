import React from 'react';
import TopNav from './shared/TopNav';
import Modal from './shared/Modal';
import FlexBox from './shared/FlexBox';

class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    return (
      <FlexBox
        className='app-container'
        flexDirection='column'
      >
        <TopNav />
        <div className='app-body'>
          {this.props.children}
        </div>
        <Modal/>
      </FlexBox>
    );
  }
}

export default App;
