import React from 'react';

import * as C from '../shared';

class Landing extends React.Component {
  render() {
    return (
      <div>
        <C.Hero title='LANDING PAGE'  className='add-margin-bottom'/>
        <C.Container centerContent={true}>
          <C.Text fontSize={6}>
            Redux Start Repo
          </C.Text>
            <C.Link href='https://github.com/bdstein33/personal-site'>
              Check out the code on Github
            </C.Link>
        </C.Container>
      </div>

    );
  }
}

export default Landing;
