import React from 'react';

import * as C from '../shared';

class Landing extends React.Component {
  render() {
    return (
      <div>
        <C.Hero title='REDUX STARTER REPO'  className='add-margin-bottom'/>
        <C.Container centerContent={true}>

            <C.Link href='https://github.com/bdstein33/personal-site' fontSize={6}>
              Check out the code on Github
            </C.Link>
        </C.Container>
      </div>

    );
  }
}

export default Landing;
